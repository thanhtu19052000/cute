import DisplayTextV2 from '../Form/Input/DisplayTextV2'
import React from 'react'
import { TYPE_IN_LINE } from '../../../config/constant'

function Footer({ footer }) {
    return (
        <div>

            <div id='Footer' style={{ width: 595, maxHeight: 80, backgroundColor: 'red', display: 'block' }}>
                <div style={{ display: 'block', margin: 'auto', marginTop: 2, height: 1, width: '100%', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#e49f15' }}></div>
                <div style={{ display: 'block', margin: 'auto', marginTop: 2, height: 1, width: '100%', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#e49f15' }}></div>
                <div style={{ display: 'block', margin: 'auto', marginTop: 2, height: 1, width: '100%', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#e49f15' }}></div>
                <div style={{ display: 'block', margin: 'auto', marginTop: 2, height: 1, width: '100%', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#e49f15' }}></div>
                <div style={{ display: 'block', margin: 'auto', marginTop: 2, height: 1, width: '100%', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#e49f15' }}></div>
                <div style={{ display: 'block', margin: 'auto', width: '90%', position: 'relative' }}>
                    <div style={{ fontSize: 9 }}>
                        {footer && footer.map((item) => {
                            return item.typeLine == TYPE_IN_LINE.SINGLE ?
                                <DisplayTextV2 styles={{ marginTop: 5, marginBottom: 5 }} value={item.value} label={item.label} prefix={item.prefix} /> :
                                item.typeLine == TYPE_IN_LINE.MULTI ?
                                    <div style={{ display: 'flex', fontStyle: 'italic', fontSize: 9 }}>
                                        {item.value.map((childItem) => {
                                            return <DisplayTextV2
                                                styles={{ fontSize: 9, marginRight: 6 }}
                                                value={childItem.value}
                                                label={childItem.label}
                                                prefix={childItem.prefix}
                                            />
                                        })}
                                    </div> : <></>
                        })}
                    </div>
                    <div style={{ fontSize: 10, position: 'absolute', right: 0, bottom: 0 }} >
                        <span>Trang </span><span style={{ fontWeight: 'bold', fontStyle: 'italic' }} class="pageNumber" ></span> /<span style={{ fontWeight: 'bold', fontStyle: 'italic' }} class="totalPages"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer