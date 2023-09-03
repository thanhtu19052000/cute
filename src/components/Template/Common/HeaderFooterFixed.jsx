import { Document, Image, Page, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'

import DisplayText from '../Form/Input/DisplayText'
import Line from '../Form/Line'
import React from 'react'

function HeaderFooterFixed({ data, disPath, typeReducer, genFile }) {
    return (
        <View fixed style={styles.wrapperFooter}>
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
            <View style={styles.wrapperFooterContent}>
                <View style={styles.wrapperFooterText}>
                    {genFile && data.fixedHeaderFooter.footer.map((item) => {
                        // console.log(item);
                        return <DisplayText
                            label={item.label}
                            value={item.value}
                            prefix={item.prefix}
                            style={styles.footerText}
                            styleText={
                                {
                                    label: styles.label,
                                    value: styles.commonTextFooter,
                                    prefix: styles.commonTextFooter
                                }
                            }
                        />
                    })}
                </View>
                <View style={styles.wrapperFooterText}>
                    <Text style={styles.commonTextFooter} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </View>
            </View>
        </View>
    )
}

export default HeaderFooterFixed


const styles = StyleSheet.create({
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
        marginBottom: 10
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
        bottom: 20,
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
