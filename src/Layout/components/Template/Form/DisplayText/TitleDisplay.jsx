import React from 'react'
import { StyleSheet } from '@react-pdf/renderer'

function TitleDisplay({ label, isSubTitle }) {
    // console.log('render roi nek');

    return (
        <div style={styles.wrapper}>
            {isSubTitle ? <h5 style={{ ...styles.value }}>{label}</h5> : <h4 style={{ ...styles.value }}>{label}</h4>}
        </div>
    )
}

export default TitleDisplay


const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {

    },
    value: {
        textTransform: 'uppercase',
        margin: 0
    }
})