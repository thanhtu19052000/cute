import { Document, Image, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import React, { useEffect } from 'react'
import { TYPE_ASSIGN, TYPE_IN_LINE, TYPE_RENDER_HEADER } from '../../config/constant'
import { useDispatch, useSelector } from 'react-redux'

import BodyPDFGenFile from '../../components/Template/Common/BodyPDFGenFile'
import Form from '../../components/Template/Form'
import HeaderFooterFixed from '../../components/Template/Common/HeaderFooterFixed'
import HeaderPDF from '../../components/Template/HeaderPDF'
import HeaderPDFGenFile from '../../components/Template/Common/HeaderPDFGenFile'
import RichTextFill from '../../components/Template/Form/RichText/RichTextFill'
import globalStyles from '../../config/StyleSheet'
import moment from 'moment/moment'

function Demo({ data, dispatch, typeReducer, genFile }) {
    // const { header, body, footer } = useSelector((state) => state.demo);
    // // console.log(header, body);
    // const dispatch = useDispatch();
    // const { name } = useSelector((state) => state.auth);
    // console.log(demo);

    useEffect(() => {

    }, []);
    // console.log('dataa in herer', data);
    return (
        <View style={globalStyles.wrapperPDF}>
            <Page style={{ paddingBottom: 80 }}>
                <HeaderPDFGenFile
                    data={{ headerData: data.headerData, fixedHeaderFooter: data.fixedHeaderFooter }}
                    disPath={dispatch}
                    typeReducer={typeReducer.setHeader}
                    genFile={genFile}
                />
                <BodyPDFGenFile
                    data={data.bodyData}
                    disPath={dispatch}
                    typeReducer={typeReducer.setBody}
                    genFile={genFile}
                />
                <HeaderFooterFixed />
            </Page>
            {/* <Text>ádbmn</Text> */}

        </View>
    )
}

export default Demo

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'red',

    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    image: {
        height: 500,
        width: 500,
        marginVertical: 15,
        marginHorizontal: 100,
    },

});