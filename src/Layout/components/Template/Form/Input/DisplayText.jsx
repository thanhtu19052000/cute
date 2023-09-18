import React, { useEffect, useState } from 'react'

function DisplayText({ label, value, prefix, styles }) {
    return (
        <div style={styles}>
            <span >{label} </span>
            <span >{value}</span>
            <span >{prefix}</span>
        </div>
    )
}

export default DisplayText

