import { TYPE_ASSIGN, TYPE_RENDER_HEADER } from '../../../../config/constant'

import DisplayText from '../Form/Input/DisplayText';
import InputBorderLess from '../Form/Input/InputBorderLess'
import React from 'react'
import { StyleSheet } from '@react-pdf/renderer';
import globalStyle from '../../../../config/StyleSheet';
import uuid from 'react-uuid';

function HeaderPDF({ data, disPath, typeReducer }) {
    const onChange = () => {

    }
    return (
        <div style={styles.wrapper}>
            {data && data.map((item) => {
                if (item.type == TYPE_RENDER_HEADER.DATE_NUM) {
                    return <div key={uuid()} style={globalStyle.horizon}>
                        <>
                            {item.num.value ? <InputBorderLess
                                value={item.num.value}
                                label={item.num.label}
                                prefix={item.num.prefix}
                            /> : <DisplayText
                                label={item.num.label}
                            />}
                        </>
                        <div>
                            <span>{item.date.label}</span>
                        </div>
                    </div>
                }
                if (item.type == TYPE_RENDER_HEADER.MAIN_TITLE) {
                    return <div key={uuid()} style={{ ...globalStyle.textCenterWrap, ...styles.wrapperTitle }}>
                        {item.value && item.value.map((childItem) => {
                            if (childItem.type == TYPE_RENDER_HEADER.TITLE) {
                                return <h3 key={uuid()} style={styles.noneMargin}>{childItem.label}</h3>
                            }
                            if (childItem.type == TYPE_RENDER_HEADER.SUB_TITLE) {
                                return <h4 key={uuid()} style={styles.noneMargin}>{childItem.label}</h4>
                            }
                            if (childItem.type == TYPE_RENDER_HEADER.SUB_TITLE_CHILD) {
                                return <span key={uuid()} style={styles.noneMargin}>{childItem.label}</span>
                            }
                        })}
                    </div>
                }
            })}
        </div>
    )
}

export default HeaderPDF

const styles = StyleSheet.create({
    wrapperTitle: {
        marginTop: 10,
    },
    wrapper: {
        marginBottom: 20,
    },
    noneMargin: {
        margin: 0
    }
})