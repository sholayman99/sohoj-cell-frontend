import {createSlice} from "@reduxjs/toolkit";


export const adSlice = createSlice({
    name:"ads",
    initialState:{
       listAd:[]
    },
    reducers:{
        setAdsByCategory:(state,action)=>{
            state.listAd = action.payload
        }
    }
});

export const {setAdsByCategory} = adSlice.actions;
export default adSlice.reducer;