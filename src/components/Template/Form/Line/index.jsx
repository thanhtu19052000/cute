import { Line as Line1, Svg } from '@react-pdf/renderer'

import React from 'react'

function Line() {
    return (
        <Svg height="3" width="100%">
            <Line1
                x1="5"
                y1="1"
                x2="560"
                y2="1"
                strokeWidth={0.5}
                stroke='#e49f15'
            />
        </Svg>
    )
}

export default Line