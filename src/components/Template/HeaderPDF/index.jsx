import React from 'react'
import { TYPE_ASSIGN } from '../../../config/constant'

function HeaderPDF({ data, disPath, typeDishPath }) {
    const onChange = () => {

    }
    return (
        <div>
            {data && data.map((item) => {
                console.log(item);
            })}
        </div>
    )
}

export default HeaderPDF