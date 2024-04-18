import Swal from "sweetalert2";
import {getEmail} from "./sessionHelper.js";

export function confirmModal (){
    return Swal.fire({
        title: "Check your email",
        icon: "info",
        text: `We've sent instructions on how to reset your password to ${getEmail()}`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Got it!"
    }).then((result) => {
        return result.isConfirmed;
    });
}