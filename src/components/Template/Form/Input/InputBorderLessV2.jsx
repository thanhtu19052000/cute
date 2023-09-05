import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer';

import globalStyles from '../../../../config/StyleSheet';

function InputBorderLess({ label, value, prefix, onChange }) {
    const width = (value.length * 7.4 / 10) > 10 ? (value.length * 7.4 / 10) : 10
    const [focus, setFocus] = useState(false);
    const [data, setData] = useState(value ? value : '');
    const onChangeData = (e) => {
        setData(e.target.value)
    }
    useEffect(() => {
        if (!focus) {
            onChange(data)
        }

    }, [focus])
    return (
        <View style={styles.wrapper} onMouseOver={() => { setFocus(true) }} >
            <Text style={globalStyles.text}>{label} </Text>
            {focus ? <input onBlur={() => setFocus(false)} style={{ border: 'none', backgroundColor: 'green', width: ((data.length * 7.4 / 10) > 10 ? (data.length * 7.4 / 10) : 10) + 'rem' }} value={data} onChange={onChangeData} /> :
                <Text style={globalStyles.text}>{value}</Text>}
            <Text style={globalStyles.text}>{prefix}</Text>
        </View>
    )
}

export default InputBorderLess

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        fontSize: 10,
        textAlign: 'justify',
        fontFamily: 'Roboto'
    },

});