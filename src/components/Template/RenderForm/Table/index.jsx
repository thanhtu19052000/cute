import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { useRef, useState } from 'react'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
function TableForm(props) {
    const [state1, setState1] = useState(true);
    console.log(props.ref);
    const handleChange = () => {
        setState1((statte) => !statte)
    }
    return (

        <Document>
            <Page>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return <View>
                        <button onClick={handleChange}>ád</button>
                        <View>
                            <Text>{item}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Section #2</Text>
                        </View>
                    </View>
                })}
            </Page>
        </Document>

    )
}

export default TableForm