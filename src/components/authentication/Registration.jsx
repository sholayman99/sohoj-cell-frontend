import React from 'react';
import {FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";
import {FaAddressCard, FaSearchengin} from "react-icons/fa6";
import {PiCardsFill} from "react-icons/pi";

const Registration = () => {
    return (
        <main className={"flex items-center h-screen justify-center"}>
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
                    <div>
                        <div className="divider divider-primary">OR</div>
                        <div className={"flex hover:text-info items-center justify-center gap-2"}>
                            <span className={"text-xl"}><FaHome/></span>
                            <Link className={"text-lg hover:underline"} to={"/"}> Return Home</Link>
                        </div>
                    </div>
                </section>
                <section className={"max-w-2xl  w-full"}>
                    <form className="card-body grid grid-cols-2 gap-5 p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="Enter your first name" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Enter your first name" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Enter your password" className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-base-100">Submit</button>
                        </div>
                    </form>
                    <p className={"mt-10"}>
                        By <Link className={"text-info font-semibold"} to={"/login"}>Login</Link> your
                        account you agree to our
                    </p>
                    <Link className={"text-info font-semibold"} to={"/"}> Terms and Conditions</Link>
                </section>
            </div>
        </main>
    );
};

export default Registration;