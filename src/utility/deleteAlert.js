import Swal from "sweetalert2";
import {adRemoveRequest} from "../apiRequest/apiRequest.js";


export function deleteAd(id){
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            return  adRemoveRequest(id).then((deleteResult)=>{
                return deleteResult
            })
        }
    });
}