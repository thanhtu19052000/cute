import actionReducer from '../slice/actionSlice';
import authReducer from '../slice/authSlice'
import configTypeReducer from '../slice/configSlice'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../slice/dataSlice';
import fixedHeaderFooterReducer from '../slice/fixedHeaderFooterSlice';

export const store = configureStore({
  reducer: {
    configType: configTypeReducer,
    auth: authReducer,
    action: actionReducer,
    data: dataReducer,
    dataHeaderFooter: fixedHeaderFooterReducer
  }
});