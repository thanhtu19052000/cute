import { Empty } from 'antd'
import React from 'react'

function EmptyComp({ height }) {
    return (
        <div
            className='horizon'
            style={{
                width: '100%',
                height: height,
                // backgroundColor: 'red'
            }}

        >
            <Empty />
        </div>
    )
}

export default EmptyComp