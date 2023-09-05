import { Document, Image, Page, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'

import React from 'react'
import Table from '../Form/Table'

function BodyPDFGenFile({ data, typeReducer, disPath, genFile }) {
    return (

        <>
            <View>
                {[1].map(() => <Table
                    genFile={genFile}
                    data={data}
                />)}
            </View>
        </>

    )
}

export default BodyPDFGenFile