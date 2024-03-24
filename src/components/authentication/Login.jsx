import React from 'react';
import {FaAddressCard, FaSearchengin} from "react-icons/fa6";
import {PiCardsFill} from "react-icons/pi";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";

const Login = () => {
    return (
        <main className={"flex items-center h-screen justify-center"}>
            <div className={"flex items-start  justify-center gap-28"}>
                <section className={"hidden lg:flex flex-col gap-5"}>
                    <div>
                        <h3 className={"text-xl text-[#444141FF] font-semibold"}>Welcome to SohojCell</h3>
                        <p className={"text-gray-500"}>Login to manage Your account</p>
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

                <section className={"w-full max-w-sm"}>
                    <form className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered"
                                   required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-base-100">Login</button>
                        </div>
                        <p className={"mt-3"}>
                            By <Link className={"text-info font-semibold"} to={"/registration"}>signing up</Link> for an account you agree to our
                        </p>
                        <Link className={"text-info font-semibold"} to={"/"}> Terms and Conditions</Link>
                        <div className="divider divider-neutral"></div>
                        <div className={"flex justify-center hover:text-info items-center gap-2"}>
                            <span className={"text-xl"}><FaHome/></span>
                            <Link className={"text-lg hover:underline"} to={"/"}> Return Home</Link>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default Login;