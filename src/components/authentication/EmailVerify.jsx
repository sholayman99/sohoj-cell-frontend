import React, {useState} from 'react';
import {errorMsg, isEmail} from "../../utility/formHelper.js";

const EmailVerify = () => {

    const [email,setEmail] = useState("");
    const verifyEmail =()=>{
        if(!isEmail(email)){
            errorMsg("Please enter a valid email");
        }
    }

    return (
        <main className={"flex justify-center items-center min-h-screen bg-base-300"}>
            <section className={" bg-base-100 w-full max-w-lg lg:px-16 lg:py-8 rounded-md flex flex-col justify-center items-center gap-5"}>
                <div className={"text-center"}>
                    <h2 className={"text-2xl font-semibold text-accent"}>Forgot Password?</h2>
                    <p>Please verify your email to reset your password</p>
                </div>
                <div className={"form-control w-full"}>
                    <div className={"label"}>
                        <span className="label-text-alt text-gray-500">Enter your email address</span>
                    </div>
                    <input onChange={(e)=>setEmail(e.target.value)}
                           type="text" placeholder="Type here" className="input input-bordered w-full"/>
                </div>
                <div className={"w-full"}>
                    <button onClick={verifyEmail} className={"btn btn-accent w-full"}>Next</button>
                </div>
            </section>
        </main>
    );
};

export default EmailVerify;