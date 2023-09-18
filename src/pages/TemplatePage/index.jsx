import React, { useEffect, useRef } from 'react'
import { TYPE_ASSIGN, TYPE_IN_LINE, TYPE_RENDER_HEADER } from '../../config/constant'
import { setBody, setHeader } from '../../redux/slice/dataSlice'

import BodyPDF from '../../components/Template/Common/BodyPDF'
import { Dropdown } from 'antd'
import HeaderPDF from '../../components/Template/HeaderPDF'
import { StyleSheet } from '@react-pdf/renderer'
import axios from 'axios'
import moment from 'moment'
import { setFixedHeaderFooterData } from '../../redux/slice/fixedHeaderFooterSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

function Home({ route }) {
    const { maGD } = useParams();

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
            date: { label: `TPHM,ngày:${moment(new Date()).day()},tháng:${moment(new Date()).month()},năm:${moment(new Date()).year()}` }
        },
        {
            type: TYPE_RENDER_HEADER.MAIN_TITLE,
            value: [
                { label: 'TỜ TRÌNH ĐỀ XUẤT CẤP TÍN DỤNG', type: TYPE_RENDER_HEADER.TITLE },
                { label: 'ÁP DỤNG CÁC SẢN PHẨM CẤP TÍN DỤNG PHỤC VỤ NHU CẦU ĐỜI SỐNG', type: TYPE_RENDER_HEADER.SUB_TITLE },
            ]
        }
    ]
    const bodyData = [
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TITLE, label: 'Phần 1.', value: ' THÔNG TIN KHÁCH HÀNG/NGƯỜI HÔN PHỐI, ĐỒNG TRÁCH NHIỆM, PHỤ THUỘC' },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TEXT_KEY_VALUE, label: 'Tên người dùng :', value: '' },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TEXT_KEY_VALUE, label: 'Số điện thoại :', value: '', name: 'phone', },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TABLE },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.IMAGE },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.RICH_TEXT },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.RICH_TEXT },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.DROP_DOWN }

    ]
    useEffect(() => {
        disPath(setFixedHeaderFooterData(fixedHeaderFooter));
        const getData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:4000/api/createEform/${maGD}`);
                if (data) {
                    // disPath(setHeader(result.data.));
                    disPath(setHeader(data.data[0].header));
                    disPath(setBody(data.data[0].body));
                } else {
                    disPath(setHeader(headerData));
                    disPath(setBody(bodyData));
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();


    }, [])
    // console.log(moment(new Date()).day('DD'));
    return (

        <div id='Render' className='styles-default-A4-content' style={styles.wrapper} >
            <HeaderPDF
                data={headerData}
            />
            <BodyPDF
                data={bodyData}
            />
            <Dropdown menu={{ items }}>
                <button>asdasd</button>
            </Dropdown>
            <Dropdown menu={{ items }}>
                <button>asdasd</button>
            </Dropdown>
        </div>

    )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
        // marginTop: 70
    }
})




