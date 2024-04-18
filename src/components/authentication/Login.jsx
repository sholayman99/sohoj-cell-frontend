import React, {useRef, useState} from 'react';
import {FaAddressCard, FaEye, FaSearchengin} from "react-icons/fa6";
import {PiCardsFill} from "react-icons/pi";
import {Link, useNavigate} from "react-router-dom";
import {FaEyeSlash, FaHome} from "react-icons/fa";
import {errorMsg, isEmail,isPassword} from "../../utility/formHelper.js";
import {loginRequest} from "../../apiRequest/apiRequest.js";

const Login = () => {

    let emailRef,passRef = useRef();
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

    const onLogin = async ()=>{
        let  email     =  emailRef.value;
        let  password  =  passRef.value;

       if(!isEmail(email)){
            errorMsg("Provide a valid email!");
        }

        else if(!isPassword(password)){
            errorMsg("Password must be 8 character long!")
        }
        else{
            let res = await loginRequest(email,password);
            if(res === true){
                navigate("/");
            }
        }
    }

    return (
        <main className={"flex items-center h-screen justify-center"}>
            <div className={"flex items-start  justify-center gap-28"}>
                <section className={"hidden lg:flex flex-col gap-5"}>
                    <div>
                        <h3 className={"text-xl text-[#444141FF] font-semibold"}>Welcome to SohojCell</h3>
                        <p className={"text-gray-500 mt-3"}>Login to manage your account.</p>
                    </div>

                    <div className={"flex items-center text-gray-500 gap-2 mt-5"}>
                        <h3 className={"text-3xl text-info"}> <FaAddressCard/> </h3>
                        <h3>Start posting your own ads. </h3>
                    </div>
                    <div className={"flex items-center text-gray-500 gap-2 mt-2"}>
                        <h3 className={"text-4xl text-orange-600"}> <FaSearchengin/> </h3>
                        <h3>Mark ads as favorite and view them later. </h3>
                    </div>
                    <div className={"flex items-center text-gray-500 gap-2 mt-2"}>
                        <h3 className={"text-4xl text-info"}> <PiCardsFill/> </h3>
                        <h3>View and manage your ads at your convenience. </h3>
                    </div>
                </section>

                <section className={"w-full max-w-sm"}>
                    <div className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={(input) => emailRef = input}
                                   type="text" placeholder="Enter your email"
                                   className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={(input) => passRef = input} type={passwordType}
                                   placeholder="Enter your password"
                                   className="input input-bordered"
                                   required/>
                            <button className="btn btn-ghost btn-sm absolute right-1 top-11 "
                                    onClick={togglePassword}>
                                {passwordType === "password" ? <FaEyeSlash/> :
                                    <FaEye/>}
                            </button>
                            <label className="label">
                                <Link to={"/email-verify"} className="label-text-alt link link-hover">Forgot
                                    password?</Link>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={onLogin} className="btn btn-primary text-base-100">Login</button>
                    </div>
                    <div className={"flex items-center justify-center  flex-col mt-8 gap-2"}>
                        <p>
                            By <Link className={"text-info font-semibold"} to={"/registration"}>sign up </Link>
                            you agree to our <Link className={"text-info font-semibold"} to={"/"}> Terms and
                            Conditions</Link>
                        </p>
                        <div className={"divider"}></div>
                        <div className={"flex hover:text-info items-center justify-center gap-2"}>
                            <span className={"text-xl"}><FaHome/></span>
                            <Link className={"text-lg hover:underline"} to={"/"}> Return Home</Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;