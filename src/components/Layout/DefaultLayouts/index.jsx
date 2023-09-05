import { BlobProvider, Document, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import Header from '../Header'
import React from 'react'
import classnames from 'classnames/bind'
import styles1 from './DefaultLayout.scss'

const cx = classnames.bind(styles1)

function DefaultLayouts({ children }) {
    return (
        <div>
            <Header />
            <div className='wrapper-default-A4'>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayouts

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        backgroundColor: 'tomato'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});
