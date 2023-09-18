import React from 'react'
import { StyleSheet } from '@react-pdf/renderer'
import handleStyleSheet from '../../../../../utils/func/handleStyleSheet'

function TextDisplay({ label, value, prefix, style }) {
    // console.log('render roi nek');
    return (
        <div style={styles.wrapper}>
            <span style={style ? style.label ? handleStyleSheet(style.label) : {} : {}}>{label}</span>
            <span style={style ? style.value ? handleStyleSheet(style.value) : {} : {}}>{value}</span>
            <span style={style ? style.prefix ? handleStyleSheet(style.prefix) : {} : {}}>{prefix}</span>
        </div>
    )
}

export default TextDisplay


const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }

})