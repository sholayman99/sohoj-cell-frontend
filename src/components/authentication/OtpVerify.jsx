import React, {useState} from 'react';
import ReactCodeInput from "react-code-input";
import {errorMsg} from "../../utility/formHelper.js";
import {verifyOtpRequest} from "../../apiRequest/apiRequest.js";
import {useNavigate} from "react-router-dom";

const OtpVerify = () => {
    const navigate = useNavigate();
    const [otp,setOtp] = useState("");
    const verifyOtp = async () => {
        if (!otp) {
            errorMsg("Please provide otp code")
        }
        else {
            let res = await verifyOtpRequest(otp);
            if(res === true){
                navigate("/reset-password")
            }
        }
    }

    let  defaultInputStyle= {
        fontFamily: "monospace", MozAppearance: "textfield", margin: "4px", paddingLeft: "8px",
        width: "45px", borderRadius: '3px', height: "45px", fontSize: "32px", border: '1px solid lightskyblue',
        boxSizing: "border-box", color: "black", backgroundColor: "white", borderColor: "lightgrey"
    }

    return (
        <main className={"flex justify-center items-center lg:min-h-[90vh] min-h-[70vh] bg-base-300"}>
            <section className={" bg-base-100 w-full lg:max-w-lg md:max-w-lg max-w-sm lg:px-16 lg:py-8 px-6 py-3 rounded-md flex" +
                    " flex-col justify-center items-center gap-5"}>
                <div className={"text-center"}>
                    <h2 className={"text-2xl font-semibold text-primary"}>Forgot Password?</h2>
                    <p>Please verify otp code to reset password</p>
                </div>
                <div className={"form-control w-full"}>
                    <div className={"label"}>
                        <span className="label-text-alt text-gray-500">Enter otp code</span>
                    </div>
                    <ReactCodeInput type='number' fields={6} inputStyle={defaultInputStyle} inputMode={"numeric"} name={"otp"}
                                    onChange={(value)=>setOtp(value)}/>
                </div>
                <div className={"w-full"}>
                    <button onClick={verifyOtp} className={"btn btn-primary text-base-100 w-full"}>Next</button>
                </div>
            </section>
        </main>
    );
};

export default OtpVerify;