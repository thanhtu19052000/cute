import Header from '../Header'
import React from 'react'
import { TYPE_HEADER } from '../../config/constant';
import classNames from 'classnames';
import styles from './DefaultLayout.scss'

const cx = classNames.bind(styles)
function DefaultWraptLayouts({ children }) {
    return (
        <div>
            <Header typeHeader={TYPE_HEADER.DEFAULT} />
            <div className={cx('wrap-default-layout')}>
                {children}
            </div>
        </div>
    )
}

export default DefaultWraptLayouts

