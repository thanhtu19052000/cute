import { Badge, Button, Dropdown, Space, Table } from 'antd';
import { CopyOutlined, DeleteOutlined, FolderViewOutlined } from '@ant-design/icons';

import React from 'react';
import { TABLE_SEARCH_KEY } from '../../../config/constant';
import classNames from 'classnames/bind';
import cn from '../../../utils/func/handleClassName';
import styles from './TableResult.module.scss'

const cx = classNames.bind(styles);
const TableResult = ({ data, onCopy, onDelete, loading, onView, isMine }) => {
    // const iconRender = () => {
    //     const elements = document.querySelectorAll('.ant-table-row-expand-icon');
    //     console.log(elements);
    //     const newItem = document.createElement('p');
    //     newItem.textContent()
    //     elements.forEach(function (list) {
    //         list.classList.add
    //     });
    // }
    // iconRender();
    const expandedRowRender = (value) => {
        // console.log('day la value', value);
        const dataExpanded = value ? [value] : null
        const columns = [
            {
                title: 'Nhân sự xử lý',
                dataIndex: TABLE_SEARCH_KEY.USER_HANDLE,
                key: TABLE_SEARCH_KEY.USER_HANDLE
            },
            {
                title: 'Cif',
                dataIndex: TABLE_SEARCH_KEY.CIF,
                key: TABLE_SEARCH_KEY.CIF,
            },
            {
                title: 'Đơn vị kinh doanh',
                dataIndex: TABLE_SEARCH_KEY.UNIT_BUSINESS,
                key: TABLE_SEARCH_KEY.UNIT_BUSINESS,
            },
            {
                title: 'Thao tác',
                dataIndex: 'copy',
                key: 'copy',
                render: (text, record, index) => (
                    <>
                        <Button style={{ marginRight: 10 }} onClick={() => onCopy(record, index)} type="primary" shape="circle" icon={<CopyOutlined />} />
                        {isMine ?
                            <Button onClick={() => onDelete(record, index)} type="primary" danger shape="circle" icon={<DeleteOutlined />} /> :
                            <Button onClick={() => onView(record, index)} type="primary" shape="circle" icon={<FolderViewOutlined />} />}

                    </>
                ),
            }
        ];
        return <Table columns={columns} dataSource={dataExpanded} pagination={false} />;
    };
    const columns = [
        {
            title: 'STT',
            dataIndex: TABLE_SEARCH_KEY.INDEX,
            key: TABLE_SEARCH_KEY.INDEX,
        },
        {
            title: 'Loại văn kiện',
            dataIndex: TABLE_SEARCH_KEY.TYPE_DOCUMENT,
            key: TABLE_SEARCH_KEY.TYPE_DOCUMENT,
        },
        {
            title: 'Tên văn kiện',
            dataIndex: TABLE_SEARCH_KEY.NAME_DOCUMENT,
            key: TABLE_SEARCH_KEY.NAME_DOCUMENT,
        },
        {
            title: 'Mã BPM',
            dataIndex: TABLE_SEARCH_KEY.BPM_CODE,
            key: TABLE_SEARCH_KEY.BPM_CODE,
        },
        {
            title: 'Trạng thái văn kiện',
            dataIndex: TABLE_SEARCH_KEY.STATUS_DOCUMENT,
            key: TABLE_SEARCH_KEY.STATUS_DOCUMENT,
        },
        {
            title: 'Người tạo',
            dataIndex: TABLE_SEARCH_KEY.USER_INIT,
            key: TABLE_SEARCH_KEY.USER_INIT,
        },
        {
            title: 'Ngày tạo',
            dataIndex: TABLE_SEARCH_KEY.DATE_CREATE,
            key: TABLE_SEARCH_KEY.DATE_CREATE,
        },
    ];
    console.log('data póps', data);
    return (
        <div
            className={cx('wrap')}
        >
            {isMine && <div className={cn([cx('title-table'), 'border-radius'])}>Văn kiện của tôi</div>}
            <Table
                loading={loading}
                columns={columns}
                expandable={{
                    expandedRowRender,
                    // defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
            />
        </div>
    );
};
export default TableResult;