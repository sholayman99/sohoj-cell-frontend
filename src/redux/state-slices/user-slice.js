import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        info:[],
        userCount:[],
        adsCount:[],
        categoryCount:[],
    },
    reducers:{
        setInfo:(state,action)=>{
            state.info = action.payload
        },

        setUserCount:(state,action)=>{
            state.userCount = action.payload
        },
        setAdsCount:(state,action)=>{
            state.adsCount = action.payload
        },
        setCategoryCount:(state,action)=>{
            state.categoryCount = action.payload
        },

    }
});

export const {setInfo,setUserCount,
    setAdsCount,setCategoryCount} = userSlice.actions;
export default userSlice.reducer;