import React, { useState } from 'react'

import { StyleSheet } from '@react-pdf/renderer';
import globalStyles from '../../../../../config/StyleSheet';

function InputRealTime({ label, value, prefix, onChange }) {
    const [valueA, setValueA] = useState('')
    const [focus, setFocus] = useState(false);
    const width = (value.length * 7.4 / 10) > 10 ? (value.length * 7.4 / 10) : 10
    const onChangeData = (e) => {
        onChange(e.target.value)
    }
    return (

        <div style={styles.wrapper} onMouseOver={() => { setFocus(true) }}>
            <span style={globalStyles.text}>{label} </span>
            {focus ? <input onBlur={() => setFocus(false)} style={{ border: 'none', width: width + 'rem', outline: 'none' }} value={value} onChange={onChangeData} /> :
                <span style={styles.text}>{value}</span>}
            <span style={globalStyles.text}>{prefix}</span>
        </div>

    )
}

export default InputRealTime

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        display: 'flex',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        // fontSize: 10,
        // textAlign: 'justify',
        // fontFamily: 'Roboto'
        marginLeft: 2
    },
});