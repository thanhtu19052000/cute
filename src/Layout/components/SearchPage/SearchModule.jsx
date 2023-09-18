import { Button, Col, DatePicker, Form, Input, Row, Select, Switch } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'; // Import Ant Design icons
import React, { useEffect, useRef, useState } from 'react'
import { TABLE_SEARCH_KEY, TYPE_ASSIGN, TYPE_DATA } from '../../../config/constant';

import { API_MASTER } from '../../../config/constant/route';
import DropDowListWithForm from './DropDowListWithForm';
import InputTemplateSearch from '../Template/Form/Input/InputTemplateSearch';
import classNames from 'classnames/bind';
import cn from '../../../utils/func/handleClassName';
import { get } from '../../../apis';
import searchIcon from '../../../asset/images/loupe.png'
import styles from './SearchModule.module.scss'

const cx = classNames.bind(styles)

const { Option } = Select;
const { RangePicker } = DatePicker;
function SearchModule({ paramSearch, resultSearch, onSubmit }) {
    console.log('inside', paramSearch);
    const [form] = Form.useForm();
    const formRef = useRef();
    const [isOpen, setIsOpen] = useState(null);
    const toggleOpen = () => {
        if (isOpen) {
            formRef.current?.resetFields();
            setIsOpen(false);
        } else {
            setIsOpen(true)
        }
    };
    const onFinish = (values) => {
        onSubmit(values);
    };
    const onReset = () => {
        formRef.current?.resetFields();
    };



    const dataField = [
        { name: TABLE_SEARCH_KEY.BPM_CODE, type: TYPE_ASSIGN.INPUT_TEXT, label: 'Mã BPM', placeholder: 'Nhập mã BPM giao dịch' },
        { name: TABLE_SEARCH_KEY.CIF, type: TYPE_ASSIGN.INPUT_TEXT, label: 'Số cif', placeholder: 'Nhập mã CIF khách hàng' },
        { name: TABLE_SEARCH_KEY.ID_CARD, type: TYPE_ASSIGN.INPUT_TEXT, label: 'Số cmnd/cccd', placeholder: 'Nhập số CMND/CCCD khách hàng' },
        { name: TABLE_SEARCH_KEY.UNIT_BUSINESS, type: TYPE_ASSIGN.DROP_DOWN, label: 'Đơn vị kinh doanh', placeholder: 'Chọn Đơn vị kinh doanh' },
        { name: TABLE_SEARCH_KEY.BUSINESS_CODE, type: TYPE_ASSIGN.INPUT_TEXT, label: 'Mã DKKD', placeholder: 'Nhập mã DKKD khách hàng' },
        { name: TABLE_SEARCH_KEY.GROUP_DOCUMENT, type: TYPE_ASSIGN.DROP_DOWN, label: 'Chọn nhóm văn kiện', placeholder: 'Chọn nhóm văn kiện', url: `${API_MASTER.GROUP_DOC}` },
        { name: TABLE_SEARCH_KEY.TYPE_DOCUMENT, type: TYPE_ASSIGN.DROP_DOWN, label: 'Loại văn kiện', placeholder: 'Chọn loại văn kiện' },
        { name: TABLE_SEARCH_KEY.NAME_DOCUMENT, type: TYPE_ASSIGN.INPUT_TEXT, label: 'Tên văn kiện', placeholder: 'Nhập tên văn kiện' },
        { name: TABLE_SEARCH_KEY.STATUS_DOCUMENT, type: TYPE_ASSIGN.DROP_DOWN, label: 'Trạng thái văn kiện', placeholder: 'Chọn trạng thái văn kiện' },
        { name: TABLE_SEARCH_KEY.USER_INIT, type: TYPE_ASSIGN.DROP_DOWN, label: 'Nhân sự khởi tạo', placeholder: 'Chọn nhân sự khởi tạo', renderBy: TABLE_SEARCH_KEY.IS_MINE },
        { name: TABLE_SEARCH_KEY.USER_HANDLE, type: TYPE_ASSIGN.DROP_DOWN, label: 'Nhân sự đang xử lý', placeholder: 'Chọn nhân sự đang xử lý', renderBy: TABLE_SEARCH_KEY.IS_MINE },
        { name: TABLE_SEARCH_KEY.RANGE_DATE, type: TYPE_ASSIGN.RANGE_PICKER, label: 'Thời gian khởi tạo' },
    ]
    const onDropDownChange = (value, name) => {
        form.setFieldsValue({
            [name]: value,
        });
        console.log(value, name);
    };
    console.log(paramSearch);
    return (
        <div className={cx('wrap')}>
            <Row
                align={'middle'}
                className={cx('wrap-search-row')}
                onClick={toggleOpen}
            >
                <Col
                    span={4}
                >
                    <Row align={'middle'}>
                        <img
                            className={cx('search-icon')}
                            src={searchIcon}
                        />
                        <p className={cx('title-search')}>
                            Tìm kiếm
                        </p>

                    </Row>
                </Col>
                <Col
                    span={8}
                    offset={12}
                    flex={'auto'}

                >
                    <Row justify={'end'} align={'middle'}>

                        <p className={cx('count-text')}>
                            {resultSearch.count}
                        </p>
                        <p className={cx('sub-count-text')}>
                            kết quả tìm kiếm
                        </p>



                        <UpOutlined className={cn([cx('toggle-button'), isOpen ? cx('open') : '', 'horizon'])} />


                    </Row>
                </Col>

            </Row>
            {(isOpen === true || isOpen === false) && <div className={cn([cx('wrap-search'), isOpen === true ? cx('open-content') : isOpen === false ? cx('close-content') : ''])} style={{ overflow: 'hidden' }}>
                <Row
                    className={cx('wrap-search-row')}
                >
                    {/* <Row>
                    <p className={cx('title-search-sub')}>
                        Tìm kiếm cơ bản
                    </p>
                </Row> */}
                    <Col span={24}

                    >
                        <Form
                            ref={formRef}
                            name="control-ref"
                            onFinish={onFinish}
                            className={cx('close-content')}
                            form={form}
                            defaultValue={{
                                [TABLE_SEARCH_KEY.IS_MINE]: paramSearch[TABLE_SEARCH_KEY.IS_MINE]
                            }}
                        // style={{
                        //     maxWidth: 600,
                        // }}
                        >

                            <Row justify={'space-between'}
                                gutter={[16, 16]}
                                className={cx('row-search')}
                            >
                                {dataField.map((field) => {
                                    if (field.type === TYPE_ASSIGN.INPUT_TEXT) {
                                        return <Col span={8}
                                            key={field.name}
                                        >
                                            <Form.Item name={field.name} className={cn(['none-margin', cx('form-item')])} >
                                                {/* <Input placeholder="Số CMND/CCD của KH" /> */}
                                                {/* <InputTemplateSearch /> */}
                                                <div className={cx('wrap-input')}>
                                                    <label className={cx('label-input')}>{field.label}</label>
                                                    <input className={cx('input')} type="text" placeholder={field.placeholder} />
                                                </div>
                                            </Form.Item>
                                        </Col>
                                    }
                                    if (field.type === TYPE_ASSIGN.DROP_DOWN) {

                                        // if (field.renderBy) {
                                        //     return <Form.Item
                                        //         noStyle
                                        //         shouldUpdate={(prevValues, currentValues) => prevValues[field.renderBy] !== currentValues[field.renderBy]}
                                        //     >
                                        //         {({ getFieldValue }) =>
                                        //             getFieldValue(field.renderBy) === false ? (
                                        //                 <Col span={8}
                                        //                     key={field.name}
                                        //                 >
                                        //                     <div className={cx('wrap-input')}>
                                        //                         <DropDowListWithForm
                                        //                             field={field}
                                        //                             onChangeDropDown={onDropDownChange}
                                        //                         />

                                        //                     </div>
                                        //                 </Col>
                                        //             ) : null
                                        //         }
                                        //     </Form.Item>


                                        // } else {
                                        return <Col span={8}
                                            key={field.name}
                                        >
                                            <div className={cx('wrap-input')}>
                                                <DropDowListWithForm
                                                    field={field}
                                                    onChangeDropDown={onDropDownChange}
                                                />

                                            </div>
                                        </Col>
                                        // }

                                    }
                                    if (field.type === TYPE_ASSIGN.RANGE_PICKER) {
                                        return <Col span={8}
                                            key={field.name}>
                                            <div className={cx('wrap-input')}>
                                                <label className={cx('label-input')}>{field.label}</label>
                                                <Form.Item name={field.name}
                                                    className={cn(['wrap-select-options', 'none-margin', cx('form-item')])}
                                                >
                                                    {/* <Input placeholder="Số CMND/CCD của KH" /> */}
                                                    {/* <InputTemplateSearch /> */}


                                                    <RangePicker
                                                        className={'date-range-picker'}
                                                        placeholder={['Từ ngày', 'Tới ngày']}
                                                    />

                                                </Form.Item>
                                            </div>
                                        </Col>
                                    }
                                })}




                            </Row>
                            <Row justify={'space-between'}
                                gutter={[16, 0]}
                                className={cx('row-search')}
                            >
                                <Col span={8}>

                                    <Row justify={'start'} align={'middle'}><div className={cx('label-input')} style={{ height: 8 }}>Văn kiện của tôi :  </div>
                                        <Form.Item name={TABLE_SEARCH_KEY.IS_MINE} valuePropName="checked" className={cn(['wrap-select-options', 'none-margin', cx('form-item')])} >
                                            <Switch onChange={(value) => { onDropDownChange(value, TABLE_SEARCH_KEY.IS_MINE) }} />
                                        </Form.Item></Row>


                                </Col>
                            </Row>
                            <Form.Item className='none-margin'>
                                <Button className={cx('button')} type="primary" htmlType="submit" size='large'>
                                    <span className={cx('sumit-text')}>Tìm kiếm</span>
                                </Button>
                                <Button className={[cx('button'), 'button-yellow']} htmlType="button" onClick={onReset} size='large'  >
                                    <span className={cx('sumit-text')}>Reset thông tin</span>
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col >
                </Row>
            </div>}


        </div >
    )
}

export default SearchModule;


