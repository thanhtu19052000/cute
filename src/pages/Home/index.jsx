import { Document, PDFDownloadLink, Page, Text, View } from '@react-pdf/renderer'
import { useDispatch, useSelector } from 'react-redux';

import Demo from '../Demo'
import InterFacePage from '../InterFace';
import React from 'react'

function Home() {
    const demo = useSelector((state) => state.demo);
    // console.log(header, body);
    const dispatch = useDispatch();
    return (
        <div>
            {/* <Demo demo={demo} /> */}
            <span>tuydt</span>
            <button>
                <PDFDownloadLink document={<InterFacePage demo={demo} />} fileName="fee_acceptance.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </button>
        </div>
    )
}
const MyDoc = () => (
    <Document>
        <Page size="A4" >
            <View >
                <Text>Section #1</Text>
            </View>
            <View >
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);
export default Home