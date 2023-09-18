import { KEY_RADIO, STYLE_TEXT, TYPE_ASSIGN, TYPE_IN_LINE, TYPE_RENDER_HEADER, VALUE_RADIO } from '../../config/constant'
import React, { useEffect, useRef } from 'react'
import { setBody, setHeader } from '../../redux/slice/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

import BodyPDF from '../../Layout/components/Template/Common/BodyPDF'
import { Dropdown } from 'antd'
import HeaderPDF from '../../Layout/components/Template/HeaderPDF'
import { StyleSheet } from '@react-pdf/renderer'
import Table from '../../Layout/components/Template/Form/Table'
import axios from 'axios'
import moment from 'moment'
import replace from '../../utils/func/replaceValueState'
import { setFixedHeaderFooterData } from '../../redux/slice/fixedHeaderFooterSlice'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import uuid from 'react-uuid'

function TIN_DUNG_1() {
    const { maGD } = useParams();
    const [defaultData, setDefaultData] = useState({
        nameTDV: 'Ủy Ban Tín Dụng Cấp 2'
    });
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
            num: { name: 'num', label: 'BÁO CÁO THẨM ĐỊNH TÍN DỤNG' },
            date: { label: `TPHM,ngày ${moment(new Date()).format('DD/MM|YYYY').toString().replace('/', ' tháng ').replace('|', ' năm ')}` }
        },
        {
            type: TYPE_RENDER_HEADER.MAIN_TITLE,
            value: [
                { label: 'TỜ TRÌNH ĐỀ XUẤT CẤP TÍN DỤNG', type: TYPE_RENDER_HEADER.TITLE },
                { label: `V/v: Cơ cấu lại thời hạn trả nợ đối với khách hàng Vũ Thị Thúy và Cấn Văn Vinh - RB ${moment().format('DD')} tháng ${moment().format('MM')} `, type: TYPE_RENDER_HEADER.SUB_TITLE_CHILD },
            ]
        }
    ]
    const [bodyData, setBody] = useState([
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TEXT_DISPLAY, label: 'Kính trình : ', value: 'defaultData.nameTDV', style: { value: [STYLE_TEXT.BOLD] } },
        { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TITLE, label: 'Phần 1. CẬP NHẬP THÔNG TIN KHÁCH HÀNG' },
        // { typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.SUB_TITLE, label: '1.1 Thông tin chung' },
        {
            typeLine: TYPE_IN_LINE.SINGLE, type: TYPE_ASSIGN.TABLE, value: [
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Thông tin', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Nhận xét của TĐTD', styleCol: ['w-80%', 'x-center'], style: []
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Pháp lý', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 1, 'value', 1, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 1, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true }
                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Chủ sở hữu', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', , 'value', 2, 'value'], e));

                                setBody(bodyData => { return replace(bodyData, [2, 'value', 2, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true }
                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Hoạt động kinh doanh', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 3, 'value', 2, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 3, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true, render: [TYPE_ASSIGN.TABLE] }
                            ],
                            dataRender: [

                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Hoạt động kinh doanh', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 3, 'value', 2, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 3, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true, render: [TYPE_ASSIGN.TABLE] }
                            ],
                            dataRender: [

                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Hoạt động kinh doanh', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 3, 'value', 2, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 3, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true, render: [TYPE_ASSIGN.TABLE] }
                            ],
                            dataRender: [

                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Hoạt động kinh doanh', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 3, 'value', 2, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 3, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true, render: [TYPE_ASSIGN.TABLE] }
                            ],
                            dataRender: [

                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Hoạt động kinh doanh', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 3, 'value', 2, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 3, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true, render: [TYPE_ASSIGN.TABLE] }
                            ],
                            dataRender: [

                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Hoạt động kinh doanh', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 3, 'value', 2, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 3, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true, render: [TYPE_ASSIGN.TABLE] }
                            ],
                            dataRender: [

                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Hoạt động kinh doanh', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 3, 'value', 2, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 3, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true, render: [TYPE_ASSIGN.TABLE] }
                            ],
                            dataRender: [

                            ]
                        }
                    ]
                }
                ,
                {
                    type: TYPE_ASSIGN.TABLE_ROW,
                    style: ['mh-30px'],
                    value: [
                        {
                            type: TYPE_ASSIGN.TEXT_DISPLAY, value: 'Hoạt động kinh doanh', styleCol: ['w-20%', 'x-center'], style: []
                        },
                        {
                            type: TYPE_ASSIGN.RADIO_BOX,
                            value: { value: VALUE_RADIO.NOT_HAVE_CHANGE },
                            styleCol: ['w-80%', 'x-left'],
                            style: [],
                            onChange: (e) => {
                                console.log(replace(bodyData, [2, 'value', 3, 'value', 2, 'value'], e));
                                setBody(bodyData => { return replace(bodyData, [2, 'value', 3, 'value', 1, 'value'], e) })
                            },
                            options: [
                                { value: VALUE_RADIO.NOT_HAVE_CHANGE, label: 'Không thay đổi' },
                                { value: VALUE_RADIO.HAVE_CHANGE, label: 'Có thay đổi', note: true, render: [TYPE_ASSIGN.TABLE] }
                            ],
                            dataRender: [

                            ]
                        }
                    ]
                }

            ]
        }

    ]);
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
                // console.log(error);
            }
        }
        getData();


    }, [])
    // console.log(moment(new Date()).day('DD'));
    // console.log('set body', bodyData);
    return (

        <div id='Render' className='styles-default-A4-content' style={styles.wrapper} >
            <HeaderPDF
                data={headerData}
            />
            <BodyPDF
                data={[...bodyData, ...bodyData, ...bodyData, ...bodyData, ...bodyData, ...bodyData]}
            />

        </div>

    )
}

export default TIN_DUNG_1

const styles = StyleSheet.create({
    wrapper: {
        // marginTop: 70
    }
})




