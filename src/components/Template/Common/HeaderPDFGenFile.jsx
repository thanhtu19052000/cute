import { Document, Image, Page, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'

import DisplayText from '../Form/Input/DisplayText';
import InputBorderLess from '../Form/Input/InputBorderLess';
import Line from '../Form/Line/index';
import React from 'react'
import { TYPE_RENDER_HEADER } from '../../../config/constant';
import Table from '../Form/Table';
import globalStyles from '../../../config/StyleSheet/index';
import logo from '../../../asset/Logo OCB(PNG)/Logo OCB Sl.png'

function HeaderPDFGenFile({ data, disPath, typeReducer, genFile }) {
    // console.log(data);
    return (
        <>
            {genFile && <View fixed style={styles.header}>
                <View style={styles.horizon}>
                    <Image
                        style={styles.logo}
                        src={logo}
                    />
                    {genFile && <DisplayText
                        style={styles.fixedCustomerName}
                        prefix={data.fixedHeaderFooter.header.prefix}
                        value={data.fixedHeaderFooter.header.value}
                        label={data.fixedHeaderFooter.header.label}
                    />}
                </View>
                <Line></Line>
            </View>}

            <View style={styles.wrapperTitle} >

                {data.headerData && data.headerData.map((item) => {
                    return <>

                        {item.type == TYPE_RENDER_HEADER.DATE_NUM && <View style={styles.dateNum}>

                            <InputBorderLess
                                value={item.num.value.num}
                                label={item.num.label}
                                prefix={item.num.prefix}
                                onChange={(e) => {
                                    disPath(typeReducer({ name: item.num.name, value: e }))
                                }}
                            />


                            <Text style={globalStyles.text}>{item.date.label}</Text>

                        </View>}



                        {item.type == TYPE_RENDER_HEADER.TITLE && <Text style={globalStyles.title}>{item.label}</Text>
                        }

                        {item.type == TYPE_RENDER_HEADER.SUB_TITLE && <Text style={globalStyles.subTitle}>{item.label}</Text>}


                    </>
                })}
            </View>




        </>

    )
}

export default HeaderPDFGenFile

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        marginLeft: 16
    },
    wrapper: {

    },
    fixedCustomerName: {
        marginTop: 26,
        marginRight: 16
    },
    dateNum: {
        display: 'flex',
        justifyContent: 'space-between',
        // backgroundColor: 'grey',
        flexDirection: 'row',
        width: '100%',
        padding: '0 18',
        marginBottom: 15
    },
    horizon: {
        display: 'flex',
        justifyContent: 'space-between',
        // backgroundColor: 'grey',
        flexDirection: 'row',
        width: '100%',
        // marginBottom: 15
    },
    logo: {
        height: 36,
        width: 220,
        marginBottom: 8
    },
    wrapperFooter: {
        position: 'absolute',
        bottom: 25,
        left: 16,
        right: 17,
        textAlign: 'center',
        color: 'grey',
    },
    label: {
        fontSize: 8,
        fontWeight: '700'
    },
    commonTextFooter: {
        fontSize: 8,
    },
    footerText: {
        color: 'gray',
        margin: '0 5 0 5'
    },
    wrapperFooterText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5

    },
    wrapperTitle: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    wrapperFooterContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});
