import {configureStore} from "@reduxjs/toolkit";
import settingReducer from "../state-slices/settings-slice.js";
import categoryReducer from "../state-slices/category-slice.js";
import adsReducer from "../state-slices/ad-slice.js";
import sliderReducer from "../state-slices/slider-slice.js";
import userReducer from "../state-slices/user-slice.js";


export default configureStore({
    reducer:{
      settings:settingReducer,
      category:categoryReducer,
      ads:adsReducer,
      sliders:sliderReducer,
      user:userReducer,

    }
})