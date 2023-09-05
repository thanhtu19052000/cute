import React, { useEffect, useState } from 'react'

function DisplayTextV2({ label, value, prefix, styles }) {
    return (
        <div style={styles}>
            <span >{label} </span>
            <span >{value}</span>
            <span >{prefix}</span>
        </div>
    )
}

export default DisplayTextV2

