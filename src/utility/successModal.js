import Swal from "sweetalert2";

export function successModal(){
    return Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Password changed successfully!",
        showConfirmButton: false,
        timer: 1500
    });
}