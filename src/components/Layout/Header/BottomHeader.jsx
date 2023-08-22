import { Button, Dropdown, Input } from 'antd';
import { CheckCircleOutlined, DownloadOutlined, SaveOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import DropDowList from '../../Template/Form/DropDownList';
import { FONT_FAMILY } from '../../../config/constant';
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles);
const items = [
    {
        label: 'PDF file',
        key: '12',
        // icon: <UserOutlined />,
    },
    {
        label: 'DOC file',
        key: '21',
        // icon: <UserOutlined />,
    }
];
function BottomHeader() {
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