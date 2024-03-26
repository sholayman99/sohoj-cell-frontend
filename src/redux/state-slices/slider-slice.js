import {createSlice} from "@reduxjs/toolkit";


export const sliderSlice = createSlice({
    name:"sliders",
    initialState:{
        value:[]
    },
    reducers:{
        setSliders:(state,action)=>{
            state.value = action.payload
        }
    }
});

export const {setSliders} = sliderSlice.actions;
export default sliderSlice.reducer;