import { Document, Image, Page, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'

import React from 'react'
import Table from '../Form/Table'
import Table2 from '../Form/Table/Table2'

function BodyPDFGenFile({ data, typeReducer, disPath, genFile }) {
    return (

        <>
            <View>
                {[1].map(() => <Table
                    genFile={genFile}
                    data={data}
                />)}
                <Table2 />
            </View>
        </>

    )
}

export default BodyPDFGenFile