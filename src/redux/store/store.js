import {configureStore} from "@reduxjs/toolkit";
import settingReducer from "../state-slices/settings-slice.js";

export default configureStore({
    reducer:{
      settings:settingReducer,
    }
})