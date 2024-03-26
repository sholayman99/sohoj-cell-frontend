import {createSlice} from "@reduxjs/toolkit";


export const categorySlice = createSlice({
    name:"category",
    initialState:{
        categoryList:[],
        districtList:[],
        divisionList:[],
    },
    reducers:{
        setCategory:(state,action)=>{
            state.categoryList = action.payload;
        },
        setDistrict:(state,action)=>{
            state.districtList = action.payload;
        },
        setDivision:(state,action)=>{
            state.divisionList = action.payload;
        },
    }
});

export const {setCategory,setDistrict,setDivision} = categorySlice.actions;
export default categorySlice.reducer;