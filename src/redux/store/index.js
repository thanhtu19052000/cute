import authReducer from '../slice/authSlice'
import configTypeReducer from '../slice/configSlice'
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    configType: configTypeReducer,
    auth:authReducer,
  }
});