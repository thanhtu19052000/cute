import { Button, Row } from 'antd'
import React, { useEffect, useState } from 'react'

import ModalCreateEform from '../Template/Form/Modal/ModalCreateEform'
import classNames from 'classnames/bind'
import cn from '../../../utils/func/handleClassName'
import styles from './ContentCreateEform.module.scss'

const cx = classNames.bind(styles)
function ContentCreateEform({ children, onCreateNew, windowHeight }) {
    const [openModal, setOpenModal] = useState(false);
    // console.log(windowHeight);
    return (
        <div className={cx('container')}
            style={{ height: (windowHeight - 110) }}
        >
            <div
                className={cn([cx('sub-container'), 'border-radius'])}
                style={{ height: (windowHeight - 110) }}
            >

                <div
                    className={cx('wrap')}
                >
                    {children}
                </div>

            </div>
            <Row className={cx('wrap-btn')} justify={'center'} align={'middle'}>
                <Button className={[cx('button'), 'button-yellow']} htmlType="button" onClick={() => setOpenModal(true)} size='large'  >
                    <span className={cx('sumit-text')}>Sử dụng mẫu biểu này</span>
                </Button>
                <ModalCreateEform
                    open={openModal}
                    setOpen={setOpenModal}
                    onFinish={onCreateNew}
                />
            </Row>
        </div>
    )
}

export default ContentCreateEform