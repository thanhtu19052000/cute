import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react'

import ContentCreateEform from '../../Layout/components/CreatePage/ContentCreateEform';
import { Empty } from 'antd';
import EmptyComp from '../../Layout/components/Template/Form/Emty';
import QUY_TRINH from '../../config/constant/quyTrinh';
import SideBarCreateEform from '../../Layout/components/CreatePage/SideBarCreateEform'
import { URL_BASE } from '../../config/constant/route';
import getDataFromNestedObjects from '../../utils/func/getDataObject'

function CreatePage() {
    const [navigate, setNavigate] = useState([]);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    useEffect(() => {
        // Hàm xử lý sự kiện thay đổi kích thước màn hình
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        // Đăng ký sự kiện thay đổi kích thước màn hình khi component được mount
        window.addEventListener('resize', handleResize);

        // Hủy đăng ký sự kiện khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const onCreateNew = (value) => {
        window.open(`${URL_BASE}/A`, '_blank');
        // console.log(value);
    }
    return (
        <div className='container padding'>
            <Row gutter={[20, 0]}>
                <Col span={5}>
                    <SideBarCreateEform
                        onChange={({ item, key, keyPath, domEvent }) => {
                            keyPath.pop()
                            setNavigate(keyPath.reverse())
                        }}
                    />
                </Col>
                <Col span={19} >
                    <Row justify={'center'}>
                        <ContentCreateEform
                            windowHeight={windowHeight}
                            onCreateNew={onCreateNew}
                        >
                            {/* {QUY_TRINH[keyPath]} */}
                            {getDataFromNestedObjects(QUY_TRINH, navigate).component ? getDataFromNestedObjects(QUY_TRINH, navigate).component : <EmptyComp height={(windowHeight - 200)} />}
                        </ContentCreateEform>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default CreatePage