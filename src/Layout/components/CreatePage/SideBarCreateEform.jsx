import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Menu } from 'antd';
import PAGE_URL from '../../../config/constant/route';
import QUY_TRINH from '../../../config/constant/quyTrinh';
import React from 'react';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Group 1', 'sub1', <MailOutlined />, [
        getItem('Tài sản bảo đảm', QUY_TRINH.TSBD.CURRENT, null, [getItem('Tài sản bảo đảm tờ 1', QUY_TRINH.TSBD.TSBD_1.key), getItem('Tài sản bảo đảm tờ 2', QUY_TRINH.TSBD.TSBD_2.key)]),
        getItem('Cho vay', QUY_TRINH.CHO_VAY.CURRENT, null, [getItem('Cho vay tờ 1', QUY_TRINH.CHO_VAY.CHO_VAY_1.key), getItem('Cho vay tờ 2', QUY_TRINH.CHO_VAY.CHO_VAY_2.key)]),
        getItem('Tín dụng', QUY_TRINH.TIN_DUNG.CURRENT, null, [getItem('Tín dụng tờ 1', QUY_TRINH.TIN_DUNG.TIN_DUNG_1.key), getItem('Tín dụng tờ 2', QUY_TRINH.TIN_DUNG.TIN_DUNG_2.key)]),
    ])
];
const SideBarCreateEform = ({ onChange }) => {

    return (
        <Menu
            onClick={onChange}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
            className='border-radius'
        />
    );
};
export default SideBarCreateEform;