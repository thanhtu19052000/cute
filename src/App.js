import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoutes, publicRoutes } from "./routes";

import { Fragment } from "react";
import { useSelector } from "react-redux";

function App() {
  const { fontSize } = useSelector((state) => state.configType)
  return (
    <BrowserRouter>
      <div className="App"
        style={{ fontSize: fontSize }}
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


          {/* <Route
            path={createRoutes.parent.path}
          >
            <Route
              index element={
                <createRoutes.parent.layout>
                  <createRoutes.parent.component />
                </createRoutes.parent.layout>
              }
            />
            {createRoutes.children.map((route, indexID) => {
              let Layout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout == null) {
                Layout = Fragment;
              }
              // console.log(route.path);
              return (
                <Route
                  key={indexID}
                  path={route.path}
                >

                  <Route
                    index
                    element={
                      <Layout>
                        <route.component />
                      </Layout>
                    }
                  />



                </Route>
              );
            })}
          </Route>*/}
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
