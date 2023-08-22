import authReducer from '../slice/authSlice'
import configTypeReducer from '../slice/configSlice'
import { configureStore } from "@reduxjs/toolkit";
import demoSliceReducer from '../slice/demoSlice'

export default configureStore({
  reducer: {
    configType: configTypeReducer,
    auth:authReducer,
    demo:demoSliceReducer,
  }
});