import { BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';
import { Button, Dropdown, Input } from 'antd';
import { CheckCircleOutlined, DownloadOutlined, SaveOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import { FONT_FAMILY, TYPE_ASSIGN, TYPE_IN_LINE, TYPE_RENDER_HEADER } from '../../../config/constant';
import { setBody, setHeader } from '../../../redux/slice/demoSlice'
import { useDispatch, useSelector } from 'react-redux';

import Demo from '../../../pages/Demo';
import DropDowList from '../../Template/Form/DropDownList';
import InterFacePage from '../../../pages/InterFace';
import React from 'react'
import classNames from 'classnames/bind'
import moment from 'moment';
import styles from './Header.module.scss'

const cx = classNames.bind(styles);

function BottomHeader() {
    const data = useSelector((state) => state.demo);
    // // console.log(header, body);
    const dispatch = useDispatch();
    // console.log('dataa vcl', data);
    const fixedHeaderFooter = {
        header: {
            label: 'Tên khách hàng:', value: 'do thanh tu', prefix: ''
        },
        footer: [
            { label: 'Note1 :', value: 'value1', prefix: '- prefix1' },
            { label: 'Note2 :', value: 'value2', prefix: '- prefix2' },
            { label: 'Note3 :', value: 'value3', prefix: '- prefix3' }
        ]
    }
    const headerData = [
        {
            type: TYPE_RENDER_HEADER.DATE_NUM,
            num: { name: 'num', label: 'Số :', value: data.header, prefix: '/hcm/t72037' },
            date: { label: `TPHM,ngày:${moment().day()},tháng:${moment().month()},năm:${moment().year()}` }
        },
        { label: 'TỜ TRÌNH ĐỀ XUẤT CẤP TÍN DỤNG', type: TYPE_RENDER_HEADER.TITLE },
        { label: 'ÁP DỤNG CÁC SẢN PHẨM CẤP TÍN DỤNG PHỤC VỤ NHU CẦU ĐỜI SỐNG', type: TYPE_RENDER_HEADER.SUB_TITLE },
    ]
    const bodyData = [
        { typeLine: TYPE_IN_LINE.SINGLE, label: 'Tên người dùng :', value: 'do thanh tu', type: TYPE_ASSIGN.TEXT_K_V },
        { typeLine: TYPE_IN_LINE.SINGLE, label: 'Số điện thoại :', value: '0123738954090', name: 'phone', }
    ]
    const items = [
        {
            label: (
                <BlobProvider document={<Demo dataFill={data} data={{ fixedHeaderFooter, bodyData, headerData }} dispatch={dispatch} typeReducer={{ setBody, setHeader }} genFile={true} />}>
                    {({ url, blob }) => {
                        console.log(blob);
                        return (
                            <a href={url} target="_blank">
                                View as PDF
                            </a>
                        );
                    }}
                </BlobProvider>
            ),
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
                {/* <Select
                    showSearch
                    style={{
                        width: 180,
                        borderRadius: 5
                    }}
                    bordered={false}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    value={fontFamily}
                    // size='large'
                    onChange={(value) => dispatch(setConfig({ fontFamily: value }))}
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={FONT_FAMILY}
                /> */}

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