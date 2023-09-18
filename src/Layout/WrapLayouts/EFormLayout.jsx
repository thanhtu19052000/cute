import { BlobProvider, Document, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import Header from '../Header'
import React from 'react'
import { TYPE_HEADER } from '../../config/constant';
import classnames from 'classnames/bind'

function EFormLayout({ children }) {
    return (
        <div>
            <Header typeHeader={TYPE_HEADER.EFORM} />
            <div className='wrapper-eform'>
                {children}
            </div>
        </div>
    )
}

export default EFormLayout

