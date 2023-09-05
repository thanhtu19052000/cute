import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import { Button, Dropdown, Input } from 'antd';
import { CheckCircleOutlined, DownloadOutlined, SaveOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import { FONT_FAMILY, TYPE_ASSIGN, TYPE_IN_LINE, TYPE_RENDER_HEADER } from '../../../config/constant';
import { setBody, setHeader } from '../../../redux/slice/demoSlice'
import { useDispatch, useSelector } from 'react-redux';

import Demo from '../../../pages/Demo';
import DropDowList from '../../Template/Form/DropDownList';
import Footer from '../../Template/Footer';
import Header from '../../Template/Header';
import HeaderPDF from '../../Template/HeaderPDF';
import InterFacePage from '../../../pages/InterFace';
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import classNames from 'classnames/bind'
import moment from 'moment';
import styles from './Header.module.scss'

const cx = classNames.bind(styles);

function BottomHeader() {
    const { header, footer } = useSelector((state) => state.dataHeaderFooter);
    const data = useSelector((state) => state.data);
    console.log(footer);
    const onClick = async () => {
        // const bodyElement = document.getElementById("Render");
        // const headerElement = document.getElementById("Header");
        const footerElement = ReactDOMServer.renderToString(<Footer footer={footer} />);
        const headerElement = ReactDOMServer.renderToString(<Header header={header} />);
        const bodyElement = ReactDOMServer.renderToString(<HeaderPDF header={data.header} />);

        const apiUrl = 'http://localhost:4000/api/GenFile/generate-pdf';
        const postData = {
            htmlBody: bodyElement,
            htmlHeader: headerElement,
            htmlFooter: footerElement
        };
        const result = await axios.post(apiUrl, postData, { responseType: 'blob' })
        downloadPdf(result.data, "myFileName.pdf");

        function downloadPdf(data, filename) {
            const pdfBlob = new Blob([data], { type: 'application/pdf' });
            const downloadUrl = URL.createObjectURL(pdfBlob);
            const link = document.createElement("a");
            link.href = downloadUrl;

            // link.download = filename;
            link.click();
            // URL.revokeObjectURL(downloadUrl);
            // console.log(link);
        }
    }
    const items = [
        {
            label: (
                'PDF file'
            ),
            onClick: onClick,
            key: '12',
            icon: <UserOutlined />,
        },
        {
            label: 'DOC file',
            key: '21',
            icon: <UserOutlined />,
        }
    ];
    return (
        <>
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
                        onClick={() => {

                        }}
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
        </>
    )
}

export default BottomHeader