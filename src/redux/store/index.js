import authReducer from '../slice/authSlice'
import configTypeReducer from '../slice/configSlice'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../slice/dataSlice';
import demoReducer from '../slice/demoSlice';
import fixedHeaderFooterReducer from '../slice/fixedHeaderFooterSlice';

export const store = configureStore({
  reducer: {
    configType: configTypeReducer,
    auth: authReducer,
    demo: demoReducer,
    data: dataReducer,
    dataHeaderFooter: fixedHeaderFooterReducer
  }
});