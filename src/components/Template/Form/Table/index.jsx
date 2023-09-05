import { Document, Image, Page, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'

import React from 'react'

function Table({ genFile, data }) {

    return (
        <View style={styles.body}>
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
                        <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>5€</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Table

const styles = StyleSheet.create({
    table: {
        width: "auto",
        borderWidth: 1,
        borderBottomWidth: 0,
        borderStyle: "solid"
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