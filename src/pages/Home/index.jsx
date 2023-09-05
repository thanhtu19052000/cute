import React, { useEffect, useRef } from 'react'
import { TYPE_ASSIGN, TYPE_IN_LINE, TYPE_RENDER_HEADER } from '../../config/constant'

import Header from '../../components/Template/Header'
import HeaderPDF from '../../components/Template/HeaderPDF'
import { headerImage } from '../../asset/logo'
import moment from 'moment'
import { setFixedHeaderFooterData } from '../../redux/slice/fixedHeaderFooterSlice'
import { setHeader } from '../../redux/slice/dataSlice'
import { useDispatch } from 'react-redux'

function Home() {
    const disPath = useDispatch();
    const fixedHeaderFooter = {
        header: {
            label: 'Tên khách hàng:', value: 'do thanh tu', prefix: ''
        },
        footer: [
            { typeLine: TYPE_IN_LINE.SINGLE, value: 'hochiminh', label: 'so12/99', prefix: '' },
            {
                typeLine: TYPE_IN_LINE.MULTI, value: [
                    { typeLine: TYPE_IN_LINE.SINGLE, label: 'Note1 :', value: 'value1', prefix: '- prefix1' },
                    { typeLine: TYPE_IN_LINE.SINGLE, label: 'Note2 :', value: 'value2', prefix: '- prefix2' },
                    { typeLine: TYPE_IN_LINE.SINGLE, label: 'Note3 :', value: 'value3', prefix: '- prefix3' }
                ]
            }
        ]

    }
    const headerData = [
        {
            type: TYPE_RENDER_HEADER.DATE_NUM,
            num: { name: 'num', label: 'Số :', value: ' data.header', prefix: '/hcm/t72037' },
            date: { label: `TPHM,ngày:${moment().day()},tháng:${moment().month()},năm:${moment().year()}` }
        },
        { label: 'TỜ TRÌNH ĐỀ XUẤT CẤP TÍN DỤNG', type: TYPE_RENDER_HEADER.TITLE },
        { label: 'ÁP DỤNG CÁC SẢN PHẨM CẤP TÍN DỤNG PHỤC VỤ NHU CẦU ĐỜI SỐNG', type: TYPE_RENDER_HEADER.SUB_TITLE },
    ]
    useEffect(() => {
        disPath(setFixedHeaderFooterData(fixedHeaderFooter));
        disPath(setHeader(headerData))
    }, [])


    const bodyData = [
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TEXT_KEY_VALUE, label: 'Tên người dùng :', value: 'do thanh tu' },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TEXT_KEY_VALUE, label: 'Số điện thoại :', value: '0123738954090', name: 'phone', }
    ]
    return (

        <div id='Render' className='styles-default-A4-content'>
            <HeaderPDF
                data={headerData}
            />
            <div>tu dt</div>
        </div>

    )
}

export default Home