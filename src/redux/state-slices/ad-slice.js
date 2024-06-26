import {createSlice} from "@reduxjs/toolkit";


export const adSlice = createSlice({
    name:"ads",
    initialState:{
       listAd:[],
       userAd:[],
       details:[],
       favourites:[],
       singleAd:[],
       adByStatus:[],
       totalAd:[],
    },
    reducers:{
        setAdsByCategory:(state,action)=>{
            state.listAd = action.payload
        },

        setAdsByDivision:(state,action)=>{
            state.listAd = action.payload
        },

        setAllAds:(state,action)=>{
            state.listAd = action.payload
        },

        setKeywordAds:(state,action)=>{
            state.listAd = action.payload
        },

        setUserAd:(state,action)=>{
            state.userAd = action.payload;
        },
        setAdDetails:(state,action)=>{
            state.details = action.payload;
        },
        setFavourites:(state,action)=>{
            state.favourites = action.payload;
        },
        setSingleAd:(state,action)=>{
            state.singleAd = action.payload;
        },
        setAdByStatus:(state,action)=>{
         state.adByStatus = action.payload;
        },
        setTotalAd:(state,action)=>{
            state.totalAd = action.payload;
        },

    }
});

export const {setAdsByCategory,setAllAds,
    setUserAd,setAdDetails,
    setFavourites,setSingleAd,
    setKeywordAds,setAdByStatus,
    setTotalAd,setAdsByDivision} = adSlice.actions;
export default adSlice.reducer;