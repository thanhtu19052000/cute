import { Button, Dropdown, Input, Select } from 'antd';
import { CheckCircleOutlined, DownloadOutlined, SaveOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import BottomHeader from './BottomHeader';
import DropDowList from '../../Template/Form/DropDownList';
import { FONT_FAMILY } from '../../../config/constant';
import React from 'react'
import classNames from 'classnames/bind'
import gearLogo from '../../../asset/images/gear.png'
import ocbLogo from '../../../asset/images/Logo-OCB-Sl.webp'
import { setConfig } from '../../../redux/slice/configSlice';
import styles from './Header.module.scss'

const cx = classNames.bind(styles);

const items = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
    },
];



function Header() {
    const { name } = useSelector((state) => state.auth);
    const { fontFamily } = useSelector((state) => state.configType);


    const dispatch = useDispatch();
    // console.log(configType);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-top')}>
                <img src={ocbLogo} className={cx('wrapper-top-logo')} />
                <div className={cx('wrapper-top-detail')}>
                    <div className={cx('info-custom')}>{name}</div>
                    <div className={cx('wrapper-icon')}

                    >
                        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                            <img src={gearLogo} className={cx('icon')} />
                            {/* <DownOutlined /> */}
                        </Dropdown>

                    </div>
                </div>

            </div>
            <BottomHeader />
        </div >
    )
}

export default Header