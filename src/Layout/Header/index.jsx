import { Button, Dropdown, Input, Menu, Select } from 'antd';
import { CheckCircleOutlined, DownloadOutlined, SaveOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import { FONT_FAMILY, TYPE_HEADER } from '../../config/constant';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import BottomHeaderEForm from './BottomHeaderEForm';
import PAGE_URL from '../../config/constant/route';
import classNames from 'classnames/bind'
import cn from '../../utils/func/handleClassName';
import gearLogo from '../../asset/images/gear.png'
import ocbLogo from '../../asset/images/Logo-OCB-Sl.webp'
import { setConfig } from '../../redux/slice/configSlice';
import styles from './Header.module.scss'
import uuid from 'react-uuid';

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

const itemNavigates = [

    {
        label: 'Tìm kiếm',
        key: PAGE_URL.PORTAL,
        path: PAGE_URL.PORTAL
        //   icon: <MailOutlined />,
    },
    {
        label: 'Tạo mới',
        key: PAGE_URL.CREATE.CURRENT,
        path: PAGE_URL.CREATE.CURRENT,
        //   icon: <MailOutlined />,
    }
];

function Header({ typeHeader }) {
    const { name } = useSelector((state) => state.auth);
    const { fontFamily } = useSelector((state) => state.configType);
    const { pathname } = useLocation();
    const [current, setCurrent] = useState(pathname);
    const [hover, setHover] = useState();
    const navigate = useNavigate()
    const onNavigate = (item) => {
        setCurrent(item.key);
        navigate(item.path)
    };

    // console.log(current);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrap-adapt-top')}>
                <div className={cn([cx('wrapper-top'), 'padding'])}>
                    <div className={cn(['horizon', cx('wrapper-top-layout')])}>
                        <img src={ocbLogo} className={cx('wrapper-top-logo')}
                            onClick={() => {
                                navigate(PAGE_URL.PORTAL)
                            }}
                        />
                        {typeHeader === TYPE_HEADER.DEFAULT && <div className={cx('wrap-menu')}>
                            {itemNavigates.map((item) => {
                                return <div className={cn([cx('menu-item')])}
                                    onMouseEnter={() => {
                                        setHover(item.key)
                                    }}
                                    onMouseLeave={() => {
                                        setHover(' ')
                                    }}
                                    key={item.key}
                                    onClick={() => onNavigate(item)}
                                >
                                    <div style={{ textDecoration: 'none', color: 'black' }}>
                                        <span className={(current == item.key || hover == item.key) ? cx('active-text') : ''}>
                                            {item.label}
                                        </span>
                                    </div>
                                    {<div className={current == item.key ? cx('active') : ''}></div>}
                                    {<div className={hover == item.key ? cx('hover') : hover ? cx('de-hover') : ''}></div>}
                                </div>
                            })}
                        </div>}
                    </div>
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
            </div>

            {
                typeHeader === TYPE_HEADER.EFORM && <BottomHeaderEForm />
            }

        </div >
    )
}

export default Header