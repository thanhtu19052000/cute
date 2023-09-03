import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer';

import globalStyles from '../../../../config/StyleSheet';

function DisplayText({ label, value, prefix, style, styleText }) {
    return (
        <View style={[globalStyles.horizon, style]}>
            <Text style={[globalStyles.text, styleText ? styleText.label : {}]}>{label} </Text>
            <Text style={[globalStyles.text, styleText ? styleText.value : {}]}>{value}</Text>
            <Text style={[globalStyles.text, , styleText ? styleText.prefix : {}]}>{prefix}</Text>
        </View>
    )
}

export default DisplayText

const styles = StyleSheet.create({
    wrapper: {
        // backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row'
    },


});