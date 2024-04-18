import React, {useState} from 'react';
import {errorMsg, isEmail} from "../../utility/formHelper.js";
import {verifyEmailRequest} from "../../apiRequest/apiRequest.js";
import {useNavigate} from "react-router-dom";
import {confirmModal} from "../../utility/confirmModal.js";

const EmailVerify = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const verifyEmail =async ()=>{
        if(!isEmail(email)){
            errorMsg("Please enter a valid email");
        }
        else{
            let res = await verifyEmailRequest(email);
            if(res === true){
              let res = await confirmModal();
              console.log(res)
              if(res === true){
                  navigate("/otp-verify")
              }
              else {
                 window.location.href="/login"
              }
            }
        }
    }

    return (
        <main className={"flex justify-center items-center lg:min-h-[90vh] min-h-[70vh] bg-base-300"}>
            <section
                className={" bg-base-100 w-full lg:max-w-lg md:max-w-lg max-w-sm lg:px-16 lg:py-8 px-6 py-3 rounded-md flex" +
                    " flex-col justify-center items-center gap-5"}>
                <div className={"flex justify-center items-center flex-col"}>
                    <h2 className={"text-2xl text-primary font-semibold"}>Forgot Password?</h2>
                    <p>Please verify your email to reset your password</p>
                </div>
                <div className={"form-control w-full"}>
                <div className={"label"}>
                        <span className="label-text-alt text-gray-500">Enter your email address</span>
                    </div>
                    <input onChange={(e)=>setEmail(e.target.value)}
                           type="text"  className="input input-bordered w-full"/>
                </div>
                <div className={"w-full"}>
                    <button onClick={verifyEmail} className={"btn btn-primary text-base-100 w-full"}>Next</button>
                </div>
            </section>
        </main>
    );
};

export default EmailVerify;