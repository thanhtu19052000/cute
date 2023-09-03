import { BlobProvider, Document, Font, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { TYPE_ASSIGN, TYPE_IN_LINE, TYPE_RENDER_HEADER } from '../../config/constant';
import { setBody, setHeader } from '../../redux/slice/demoSlice'
import { useDispatch, useSelector } from 'react-redux';

import Demo from '../Demo'
import InputBorderLess from '../../components/Template/Form/Input/InputBorderLess';
import PDFFile from './DPFDemo';
import React from 'react'
import fontFamily from '../../asset/font/Roboto-Medium.ttf'
import moment from 'moment';

Font.register({
    family: 'Roboto',
    src: fontFamily, // URL to the Roboto Regular font
});

function InterFacePage() {
    const data = useSelector((state) => state.demo);
    // // console.log(header, body);
    const dispatch = useDispatch();
    console.log('dataa vcl', data);
    const fixedHeaderFooter = {
        header: {
            label: 'Tên khách hàng:', value: 'do thanh tu', prefix: ''
        },
        footer: [
            { label: 'Note1 :', value: 'value1', prefix: '- prefix1' },
            { label: 'Note2 :', value: 'value2', prefix: '- prefix2' },
            { label: 'Note3 :', value: 'value3', prefix: '- prefix3' }
        ]
    }
    const headerData = [
        {
            type: TYPE_RENDER_HEADER.DATE_NUM,
            num: { name: 'num', label: 'Số :', value: data.header, prefix: '/hcm/t72037' },
            date: { label: `TPHM,ngày:${moment().day()},tháng:${moment().month()},năm:${moment().year()}` }
        },
        { label: 'TỜ TRÌNH ĐỀ XUẤT CẤP TÍN DỤNG', type: TYPE_RENDER_HEADER.TITLE },
        { label: 'ÁP DỤNG CÁC SẢN PHẨM CẤP TÍN DỤNG PHỤC VỤ NHU CẦU ĐỜI SỐNG', type: TYPE_RENDER_HEADER.SUB_TITLE },
    ]
    const bodyData = [
        { typeLine: TYPE_IN_LINE.SINGLE, label: 'Tên người dùng :', value: 'do thanh tu', type: TYPE_ASSIGN.TEXT_K_V },
        { typeLine: TYPE_IN_LINE.SINGLE, label: 'Số điện thoại :', value: '0123738954090', name: 'phone', }
    ]
    // console.log(data);
    return (
        <Document  >
            <Page size={'A4'} style={styles.page}>

                <Demo data={{ fixedHeaderFooter, headerData, bodyData }} dispatch={dispatch} typeReducer={{ setBody, setHeader }} />
                {/* <InputBorderLess /> */}
                {/* <Text>ahskjdddddddddddddddddsddddddddddddddddd</Text> */}

                {/* <PDFDownloadLink document={<Demo dataFill={data} data={{ bodyData, headerData }} dispatch={dispatch} typeReducer={{ setBody, setHeader }} />} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'PDF file')}
                </PDFDownloadLink> */}
                <BlobProvider document={<Demo dataFill={data} data={{ fixedHeaderFooter, bodyData, headerData }} dispatch={dispatch} typeReducer={{ setBody, setHeader }} genFile={true} />}>
                    {({ url, blob }) => {
                        console.log(blob);
                        return (
                            <a href={url} target="_blank">
                                View as PDF
                            </a>
                        );
                    }}
                </BlobProvider>
                {/* <PDFDownloadLink document={<PDFFile />} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'PDF file')}
                </PDFDownloadLink> */}
            </Page>
        </Document>

    )
}

export default InterFacePage
const styles = StyleSheet.create({
    wrapper: {

        height: '100%',
        width: '100%'
    },
    page: { backgroundColor: 'tomato', display: 'block' },

});