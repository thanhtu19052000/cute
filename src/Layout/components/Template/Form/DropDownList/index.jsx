import { Button, Dropdown, Input, Select } from 'antd';
import React, { useState } from 'react';

const DropDowList = ({ items, onChange, name, value }) => {
    const [loadings, setLoadings] = useState([]);

    return (
        <Dropdown
            menu={{ items }}
            placement="bottomRight"
            arrow
            value={value}
            onChange={onChange}
        >
            <button>
                cajskldsdlkj
            </button>
        </Dropdown>
    );
};
export default DropDowList;