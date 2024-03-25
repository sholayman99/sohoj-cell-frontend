import {configureStore} from "@reduxjs/toolkit";
import settingReducer from "../state-slices/settings-slice.js";
import categoryReducer from "../state-slices/category-slice.js";

export default configureStore({
    reducer:{
      settings:settingReducer,
      category:categoryReducer,
    }
})