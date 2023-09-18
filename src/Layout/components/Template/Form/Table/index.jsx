import ChildTable from './ChildTable';
import Form from '..';
import React from 'react'
import { StyleSheet } from '@react-pdf/renderer';
import { handleStyleTableSheet } from '../../../../../utils/func/handleStyleSheet';
import uuid from 'react-uuid';

function Table({ data }) {
    // console.log('image render');
    return (
        <>
            <div style={styles.table}>

                {data.map((row) => {
                    return <div key={uuid()}
                        style={{
                            ...styles.tableRow,
                            ...handleStyleTableSheet(row.style)
                        }}
                    // style={styles.border}
                    >
                        {row.value.map(itemRow => {
                            return <div key={uuid()}
                                style={{
                                    ...styles.tableCol, ...handleStyleTableSheet(itemRow.styleCol),
                                }}
                            >
                                <Form
                                    key={uuid()}
                                    data={itemRow}
                                />
                            </div>
                        })}
                    </div>
                })}

            </div>
        </>

    )
}

export default Table


const styles = StyleSheet.create({
    table: {
        width: "auto",
        borderWidth: 1,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderStyle: "solid",
        width: '100%'
    },
    tableRow: {
        display: 'flex',
        flexDirection: "row",
    },
    tableCol: {
        minHeight: '100%',
        // width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10
    },
    border: {
        border: '1px solid black',
        borderCollapse: 'collapse'
    }
});



// const styles = StyleSheet.create({
//     table: {
//         width: "auto",
//         borderWidth: 1,
//         borderBottomWidth: 0,
//         borderRightWidth: 0,
//         borderStyle: "solid"
//     },
//     tableRow: {
//         margin: "auto",
//         display: 'flex',
//         flexDirection: "row"
//     },
//     tableCol: {
//         width: "25%",
//         borderStyle: "solid",
//         borderWidth: 1,
//         borderLeftWidth: 0,
//         borderTopWidth: 0
//     },
//     tableCell: {
//         margin: "auto",
//         marginTop: 5,
//         fontSize: 10
//     },
//     border: {
//         border: '1px solid black',
//         borderCollapse: 'collapse'
//     }
// });
