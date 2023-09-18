import { Button, Dropdown, Input } from 'antd';
import { CheckCircleOutlined, DownloadOutlined, SaveOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../components/Template/Common/Footer';
import Header from '../components/Template/Common/Header';
import HeaderPDF from '../components/Template/HeaderPDF';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import classNames from 'classnames/bind'
import cn from '../../utils/func/handleClassName';
import { saveAs } from 'file-saver';
import { setAction } from '../../redux/slice/actionSlice';
import styles from './Header.module.scss'

const cx = classNames.bind(styles);

function BottomHeaderEForm() {
    const fixedHeaderFooter = useSelector((state) => state.dataHeaderFooter);
    const disPath = useDispatch();
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const data = useSelector((state) => state.data);

    useEffect(() => {
        // Xử lý cuộn trang
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        // Đăng ký sự kiện cuộn trang
        window.addEventListener('scroll', handleScroll);

        // Loại bỏ sự kiện cuộn trang khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onSave = async () => {
        const apiUrl = 'http://localhost:4000/api/createEform';
        const postData = {
            maGiaoDich: 'B1234',
            dataPayload: data,
            headerFooterFixed: fixedHeaderFooter
        };
        const result = await axios.post(apiUrl, postData)
        console.log(result);
    }
    const docxDownload = async () => {
        // disPath(setAction({ genFile: true }));
        const footerElement = ReactDOMServer.renderToString(<Footer footer={fixedHeaderFooter.footer} />);
        const headerElement = ReactDOMServer.renderToString(<Header header={fixedHeaderFooter.header} />);
        // const bodyElement = ReactDOMServer.renderToString(<HeaderPDF header={data.header} />);
        const bodyElement = document.getElementById("Render").outerHTML;
        const apiUrl = 'http://localhost:4000/api/GenFile/generate-docx';
        const postData = {
            htmlBody: bodyElement,
            htmlHeader: headerElement,
            htmlFooter: footerElement
        };
        const result = await axios.post(apiUrl, postData, { responseType: 'blob' })
        downloadDocx(result.data, "myFileName.docx");
        function downloadDocx(data, filename) {
            const docxBlob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            const downloadUrl = URL.createObjectURL(docxBlob);
            const link = document.createElement("a");
            link.href = downloadUrl;

            link.download = filename;
            link.click();
            URL.revokeObjectURL(downloadUrl);
            // console.log(link);
        }
        // disPath(setAction({ genFile: false }));

    }
    const docxDownload2 = async () => {
        // disPath(setAction({ genFile: true }));
        const footerElement = ReactDOMServer.renderToString(<Footer footer={fixedHeaderFooter.footer} />);
        const headerElement = ReactDOMServer.renderToString(<Header header={fixedHeaderFooter.header} />);
        // const bodyElement = ReactDOMServer.renderToString(<HeaderPDF header={data.header} />);
        const bodyElement = document.getElementById("Render").outerHTML;
        const apiUrl = 'http://localhost:4000/api/GenFile/pip';
        const postData = {
            htmlBody: bodyElement,
            htmlHeader: headerElement,
            htmlFooter: footerElement
        };
        const result = await axios.post(apiUrl, postData, { responseType: 'blob' });


    }
    const onClick = async () => {
        // disPath(setAction({ genFile: true }));   

        // const headerElement = document.getElementById("Header");
        const footerElement = ReactDOMServer.renderToString(<Footer footer={fixedHeaderFooter.footer} />);
        const headerElement = ReactDOMServer.renderToString(<Header header={fixedHeaderFooter.header} />);
        // const bodyElement = ReactDOMServer.renderToString(<HeaderPDF header={data.header} />);
        const bodyElement = document.getElementById("Render").outerHTML;
        const apiUrl = 'http://localhost:4000/api/GenFile/generate-pdf';
        const postData = {
            htmlBody: bodyElement,
            htmlHeader: headerElement,
            htmlFooter: footerElement
        };
        console.log(postData);
        const result = await axios.post(apiUrl, postData, { responseType: 'blob' })
        downloadPdf(result.data, "myFileName.pdf");

        function downloadPdf(data, filename) {
            const pdfBlob = new Blob([data], { type: 'application/pdf' });
            const downloadUrl = URL.createObjectURL(pdfBlob);
            const link = document.createElement("a");
            link.href = downloadUrl;

            link.download = filename;
            link.click();
            URL.revokeObjectURL(downloadUrl);
            // console.log(link);
        }
        // disPath(setAction({ genFile: true }));
    }
    const items = [
        {
            // onMouseOver: () => { disPath(setAction({ genFile: true })); },
            // onMouseOut: () => { disPath(setAction({ genFile: false })); },
            label: (
                'PDF file'
            ),
            onClick: onClick,
            key: '12',
            icon: <UserOutlined />,
        },
        {
            // onMouseOver: () => { disPath(setAction({ genFile: true })); },
            // onMouseOut: () => { disPath(setAction({ genFile: false })); },
            onClick: docxDownload2,
            label: 'DOC file',
            key: '21',
            icon: <UserOutlined />,
        }
    ];
    return (
        <>
            {isHeaderFixed && <div className={cx('wrapper-bottom-header-fake')}></div>}
            <div className={cn([cx('wrapper-bottom-header'), isHeaderFixed ? cx('fixed') : ''])}>
                <div className={cx('wrapper-function')}>
                    <div className={cx('wrapper-detail-func')}>
                        <div>Tên tài liệu :</div>
                        <Input
                            placeholder='Nhập tên tài liệu'
                            className={cx('input-name')}
                            onChange={() => { }}
                            suffix=".PDF"
                        />
                    </div>
                    <div className={cx('wrapper-detail-func')}>
                        <Button
                            // type="primary"
                            icon={<SaveOutlined />}
                            loading={false}
                            onClick={onSave}
                        >Lưu lại</Button>
                        <Button
                            // type="def"
                            icon={<SyncOutlined />}
                            loading={false}
                            onClick={() => { }}
                        >Làm mới</Button>
                        <Button
                            type="primary"
                            // color='success'
                            // danger
                            icon={<CheckCircleOutlined />}
                            loading={false}
                            onClick={() => { }}
                        >Chấp nhận</Button>
                        <Dropdown
                            menu={{ items }}
                            placement="bottomRight"
                            arrow
                            // value={}
                            onChange={() => { }}
                        >
                            <Button
                                type="primary"
                                icon={<DownloadOutlined />}
                                loading={false}
                                onClick={() => { }}
                            >tải xuống</Button>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomHeaderEForm