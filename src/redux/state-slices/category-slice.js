import {createSlice} from "@reduxjs/toolkit";


export const categorySlice = createSlice({
    name:"category",
    initialState:{
        categoryList:[]
    },
    reducers:{
        setCategory:(state,action)=>{
            state.categoryList = action.payload;
        }
    }
});

export const {setCategory} = categorySlice.actions;
export default categorySlice.reducer;