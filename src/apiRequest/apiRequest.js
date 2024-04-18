import {hideLoader, showLoader} from "../redux/state-slices/settings-slice.js";
import store from "../redux/store/store.js";
import {errorMsg, successMsg} from "../utility/formHelper.js";
import axios from "axios";
import {
    setAdByStatus,
    setAdDetails,
    setAdsByCategory, setAdsByDivision,
    setAllAds,
    setFavourites, setKeywordAds,
    setSingleAd, setTotalAd,
    setUserAd
} from "../redux/state-slices/ad-slice.js";
import {setSliders} from "../redux/state-slices/slider-slice.js";
import {setCategory, setDistrict, setDivision} from "../redux/state-slices/category-slice.js";
import {setAdsCount, setCategoryCount, setInfo, setUserCount, setUserList} from "../redux/state-slices/user-slice.js";
import {
    getEmail,
    getOtp,
    getRole,
    removeSession,
    setEmail,
    setOtp,
    setRole,
    setUserInfo
} from "../utility/sessionHelper.js";


export async function registrationRequest(fullName,email,password,photo,mobile){
    store.dispatch(showLoader());
    let postBody ={fullName:fullName,email:email,password:password,photo:photo,mobile:mobile};

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
        let res = await axios.post("/login",postBody, {withCredentials:true});
        store.dispatch(hideLoader())
        if(res.data['status'] === "success"){
            successMsg("Login successfully!");
            setUserInfo(res.data['data']);
            setRole(res.data['role']);
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


export async function listByCategoryRequest(pageNo,perPage,id){
    store.dispatch(showLoader());

    try {
        let res = await axios.get(`/listByCategory/${pageNo}/${perPage}/${id}`);
        store.dispatch(hideLoader());
        if(res.data['status']==='success'){
            store.dispatch(setAdsByCategory(res.data['data']));
            store.dispatch(setTotalAd(res.data['total']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}


export async function listByDivisionRequest(pageNo,perPage,id){
    store.dispatch(showLoader());

    try {
        let res = await axios.get(`/filterByDivision/${pageNo}/${perPage}/${id}`);
        store.dispatch(hideLoader());
        if(res.data['status']==='success'){
            store.dispatch(setAdsByDivision(res.data['data']));
            store.dispatch(setTotalAd(res.data['total']));
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



export async function allAdsRequest(pageNo,perPage){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/adList/${pageNo}/${perPage}`);
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(setAllAds(res.data['data']));
            store.dispatch(setTotalAd(res.data['total']));
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


export async function userInfoRequest(){
    store.dispatch(showLoader());
    try {
        let res = await axios.get('/info',{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(setInfo(res.data['data'][0]));
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


export async function postAdRequest(postData,image){
    store.dispatch(showLoader());
    let postBody = postData;
    postData.image = image;

    try {
        let res = await axios.post("/createAd",postBody,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
            successMsg("Ad created!");
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }
}


export async function adUpdateRequest(id,postBody){
    store.dispatch(showLoader());
    try {
        let res = await axios.post(`/updateAd/${id}`,postBody,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            successMsg("Ad Updated!");
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
        return false;
    }
}



export async function userAdsRequest(pageNo,perPage){
    store.dispatch(showLoader());

    try {
        let res = await axios.get(`/listUserAd/${pageNo}/${perPage}`,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
            store.dispatch(setUserAd(res.data['data']));
            store.dispatch(setTotalAd(res.data['total']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }

}


export async function singleAdRequest(id){
    store.dispatch(showLoader());

    try {
        let res = await axios.get(`/findSingleAd/${id}`);
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
            store.dispatch(setSingleAd(res.data['data']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }

}



export async function adRemoveRequest(id){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/removeAd/${id}`,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
            successMsg("Item deleted successfully!");
            return true
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }

}


export async function userPhotoUpdateRequest(photo){
    store.dispatch(showLoader());
    let postData ={photo:photo}
    try {
        let res = await axios.post(`/photoUpdate`,postData,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
            successMsg("Photo updated!");
            return true
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }

}



export async function userNameUpdateRequest(fullName){
    store.dispatch(showLoader());
    let postData ={fullName:fullName}
    try {
        let res = await axios.post(`/userNameUpdate`,postData,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
            successMsg("Full name updated!");
            return true
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }

}



export async function userMobileUpdateRequest(mobile){
    store.dispatch(showLoader());
    let postData ={mobile:mobile}
    try {
        let res = await axios.post(`/userMobileUpdate`,postData,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
            successMsg("Mobile number updated!");
            return true
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }

}


export async function userPasswordUpdateRequest(password){
    store.dispatch(showLoader());
    let postData ={password:password}
    try {
        let res = await axios.post(`/passwordUpdate`,postData,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
            return true
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }

}


export async function logoutRequest(){
    store.dispatch(showLoader());

    try {
        let res = await axios.get(`/logout`);
        store.dispatch(hideLoader());
        if(res.data['status']==="success"){
           removeSession();
           successMsg("Logout successfully!")
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }
}


export async function adDetailsRequest(id){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/adDetails/${id}`,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            store.dispatch(setAdDetails(res.data['data'][0]));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}


export async function adToFavRequest(postBody){
    store.dispatch(showLoader());
    try {
        let res = await axios.post(`/createFavouriteList`,postBody,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            successMsg("Saved the ad!");
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
        return false
    }
}


export async function favouriteListRequest(){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/favouriteList`,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            store.dispatch(setFavourites(res.data['data']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}


export async function removeFavouriteRequest(id){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/removeFavouriteList/${id}`,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            successMsg("Favourite removed!");
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
        return false;
    }
}



export async function adSearchByKeyword(pageNo,perPage,keyword){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/searchByKeyword/${pageNo}/${perPage}/${keyword}`);
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            store.dispatch(setKeywordAds(res.data['data']));
            store.dispatch(setTotalAd(res.data['total']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}



const role = getRole();

export async function adListByStatusRequest(pageNo,perPage,status){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/admin/adByStatusList/${pageNo}/${perPage}/${status}`,{withCredentials:true,
            headers: {
               role:role
            }});
        console.log(res)
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            store.dispatch(setAdByStatus(res.data['data']));
            store.dispatch(setTotalAd(res.data['total']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}

export async function adStatusUpdateRequest(id,status){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/admin/updateAdStatus/${id}/${status}`,{withCredentials:true,
            headers: {
                role:role
            }});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            successMsg("Status updated!");
            return true
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
        return false
    }
}

export async function userListRequest(pageNo,perPage){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/admin/userList/${pageNo}/${perPage}`,{withCredentials:true,
            headers: {
                role:role
            }});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            store.dispatch(setUserList(res.data['data']));
            store.dispatch(setTotalAd(res.data['total']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}



export async function countRequest(){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/count`,{withCredentials:true});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            store.dispatch(setUserCount(res.data['user']));
            store.dispatch(setAdsCount(res.data['ads']));
            store.dispatch(setCategoryCount(res.data['categories']));
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}

export async function removeUserRequest(id){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/admin/removeUser/${id}`,{withCredentials:true,
            headers: {
                role:role
            }});
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            successMsg("remove user success!");
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
        return false;
    }
}


export async function verifyEmailRequest(email){
    store.dispatch(showLoader());
    try {
        let res = await axios.get(`/emailVerify/${email}`);
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            successMsg("Valid email!");
            setEmail(email);
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
        return false;
    }
}

export async function verifyOtpRequest(otp){
    store.dispatch(showLoader());
    let email = getEmail();
    try {
        let res = await axios.get(`/otpVerify/${email}/${otp}`);
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            successMsg("Otp verification successful!");
            setOtp(otp);
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
        return false;
    }
}


export async function resetPasswordRequest(pass){
    store.dispatch(showLoader());
    let email = getEmail();
    let postBody = {email:email,password:pass};
    try {
        let res = await axios.post(`/resetPass` , postBody);
        store.dispatch(hideLoader());
        if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            return true;
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
        return false;
    }
}