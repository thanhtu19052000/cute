// import DefaultLayout from "../component/Layout/DefaultLayout";

import DefaultLayouts from "../components/Layout/DefaultLayouts";
import Demo from "../pages/Demo";
import Home from "../pages/Home";
import InterFacePage from "../pages/InterFace";
import Test from "../pages/Test";

export const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayouts },
    { path: "/test", component: Test, layout: DefaultLayouts },
    { path: "/demo", component: InterFacePage, layout: DefaultLayouts },

];
