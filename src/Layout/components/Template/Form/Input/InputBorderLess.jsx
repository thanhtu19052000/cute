import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer';

import globalStyles from '../../../../../config/StyleSheet/index'
import { useSelector } from 'react-redux';

function InputBorderLess({ label, value, prefix, onChange }) {
    const { genFile } = useSelector((state) => state.action);

    const [focus, setFocus] = useState(false);
    const [data, setData] = useState(value ? value : '');
    const width = (data.length * 7.4 / 10) > 10 ? (data.length * 7.4 / 10) : 10
    const onChangeData = (e) => {
        setData(e.target.value)
    }
    useEffect(() => {

        if (genFile) {

            if (data != value) {
                console.log('genFile', genFile);
                console.log('co vao day k ');
                onChange(data)
            }
        }

    }, [genFile])
    return (

        <div style={styles.wrapper} onMouseOver={() => { setFocus(true) }}>
            <span style={globalStyles.text}>{label} </span>
            {focus ? <input onBlur={() => setFocus(false)} style={{ border: 'none', width: width + 'rem', outline: 'none' }} value={data} onChange={onChangeData} /> :
                <span style={globalStyles.text}>{data}</span>}
            <span style={globalStyles.text}>{prefix}</span>
        </div>

    )
}

export default InputBorderLess

const styles = {
    wrapper: {
        backgroundColor: 'white',
        display: 'flex',
        // backgroundColor: 'red',
        // outline:''
        flexDirection: 'row'
    },
    text: {
        fontSize: 10,
        textAlign: 'justify',
        fontFamily: 'Roboto'
    },
};