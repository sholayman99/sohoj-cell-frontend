import Swal from "sweetalert2";
import {userNameUpdateRequest} from "../apiRequest/apiRequest.js";
import {errorMsg, isEmpty} from "./formHelper.js";

export function userNameUpdateModal(){
    return Swal.fire({
        input: "text",
        title: "Update Full Name",
        inputLabel: "Full Name",
        inputPlaceholder: "Type your full name here...",
        showCancelButton:true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit"
    }).then((result)=>{
       if(isEmpty(result.value)){
           errorMsg("Full name can't be empty!")
           return false
       }
       else {
           if(result.isConfirmed) {
               return userNameUpdateRequest(result.value).then((res)=>{
                   return res ;
               })
           }
       }
    })
}