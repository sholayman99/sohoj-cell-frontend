import Swal from "sweetalert2";
import {adUpdateRequest} from "../apiRequest/apiRequest.js";



export function updateAdModal(id,postBody){
    return Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
        confirmButtonColor: "#3085d6",
    }).then((result) => {
        if (result.isConfirmed) {
            return  adUpdateRequest(id,postBody).then((updateResult)=>{
                return updateResult
            })
        }
    });
}
