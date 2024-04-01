import {createSlice} from "@reduxjs/toolkit";
import details from "../../components/details/Details.jsx";


export const adSlice = createSlice({
    name:"ads",
    initialState:{
       listAd:[],
       userAd:[],
       details:[],
    },
    reducers:{
        setAdsByCategory:(state,action)=>{
            state.listAd = action.payload
        },

        setAllAds:(state,action)=>{
            state.listAd = action.payload
        },
        setUserAd:(state,action)=>{
            state.userAd = action.payload;
        },
        setAdDetails:(state,action)=>{
            state.details = action.payload;
        }
    }
});

export const {setAdsByCategory,setAllAds,
    setUserAd,setAdDetails} = adSlice.actions;
export default adSlice.reducer;