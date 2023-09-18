import DropDowList from './DropDownList'
import InputBorderLess from './Input/InputBorderLess'
import RadioButton from './RadioButton'
import React from 'react'
import RichTextFill from './RichText/RichTextFill'
import { TYPE_ASSIGN } from '../../../../config/constant'
import Table from './Table'
import TextDisplay from './DisplayText/TextDisplay'
import TitleDisplay from './DisplayText/TitleDisplay'
import uuid from 'react-uuid'

function Form({ data, disPath, typeReducer }) {
    if (data.type === TYPE_ASSIGN.TITLE) {
        return <TitleDisplay
            key={uuid()}
            label={data.label}
            value={data.value}
        />
    }
    if (data.type === TYPE_ASSIGN.RADIO_BOX) {
        return <RadioButton
            key={uuid()}
            value={data.value}
            onChange={data.onChange}
            options={data.options}
        />
    }
    if (data.type === TYPE_ASSIGN.SUB_TITLE) {
        return <TitleDisplay
            key={uuid()}
            label={data.label}
            value={data.value}
            isSubTitle={true}
        />
    }
    if (data.type === TYPE_ASSIGN.TEXT_DISPLAY) {
        return <TextDisplay
            key={uuid()}
            label={data.label}
            value={data.value}
            prefix={data.prefix}
            style={data.style}
        // onChange={data.onChange}
        />
    }
    if (data.type === TYPE_ASSIGN.TEXT_KEY_VALUE) {
        return <InputBorderLess
            label={data.label}
            value={data.value}
            prefix={data.prefix}
            onChange={data.onChange}
        />
    }
    if (data.type === TYPE_ASSIGN.CHECK_BOX) {
        return <></>
    }
    if (data.type === TYPE_ASSIGN.RICH_TEXT) {
        return <RichTextFill
            key={uuid()}
        />
    }
    if (data.type === TYPE_ASSIGN.TABLE) {
        return <Table data={data.value} />
    }
}

export default Form