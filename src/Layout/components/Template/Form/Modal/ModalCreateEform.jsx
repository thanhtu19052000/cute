import { Button, Form, Input, Modal } from 'antd'

import { PARAM_EFORM } from '../../../../../config/constant'
import React from 'react'

function ModalCreateEform({ open, setOpen, onFinish }) {
    const onFinishFailed = () => {

    }
    return (
        <Modal
            title="Tạo mới Eform"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            footer={false}
            width={1000}
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={(value) => {
                    setOpen(false)
                    onFinish(value)
                }}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Mã BPM"
                    name={PARAM_EFORM.BPM_CODE}
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mã BPM trước khi tạo mới Eform!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalCreateEform