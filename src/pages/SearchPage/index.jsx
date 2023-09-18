import { Button, Col, Form, Row, Select } from 'antd'
import React, { useRef, useState } from 'react'

import ModalCreateEform from '../../Layout/components/Template/Form/Modal/ModalCreateEform';
import SearchModule from '../../Layout/components/SearchPage/SearchModule';
import { TABLE_SEARCH_KEY } from '../../config/constant';
import TableResult from '../../Layout/components/SearchPage/TableResult';
import { URL_BASE } from '../../config/constant/route';
import { get } from '../../apis';

const { Option } = Select;
const dataTest = [
    {
        key: '1',
        [TABLE_SEARCH_KEY.USER_HANDLE]: 'tudt',
        [TABLE_SEARCH_KEY.CIF]: '123213',
        [TABLE_SEARCH_KEY.BPM_CODE]: 'BPM123',
        [TABLE_SEARCH_KEY.DATE_CREATE]: '12/12/2022',
        [TABLE_SEARCH_KEY.ID_CARD]: 'HQ111111',
        [TABLE_SEARCH_KEY.INDEX]: '1',
        [TABLE_SEARCH_KEY.BUSINESS_CODE]: 'BS2',
        [TABLE_SEARCH_KEY.GROUP_DOCUMENT]: 'Tín dụng',
        [TABLE_SEARCH_KEY.NAME_DOCUMENT]: 'Tờ trình 1',
        [TABLE_SEARCH_KEY.STATUS_DOCUMENT]: 'Đang xử lý',
        [TABLE_SEARCH_KEY.TYPE_DOCUMENT]: 'Tờ trình',
        [TABLE_SEARCH_KEY.USER_INIT]: 'tudt',
        [TABLE_SEARCH_KEY.UNIT_BUSINESS]: 'SME hallmark',
    },
    {
        key: '2',
        [TABLE_SEARCH_KEY.USER_HANDLE]: 'tudt2',
        [TABLE_SEARCH_KEY.CIF]: '1',
        [TABLE_SEARCH_KEY.BPM_CODE]: 'BPM1',
        [TABLE_SEARCH_KEY.DATE_CREATE]: '12/12/2022',
        [TABLE_SEARCH_KEY.ID_CARD]: 'HQ111111',
        [TABLE_SEARCH_KEY.INDEX]: '1',
        [TABLE_SEARCH_KEY.BUSINESS_CODE]: 'BS2',
        [TABLE_SEARCH_KEY.GROUP_DOCUMENT]: 'Tín dụng',
        [TABLE_SEARCH_KEY.NAME_DOCUMENT]: 'Tờ trình 1',
        [TABLE_SEARCH_KEY.STATUS_DOCUMENT]: 'Đang xử lý',
        [TABLE_SEARCH_KEY.TYPE_DOCUMENT]: 'Tờ trình',
        [TABLE_SEARCH_KEY.USER_INIT]: 'tudt',
        [TABLE_SEARCH_KEY.UNIT_BUSINESS]: 'SME hallmark',
    },
    {
        key: '3',
        [TABLE_SEARCH_KEY.USER_HANDLE]: 'tudt2',
        [TABLE_SEARCH_KEY.CIF]: '1',
        [TABLE_SEARCH_KEY.BPM_CODE]: 'BPM1',
        [TABLE_SEARCH_KEY.DATE_CREATE]: '12/12/2022',
        [TABLE_SEARCH_KEY.ID_CARD]: 'HQ111111',
        [TABLE_SEARCH_KEY.INDEX]: '1',
        [TABLE_SEARCH_KEY.BUSINESS_CODE]: 'BS2',
        [TABLE_SEARCH_KEY.GROUP_DOCUMENT]: 'Tín dụng',
        [TABLE_SEARCH_KEY.NAME_DOCUMENT]: 'Tờ trình 1',
        [TABLE_SEARCH_KEY.STATUS_DOCUMENT]: 'Đang xử lý',
        [TABLE_SEARCH_KEY.TYPE_DOCUMENT]: 'Tờ trình',
        [TABLE_SEARCH_KEY.USER_INIT]: 'tudt',
        [TABLE_SEARCH_KEY.UNIT_BUSINESS]: 'SME hallmark',
    },
    {
        key: '4',
        [TABLE_SEARCH_KEY.USER_HANDLE]: 'tudt3',
        [TABLE_SEARCH_KEY.CIF]: '2',
        [TABLE_SEARCH_KEY.BPM_CODE]: 'BPM1',
        [TABLE_SEARCH_KEY.DATE_CREATE]: '12/12/2022',
        [TABLE_SEARCH_KEY.ID_CARD]: 'HQ111111',
        [TABLE_SEARCH_KEY.INDEX]: '1',
        [TABLE_SEARCH_KEY.BUSINESS_CODE]: 'BS2',
        [TABLE_SEARCH_KEY.GROUP_DOCUMENT]: 'Tín dụng',
        [TABLE_SEARCH_KEY.NAME_DOCUMENT]: 'Tờ trình 1',
        [TABLE_SEARCH_KEY.STATUS_DOCUMENT]: 'Đang xử lý',
        [TABLE_SEARCH_KEY.TYPE_DOCUMENT]: 'Tờ trình',
        [TABLE_SEARCH_KEY.USER_INIT]: 'tudt',
        [TABLE_SEARCH_KEY.UNIT_BUSINESS]: 'SME hallmark',
    }
]
function SearchPage() {
    const [loading, setLoading] = useState(false);
    const [resultSearch, setResultSearch] = useState({
        count: dataTest.length,
        result: dataTest
    })
    const [openModal, setOpenModal] = useState(false)
    const [paramSearch, setParamSearch] = useState({
        [TABLE_SEARCH_KEY.BPM_CODE]: null,
        [TABLE_SEARCH_KEY.CIF]: null,
        [TABLE_SEARCH_KEY.ID_CARD]: null,
        [TABLE_SEARCH_KEY.UNIT_BUSINESS]: null,
        [TABLE_SEARCH_KEY.BUSINESS_CODE]: null,
        [TABLE_SEARCH_KEY.GROUP_DOCUMENT]: null,
        [TABLE_SEARCH_KEY.TYPE_DOCUMENT]: null,
        [TABLE_SEARCH_KEY.NAME_DOCUMENT]: null,
        [TABLE_SEARCH_KEY.STATUS_DOCUMENT]: null,
        [TABLE_SEARCH_KEY.USER_INIT]: null,
        [TABLE_SEARCH_KEY.USER_HANDLE]: null,
        [TABLE_SEARCH_KEY.RANGE_DATE]: null,
        [TABLE_SEARCH_KEY.IS_MINE]: true,
    });
    const onSubmit = async (values) => {
        console.log(values);
        setParamSearch(values)
        setLoading(true);
        setResultSearch((resultSearch) => {
            const filteredItems = resultSearch.result.filter(function (item) {
                return item[TABLE_SEARCH_KEY.CIF] == values[TABLE_SEARCH_KEY.CIF];
            });
            const adaptData = filteredItems.length > 0 ? filteredItems : dataTest
            return {
                count: adaptData.length,
                result: adaptData
            }
        })
        setTimeout(() => {

            setLoading(false)
        }, 2000);

    }
    const onCopy = (record, index) => {
        window.open(`${URL_BASE}/A`, '_blank');
        setOpenModal(false)
    }
    const onDelete = (record, index) => {
        console.log(record, index);
    }
    const onView = (record, index) => {
        console.log(record, index);
    }

    return (
        <div>
            <SearchModule
                paramSearch={paramSearch}
                onSubmit={onSubmit}
                resultSearch={resultSearch}
            />
            <TableResult
                data={resultSearch.result}
                onCopy={() => {
                    setOpenModal(true)
                }}
                onDelete={onDelete}
                loading={loading}
                isMine={paramSearch[TABLE_SEARCH_KEY.IS_MINE]}
            />
            <ModalCreateEform
                open={openModal}
                setOpen={setOpenModal}
                onFinish={onCopy}
            />
        </div>
    )
}

export default SearchPage