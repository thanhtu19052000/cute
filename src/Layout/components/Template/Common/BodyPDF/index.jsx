import Form from '../../Form'
import React from 'react'
import uuid from 'react-uuid'

function BodyPDF({ data }) {
    return (
        <>
            {data.map((itemBody) => {
                return <Form
                    key={uuid()}
                    data={itemBody}
                />

            })}
        </>
    )
}

export default BodyPDF