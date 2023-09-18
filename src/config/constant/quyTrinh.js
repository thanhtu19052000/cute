import CHOVAY1 from "../../pages/CHOVAY/CHOVAY1";
import CHOVAY2 from "../../pages/CHOVAY/CHOVAY2";
import TINDUNG1 from "../../pages/TINDUNG/TINDUNG1";
import TINDUNG2 from "../../pages/TINDUNG/TINDUNG2";
import TSBD1 from "../../pages/TSBD/TSBD1";
import TSBD2 from "../../pages/TSBD/TSBD2";

const QUY_TRINH = {
    TIN_DUNG: {
        CURRENT: 'TIN_DUNG',
        TIN_DUNG_1: {
            key: 'TIN_DUNG_1',
            component: <TINDUNG1 />
        },
        TIN_DUNG_2: {
            key: 'TIN_DUNG_2',
            component: <TINDUNG2 />
        },
    },
    CHO_VAY: {
        CURRENT: 'CHO_VAY',
        CHO_VAY_1: {
            key: 'CHO_VAY_1',
            component: <CHOVAY1 />
        },
        CHO_VAY_2: {
            key: 'CHO_VAY_2',
            component: <CHOVAY2 />
        },
    },
    TSBD: {
        CURRENT: 'TSBD',
        TSBD_1: {
            key: 'TSBD_1',
            component: <TSBD1 />
        },
        TSBD_2: {
            key: 'TSBD_2',
            component: <TSBD2 />
        },
    },
}

export default QUY_TRINH;