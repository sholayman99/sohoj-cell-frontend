import Cookies from "js-cookie";

class sessionHelper{

    setToken(token){
        localStorage.setItem("token",token);
    }

    getToken(){
        return localStorage.getItem("token");
    }

    setRole(role){
        localStorage.setItem("role",role);
    }

    getRole(){
        return localStorage.getItem("role");
    }

    setUserInfo(details){
        localStorage.setItem("userDetails",JSON.stringify(details));
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userDetails"));
    }

    removeSession(){
        Cookies.remove('token');
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/login"
    }

    setEmail(email){
        sessionStorage.setItem("email",email);
    }

    getEmail(){
        return sessionStorage.getItem("email");
    }

    setOtp(otp){
        sessionStorage.setItem("otp",otp);
    }

    getOtp(){
        return sessionStorage.getItem("otp");
    }

    getCookie(){
        return !!Cookies.get("token");
    }
    unauthorized(code){
        if(code === 401){
            Cookies.clear();
            sessionStorage.clear();
            localStorage.clear();
            window.location.href="/login";
        }
    }

}

export const {setToken,getToken,setRole,getRole,setUserInfo,getUserInfo,
    setEmail,getEmail,setOtp,getOtp,unauthorized,removeSession,getCookie} = new sessionHelper();