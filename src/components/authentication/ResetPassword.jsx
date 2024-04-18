import React, {useRef, useState} from 'react';
import {FaEyeSlash} from "react-icons/fa";
import {FaEye} from "react-icons/fa6";
import {TbPasswordUser} from "react-icons/tb";
import pass from "../../assets/images/password.png"
import {errorMsg, isPassword} from "../../utility/formHelper.js";
import {resetPasswordRequest} from "../../apiRequest/apiRequest.js";
import {successModal} from "../../utility/successModal.js";
import {useNavigate} from "react-router-dom";

const ResetPassword = () => {
    let newPassRef,confirmPassRef=useRef();
    const [passwordType, setPasswordType] = useState("password");
    const navigate = useNavigate();

    const togglePassword =()=>{
        if(passwordType==="password") {
            setPasswordType("text")
        }
        else{
            setPasswordType("password")
        }
    }

    const resetPassword = async ()=>{
        let password = newPassRef.value;
        let confirmPass = confirmPassRef.value;
        if(!isPassword(password) || !isPassword(confirmPass)){
            errorMsg("Minimum 8 character")
        }else{
            if(password !== confirmPass){
                errorMsg("Password didn't match!")
            }
            else {
                let res = await resetPasswordRequest(password);
                if(res === true){
                    await successModal();
                    navigate("/login")
                }
            }
        }
    }

    return (
        <main className={"flex justify-center items-center lg:min-h-[90vh] min-h-[70vh] bg-base-300"}>
            <section className={" bg-base-100 w-full lg:max-w-lg md:max-w-lg max-w-sm lg:px-16 lg:py-8 px-6 py-3 rounded-md flex" +
                    " flex-col justify-center items-center gap-5"}>
                <div className={"flex justify-center items-center flex-col"}>
                    <img className={"w-20"} src={pass} alt={"password"}/>
                    <p>Please reset your password</p>
                </div>
                <div className={"w-full"}>
                    <div className="form-control relative">
                        <div className={"label"}>
                            <span className="label-text-alt text-gray-500">New password</span>
                        </div>
                        <input type={passwordType} placeholder={"Enter new password"}
                               ref={(input) => newPassRef = input}
                               className="input input-bordered  max-w-full"
                               required/>
                        <div className="input-group-btn absolute right-1 top-10">
                            <button className="btn btn-ghost btn-sm"
                                    onClick={togglePassword}>
                                {passwordType === "password" ? <FaEyeSlash/> :
                                    <FaEye/>}
                            </button>
                        </div>
                    </div>
                    <div className="form-control mt-3 ">
                        <div className={"label"}>
                            <span className="label-text-alt text-gray-500">Confirm password</span>
                        </div>
                        <input type={"password"} placeholder="Enter confirm password"
                               className="input input-bordered max-w-full"
                               ref={(input) => confirmPassRef = input}
                               required/>
                    </div>
                </div>
                <button onClick={resetPassword} className={"btn btn-accent w-full"}>Submit</button>

            </section>
        </main>
    );
};

export default ResetPassword;