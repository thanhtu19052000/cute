import Header from '../Header'
import React from 'react'

function DefaultLayouts({ children }) {
    return (
        <div className={"wrapper"}>
            <>
                <Header />
                <div className={"container"}>
                    <div className={"content"}>{children}</div>
                </div>
            </>
        </div>
    )
}

export default DefaultLayouts