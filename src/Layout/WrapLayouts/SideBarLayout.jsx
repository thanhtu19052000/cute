import Header from '../Header'
import React from 'react'
import { TYPE_HEADER } from '../../config/constant'

function SideBarLayout({ children }) {
    return (
        <div>
            <Header typeHeader={TYPE_HEADER.DEFAULT} />
            <div className='wrapper-default-A4'>
                {children}
            </div>
        </div>
    )
}

export default SideBarLayout