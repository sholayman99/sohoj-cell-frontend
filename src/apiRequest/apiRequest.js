import axios from "axios";
import store from "../redux/store/store.js";
import {hideLoader, showLoader} from "../redux/state-slices/settings-slice.js";
import {setCategory, setDistrict, setDivision} from "../redux/state-slices/category-slice.js";
import {errorMsg, successMsg} from "../utility/formHelper.js";
import {setRole, setToken, setUserInfo} from "../utility/sessionHelper.js";
import {setAdsByCategory} from "../redux/state-slices/ad-slice.js";
import {setSliders} from "../redux/state-slices/slider-slice.js";


export async function registrationRequest(fName,lName,email,password,photo){
    store.dispatch(showLoader());
    let postBody ={fName:fName,lName:lName,email:email,password:password,photo:photo};

    try {
        let res = await axios.post("/registration",postBody);
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            successMsg("Created account successfully!")
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        if(e.response.data['data']['keyPattern']['email']===1){
            errorMsg("Email already exists!");
            return false;
        }
        else{
            errorMsg("Something went wrong!");
            return false;
        }
    }
}

export async function loginRequest(email,password){
    store.dispatch(showLoader());
    let postBody ={email:email,password:password};


    try {
      let res = await axios.post("/login",postBody);
      store.dispatch(hideLoader())
      if(res.data['status'] === "success"){
          setToken(res.data['token']);
          setRole(res.data['role']);
          setUserInfo(res.data['data']);
          successMsg("Login successfully!");
          return true
      }
      else{
          errorMsg("Invalid email & password!");
          return false;
      }
    }
    catch (e) {
         store.dispatch(hideLoader())
         errorMsg("Something went wrong!");
         return false
    }

}


export async function categoryListRequest(){
    store.dispatch(showLoader());
    try {
        let res = await axios.get('/categoryList');
        store.dispatch(hideLoader());
        if(res.data['status']==='success'){
            store.dispatch(setCategory(res.data['data']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}


export async function districtListRequest(){
    store.dispatch(showLoader());
    try {
        let res = await axios.get('/districtList');
        store.dispatch(hideLoader());
        if(res.data['status']==='success'){
            store.dispatch(setDistrict(res.data['data']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}


export async function divisionListRequest(){
    store.dispatch(showLoader());
    try {
        let res = await axios.get('/divisionList');
        store.dispatch(hideLoader());
        if(res.data['status']==='success'){
            store.dispatch(setDivision(res.data['data']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}


export async function listByCategoryRequest(id){
    store.dispatch(showLoader());

    try {
        let res = await axios.get(`/listByCategory/${id}`);
        store.dispatch(hideLoader());
        if(res.data['status']==='success'){
           store.dispatch(setAdsByCategory(res.data['data']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}


export async function sliderListRequest(){
    store.dispatch(showLoader());
    try {
       let res = await axios.get('/sliderList');
       store.dispatch(hideLoader());
       if(res.data['status'] === 'success'){
          store.dispatch(setSliders(res.data['data']));
       }
       else{
           errorMsg("Server error!")
       }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
    }
}