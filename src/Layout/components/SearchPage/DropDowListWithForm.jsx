import { Form, Select } from 'antd'
import React, { useEffect, useState } from 'react'

import classNames from 'classnames/bind';
import cn from '../../../utils/func/handleClassName';
import { get } from '../../../apis';
import styles from './SearchModule.module.scss'

const cx = classNames.bind(styles)

const { Option } = Select;
function DropDowListWithForm({ onChangeDropDown, field }) {
    const [data, setData] = useState([

    ]);
    useEffect(() => {
        try {
            const getApi = async () => {
                if (field.url) {
                    const dataMaster = await get(field.url);
                    setData(dataMaster.data)
                }
            }
            getApi();
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <>
            <p className={cx('label-input')}>{field.label}</p>
            <Form.Item name={field.name}
                className={cn(['wrap-select-options', 'none-margin', cx('form-item')])}
            >
                {/* <Input placeholder="Số CMND/CCD của KH" /> */}
                {/* <InputTemplateSearch /> */}

                <Select Select
                    placeholder={field.placeholder}
                    onChange={(value) => { onChangeDropDown(value, field.name) }}
                    allowClear
                    className={'custom-select'}
                >

                    {data.length > 0 && data.map((item) => {
                        return <Option value={item.id}>{item.name}</Option>
                    })}
                </Select>

            </Form.Item>
        </>
    )
}

export default DropDowListWithForm