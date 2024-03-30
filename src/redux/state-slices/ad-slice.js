import {createSlice} from "@reduxjs/toolkit";


export const adSlice = createSlice({
    name:"ads",
    initialState:{
       listAd:[],
       userAd:[]
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
        }
    }
});

export const {setAdsByCategory,setAllAds,setUserAd} = adSlice.actions;
export default adSlice.reducer;