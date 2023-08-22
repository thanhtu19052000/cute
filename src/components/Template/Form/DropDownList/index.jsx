import { Button, Dropdown, Input, Select } from 'antd';
import React, { useState } from 'react';

const DropDowList = (item, onChange, name, value, icon) => {
    const [loadings, setLoadings] = useState([]);

    return (
        <Dropdown
            menu={{ item }}
            placement="bottomRight"
            arrow
            value={value}
            onChange={onChange}
        >
            <Button
                type="primary"
                icon={icon}
                loading={false}
                onClick={() => { }}
            >{name}</Button>
        </Dropdown>
    );
};
export default DropDowList;