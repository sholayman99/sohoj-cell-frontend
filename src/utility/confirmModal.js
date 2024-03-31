import Swal from "sweetalert2";

export function confirmModal(){
    return Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Password changed successfully!",
        showConfirmButton: false,
        timer: 1500
    });
}