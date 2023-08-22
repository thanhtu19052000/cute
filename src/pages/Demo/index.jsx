import React, { useEffect } from 'react'
import { TYPE_ASSIGN, TYPE_IN_LINE } from '../../config/constant'
import { useDispatch, useSelector } from 'react-redux'

import HeaderPDF from '../../components/Template/HeaderPDF'
import RichTextFill from '../../components/Template/Form/RichText/RichTextFill'
import moment from 'moment/moment'
import { setHeader } from '../../redux/slice/demoSlice'

function Demo() {
    const { header, body, footer } = useSelector((state) => state.demo)
    const dispatch = useDispatch();
    useEffect(() => {
        const header = [
            {
                typeInLine: TYPE_IN_LINE.MULTI, data: [
                    { label: 'Số:', value: '', type: TYPE_ASSIGN.NUM_ID },
                    { label: `TPHM,ngày:${moment().day()},tháng:${moment().month()},năm:${moment().year()}`, type: TYPE_ASSIGN.NUM_ID }
                ]
            },
            { label: 'TỜ TRÌNH ĐỀ XUẤT CẤP TÍN DỤNG', type: TYPE_ASSIGN.TITLE },
            { label: 'ÁP DỤNG CÁC SẢN PHẨM CẤP TÍN DỤNG PHỤC VỤ NHU CẦU ĐỜI SỐNG', type: TYPE_ASSIGN.SUB_TITLE },
        ]
        dispatch(setHeader(header));
        // dispatch(setValue())
    }, []);

    return (
        <div>
            <HeaderPDF
                data={header}
                disPath={dispatch}
                typeDishPath={setHeader}
            />
        </div>
    )
}

export default Demo