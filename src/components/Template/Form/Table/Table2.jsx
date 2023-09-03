import { Document, Image, Page, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'
import React, { useState } from 'react'

import InputBorderLess from '../Input/InputBorderLess';

function Table2({ genFile, data }) {
    const [value, setValue] = useState('')
    return (
        <View onBlur={() => { console.log('cut') }} onFocus={() => { console.log('focus'); }} style={styles.body}>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Product</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Type</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Period</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Price</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>React-PDF</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>3 User </Text>
                    </View>
                    <View style={styles.tableCol}>
                        <InputBorderLess
                            label={'tu do thanh'}
                            onChange={(e) => { setValue(e) }}
                            value={value}
                        />
                    </View>
                    <View style={styles.tableCol}>
                        {/* <Text style={styles.tableCell}>5€</Text> */}
                        <InputBorderLess
                            label={'tu do thanh'}
                            onChange={() => { }}
                            value={'tu do thanh'}
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Table2

const styles = StyleSheet.create({
    table: {
        // display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        // borderRightWidth: 0,
        borderBottomWidth: 0,
        // // display: 'flex',
    },
    tableRow: {
        margin: "auto",
        display: 'flex',
        flexDirection: "row"
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10
    },

});