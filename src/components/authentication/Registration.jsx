import React, {useRef} from 'react';
import {FaHome} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {FaAddressCard, FaSearchengin} from "react-icons/fa6";
import {PiCardsFill} from "react-icons/pi";
import {errorMsg, isEmail, isEmpty, isMobile, isPassword} from "../../utility/formHelper.js";
import {registrationRequest} from "../../apiRequest/apiRequest.js";

const Registration = () => {

let emailRef,passRef,fullNameRef,mobileRef = useRef();
const navigate = useNavigate();

const onSubmit =async ()=>{
    let  email     =  emailRef.value;
    let  fullName =  fullNameRef.value;
    let  mobile    =  mobileRef.value;
    let  password  =  passRef.value;
    let photo = "data:image/jpeg;base64,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3KW+i6JqOsXDnCxafaSTsfwRSaQH0F8Nf+CdHx0+JDxMPCZ8M2j4JuvEUv2UKPUoA0n4bKLgfZ/wY/4JEeD/AA3Jb33xF1+58V3aEMdO08G1syfRm/1jj8V+lK4H3N4J8A+HPhxoMGjeGNEstC0yEYS2soFjX6nHU+pPJpAb+MUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAhGaAGPCsiFXAZSMEMMigDlNb+EPgfxLk6t4Q0PUWPVrrToZCfxK0Ac3J+yt8HJX3P8L/AAkzep0aD/4mgDQ0v9nj4X6LIr2Hw98MWjryGi0mBSP/AB2gDttP0ax0iLyrGzt7OLslvEqKPwAoAthcUAOoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/2Q=="
    if(isEmpty(fullName)){
        errorMsg("Full Name can't be empty!");
    }
    else if(!isMobile(mobile)){
        errorMsg("Provide a valid Bangladeshi number!");
    }
    else if(!isEmail(email)){
        errorMsg("Provide a valid email!")
    }
    else if(!isPassword(password)){
        errorMsg("Password must be 8 character long!")
    }
    else{
      let res = await registrationRequest(fullName,email,password,photo,mobile);
      if(res === true){
          navigate("/login");
      }
    }
}

    return (
        <main className={"flex items-center min-h-screen justify-center"}>
            <div className={"flex items-start justify-center gap-28"}>
                <section className={"hidden lg:flex flex-col gap-3"}>
                    <div>
                        <h3 className={"text-xl text-[#444141FF] font-semibold"}>Welcome to SohojCell</h3>
                        <p className={"text-gray-500 mt-3"}>Complete registration to get more access.</p>
                    </div>

                    <div className={"flex items-center text-gray-500 gap-2 mt-5"}>
                        <h3 className={"text-3xl text-info"}><FaAddressCard/></h3>
                        <h3>Start posting your own ads. </h3>
                    </div>
                    <div className={"flex items-center text-gray-500 gap-2 mt-2"}>
                        <h3 className={"text-4xl text-orange-600"}><FaSearchengin/></h3>
                        <h3>Mark ads as favorite and view them later. </h3>
                    </div>
                    <div className={"flex items-center text-gray-500 gap-2 mt-2"}>
                        <h3 className={"text-4xl text-info"}><PiCardsFill/></h3>
                        <h3>View and manage your ads at your convenience. </h3>
                    </div>
                </section>
                <section className={"max-w-2xl  w-full"}>
                    <form className="card-body grid lg:grid-cols-2 gap-2 p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input ref={( input)=> fullNameRef = input } type="text"
                                   placeholder="Enter your full name" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input ref={( input)=> mobileRef = input } type="text" placeholder="Enter your mobile number" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={( input)=> emailRef = input } type="text" placeholder="Enter your email" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={( input)=> passRef = input } type="text" placeholder="Enter your password" className="input input-bordered"
                                   required/>
                        </div>
                    </form>
                    <div className={"flex items-center justify-center  flex-col mt-8 gap-2"}>
                        <div className="form-control w-full max-w-xs">
                            <button onClick={onSubmit} className="btn btn-primary text-base-100">Submit</button>
                        </div>
                        <p>
                            By <Link className={"text-info font-semibold"} to={"/login"}>Login</Link> your
                            account you agree to our   <Link className={"text-info font-semibold"} to={"/"}> Terms and Conditions</Link>
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

export default Registration;