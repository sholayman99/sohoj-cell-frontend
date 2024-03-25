import axios from "axios";
import store from "../redux/store/store.js";
import {hideLoader, showLoader} from "../redux/state-slices/settings-slice.js";
import {errorMsg, successMsg} from "../utility/formHelper.js";


export async function registrationRequest(fName,lName,email,password,photo){
    store.dispatch(showLoader())
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