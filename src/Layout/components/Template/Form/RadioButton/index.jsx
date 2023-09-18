import React, { useEffect, useState } from 'react';

import InputRealTime from '../Input/InputRealTime';
import { Radio } from 'antd';
import { StyleSheet } from '@react-pdf/renderer';
import globalStyle from '../../../../../config/StyleSheet';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const RadioButton = ({ options, value, onChange }) => {
    const [selectedOption, setSelectedOption] = useState({ ...value } || {});
    // console.log(selectedOption);
    const { genFile } = useSelector((state) => state.action);
    const handleOptionChange = (event) => {
        // console.log(event.target);
        // console.log(event);
        event.target.note == true ?
            setSelectedOption({ note: ' ', value: event.target.value }) :
            setSelectedOption({ value: event.target.value })
    };

    useEffect(() => {
        if (genFile) {

            if (selectedOption.value != value.value) {
                onChange(selectedOption)
            }
        }

    }, [genFile]);
    // console.log(selectedOption);
    return (
        <div style={styles.wrapper}>
            <Radio.Group
                style={globalStyle.horizon}
                optionType='default'
                onChange={handleOptionChange}
                value={selectedOption.value}
                key={uuid()}
            >
                {options.map((item, index) => {
                    return <Radio.Button note={item.note} value={item.value} key={uuid()}>{item.label}</Radio.Button>
                })}
            </Radio.Group>
            <div style={globalStyle.horizon}>

                {selectedOption.note && <InputRealTime
                    label={' : '}
                    onChange={(value) => {
                        setSelectedOption((selectedOption) => { return { ...selectedOption, note: value } })
                    }}
                    value={selectedOption.note}
                />}
            </div>
        </div>
    );
};

export default RadioButton;

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    }
})