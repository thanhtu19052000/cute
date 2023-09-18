import DisplayText from '../../Form/Input/DisplayText';
import React from 'react'
import { headerImage } from '../../../../../asset/logo'
import { selectDataFixedHeaderFooterData } from '../../../../../redux/slice/fixedHeaderFooterSlice';
import { useSelector } from 'react-redux';

function Header({ header }) {
    return (
        <div id='Header' style={{ width: 595, height: 80, backgroundColor: 'red', display: 'block' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginLeft: '5%', marginRight: '5%', marginBottom: 5, alignItems: 'end' }}>
                <image src={headerImage} style={{ maxHeight: 60, maxWidth: 150 }} />
                <div style={{ fontSize: 10 }}>
                    {header &&
                        <DisplayText
                            value={header.value}
                            label={header.label}
                            prefix={header.prefix}
                        />}
                </div>
            </div>
            <div style={{ display: 'block', margin: 'auto', height: 1, width: '90%', borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#e49f15' }}></div>
        </div>
    )
}

export default Header