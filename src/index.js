import './index.css';

import App from './App';
import { ConfigProvider } from 'antd';
import GlobalStyle from './Layout/components/globalStyle';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from '../src/redux/store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#008c4f',
              borderRadius: 5,
              colorSuccess: '#e49f15',
              colorWarning: '#e49f15',
              // Alias Token
              colorBgContainer: '#f6ffed',
            },
          }}
        >
          {/* <Demo /> */}
          <App />
        </ConfigProvider>
      </GlobalStyle>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
