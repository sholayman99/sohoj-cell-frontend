import {createSlice} from "@reduxjs/toolkit";
import details from "../../components/details/Details.jsx";


export const adSlice = createSlice({
    name:"ads",
    initialState:{
       listAd:[],
       userAd:[],
       details:[],
       favourites:[],
       singleAd:[],
    },
    reducers:{
        setAdsByCategory:(state,action)=>{
            state.listAd = action.payload
        },

        setAllAds:(state,action)=>{
            state.listAd = action.payload
        },

        setKeywordAds:(state,action)=>{
            state.listAd = action.payload
        },

        setFilterAd:(state,action)=>{
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
        }
    }
});

export const {setAdsByCategory,setAllAds,
    setUserAd,setAdDetails,
    setFavourites,setSingleAd,setKeywordAds
    ,setFilterAd} = adSlice.actions;
export default adSlice.reducer;