import Swal from "sweetalert2";
import {userMobileUpdateRequest} from "../apiRequest/apiRequest.js";
import {errorMsg, isMobile} from "./formHelper.js";


export function userMobileUpdateModal(){
    return Swal.fire({
        input: "text",
        title: "Update Mobile Number",
        inputLabel: "Mobile",
        inputPlaceholder: "Type your mobile num here...",
        showCancelButton:true,
    }).then((result)=>{
        if(!isMobile(result.value)){
            errorMsg("Provide valid number")
            return false
        }
        else{
            if (result.isConfirmed) {
                return userMobileUpdateRequest(result.value).then((res)=>{
                    return res ;
                })
            }
        }
    })
}