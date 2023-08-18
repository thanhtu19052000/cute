// import DefaultLayout from "../component/Layout/DefaultLayout";

import DefaultLayouts from "../components/Layout/DefaultLayouts";
import Home from "../pages/Home";
import Test from "../pages/Test";

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/test", component: Test, layout: DefaultLayouts },
];
