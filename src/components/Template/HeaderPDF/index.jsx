import { TYPE_ASSIGN, TYPE_RENDER_HEADER } from '../../../config/constant'

import InputBorderLess from '../Form/Input/InputBorderLess'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './HeaderPDF.Module.scss'

const cx = classNames.bind(styles)
function HeaderPDF({ data, disPath, typeReducer }) {
    const onChange = () => {

    }
    return (
        <div className={cx('wrapper-header')}>
            {data && data.map((item) => {
                if (item.type == TYPE_RENDER_HEADER.DATE_NUM) {
                    console.log(item);
                    return <div className={cx('wrapper-date-num')}>
                        <div>
                            <InputBorderLess
                                value={item.num.value}
                                label={item.num.label}
                                prefix={item.num.prefix}
                                onChange={(e) => {
                                    disPath(typeReducer({ name: item.num.name, value: e.target.value }))
                                }}
                            />
                        </div>
                        <div>
                            <span>{item.date.label}</span>
                        </div>
                    </div>
                }
                if (item.type == TYPE_RENDER_HEADER.TITLE) {
                    return <h2>{item.label}</h2>
                }
                if (item.type == TYPE_RENDER_HEADER.SUB_TITLE) {
                    return <h3>{item.label}</h3>
                }
            })}
        </div>
    )
}

export default HeaderPDF