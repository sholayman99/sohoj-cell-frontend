import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        info:[]
    },
    reducers:{
        setInfo:(state,action)=>{
            state.info = action.payload
        },

    }
});

export const {setInfo} = userSlice.actions;
export default userSlice.reducer;