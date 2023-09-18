import React from 'react'
import { StyleSheet } from '@react-pdf/renderer';

function ChildTable({ genFile, data }) {

    return (

        <div style={styles.table}>
            <div style={styles.tableRow}>
                <div style={styles.tableCol}>
                    <span style={styles.tableCell}>Product</span>
                </div>
                <div style={styles.tableCol}>
                    <span style={styles.tableCell}>Type</span>
                </div>
                <div style={styles.tableCol}>
                    <span style={styles.tableCell}>Period</span>
                </div>
                <div style={styles.tableCol}>
                    <span style={styles.tableCell}>Price</span>
                </div>
            </div>
            <div style={styles.tableRow} >
                <div style={styles.tableCol}>
                    <span style={styles.tableCell}>React-PDF</span>
                </div>
                <div style={styles.tableCol}>
                    <span style={styles.tableCell}>3 User </span>
                </div>
                <div style={styles.tableCol}>
                    <span style={styles.tableCell}>2019-02-20 - 2020-02-19</span>
                </div>
                <div style={styles.tableCol}>
                    <span style={styles.tableCell}>5€</span>
                </div>
            </div>
        </div>

    )
}

export default ChildTable


const styles = StyleSheet.create({
    table: {
        width: "auto",
        // borderWidth: 1,
        // borderBottomWidth: 0,
        // borderRightWidth: 0,
        // borderStyle: "solid"
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


