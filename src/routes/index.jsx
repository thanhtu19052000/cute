// import DefaultLayout from "../component/Layout/DefaultLayout";

import BCTTD_CN_7 from "../pages/BCTDTD/BCTTD_CN_7";
import CHOVAY1 from "../pages/CHOVAY/CHOVAY1";
import CreatePage from "../pages/CreatePages";
import DefaultWraptLayouts from "../Layout/WrapLayouts";
import EFormLayout from "../Layout/WrapLayouts/EFormLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PAGE_URL from "../config/constant/route";
import SearchPage from "../pages/SearchPage";
import TINDUNG1 from "../pages/TINDUNG/TINDUNG1";
import TSBD1 from "../pages/TSBD/TSBD1";

// console.log(PAGE_URL.LOGIN);
export const publicRoutes = [
    { path: PAGE_URL.LOGIN, component: LoginPage },
    { path: "/", component: HomePage, layout: DefaultWraptLayouts },
    // { path: "/Test/:maGD", component: Home, layout: EFormLayout },
    { path: "/A", component: BCTTD_CN_7, layout: EFormLayout },
    { path: PAGE_URL.PORTAL, component: SearchPage, layout: DefaultWraptLayouts },
    { path: PAGE_URL.CREATE.CURRENT, component: CreatePage, layout: DefaultWraptLayouts },
];
export const createRoutes = {
    parent: { path: PAGE_URL.CREATE.CURRENT, component: CreatePage, layout: DefaultWraptLayouts },
    children: [
        { path: "chovay", component: CHOVAY1, layout: DefaultWraptLayouts },
        { path: PAGE_URL.CREATE.TIN_DUNG, component: TINDUNG1, layout: DefaultWraptLayouts },
        { path: PAGE_URL.CREATE.TSBD, component: TSBD1, layout: DefaultWraptLayouts },
    ]
}
// export const nestedRoutes = [
//     [{}]
// ]
