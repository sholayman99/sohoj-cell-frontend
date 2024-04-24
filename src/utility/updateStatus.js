import Swal from "sweetalert2";
import {adStatusUpdateRequest} from "../apiRequest/apiRequest.js";

export function updateStatus(id,status){
    return Swal.fire({
        title:"Update Status",
        input:"select",
        inputOptions:{Pending:"Pending" , Approved:"Approved",Canceled:"Canceled"},
        inputValue:status,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Submit"
    }).then((result)=>{
         if(result.isConfirmed){
             return adStatusUpdateRequest(id,result.value).then((res)=>{
                return res ;
            })
        }
    })
}