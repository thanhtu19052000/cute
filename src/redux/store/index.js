import authReducer from '../slice/authSlice'
import configTypeReducer from '../slice/configSlice'
import { configureStore } from '@reduxjs/toolkit'
import demoReducer from '../slice/demoSlice';

export  const store =  configureStore({
  reducer: {
    configType: configTypeReducer,
    auth:authReducer,
    demo:demoReducer,
  }
});