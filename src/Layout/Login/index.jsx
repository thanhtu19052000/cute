import { Button, Checkbox, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import PAGE_URL from '../../config/constant/route';
import React from 'react'
import classNames from 'classnames/bind'
import cn from '../../utils/func/handleClassName';
import logo from '../../asset/Logo OCB(PNG)/Logo OCB Na.png'
import styles from './login.module.scss'
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Login() {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        navigate(PAGE_URL.PORTAL);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrap-logo')}>
                    <img
                        className={cx('logo')}
                        src={logo}
                    />
                </div>
                <h3 className={cn([cx('white-color'), cx('title')])}>New DGS</h3>
                <Form
                    name="basic"

                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        minWidth: 400,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        // label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập tên đăng nhập của bạn!',
                            },
                        ]}

                    >
                        <Input
                            size="large"
                            prefix={<UserOutlined style={{ opacity: '0.4' }} />}
                            placeholder='Tên đăng nhập'
                        />
                    </Form.Item>

                    <Form.Item
                        // label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu của bạn!',
                            },
                        ]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined style={{ opacity: '0.4' }} />}
                            placeholder='Mật khẩu'
                        />
                    </Form.Item>

                    {/* <Form.Item
                        name="remember"
                        valuePropName="checked"
                    // wrapperCol={{
                    //     offset: 8,
                    //     span: 16,
                    // }}
                    >
                        <Checkbox >
                            <span className={cx('white-color')}>
                                Duy trì đăng nhập
                            </span>
                        </Checkbox>
                    </Form.Item> */}

                    <Form.Item
                    // wrapperCol={{
                    //     offset: 8,
                    //     span: 8,
                    // }}
                    >
                        <Button htmlType="submit"
                            style={{ width: '100%' }}
                            size='large'
                            // styles={}
                            type='default'
                        >
                            <span color='white'>Đăng nhập</span>
                        </Button>
                    </Form.Item>
                    <Row justify={'center'} >
                        <a style={{ color: 'white' }}>
                            Quên mât khẩu
                        </a>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Login