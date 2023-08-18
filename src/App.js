import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Fragment } from "react";
import { publicRoutes } from "./routes";
import { useSelector } from "react-redux";

function App() {
  const {fontSize} = useSelector((state) => state.configType)
  return (
     <BrowserRouter>
      <div className="App"
        style={{fontSize:fontSize}}
      >
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout == null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                      <route.component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
