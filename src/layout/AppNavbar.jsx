import {Link, useLocation} from "react-router-dom";
import {FaUser} from "react-icons/fa6";
import { Fade as Hamburger } from 'hamburger-react'
import {getCookie} from "../utility/sessionHelper.js";
import {useEffect, useState} from "react";

const AppNavbar = () => {

    const [bg,setBg] = useState("bg-primary");
    const path = useLocation();


    useEffect(()=>{
        if(path.pathname.includes("dashboard")){
            setBg("bg-accent")
        }
        else{
            setBg("bg-primary");
        }
    },[])

    const navList = (
        <>
            <li>
                <Link to={"/all-ads"} className={" text-[16px] font-semibold"}>All ads</Link>
            </li>
            <li>
                {
                    getCookie()?( <Link to={"/dashboard"}><span><FaUser/> </span> My account</Link>)
                        :
                        ( <Link to={"/login"}><span><FaUser/> </span> Login</Link>)
                }
            </li>
            <li>
                {
                    getCookie() ? <Link  className={"btn btn-secondary  text-sm md:text-md lg:text-lg" +
                            " uppercase text-orange-800"} to={"/create-ad"}> Post Your Add</Link>
                    :<span> </span>
                }
            </li>
        </>
    );

    return (
        <div className={`navbar ${bg} text-base-100 lg:px-20 md:px-10`}>
            <div className="navbar-start">
                <details className="dropdown md:hidden lg:hidden">
                    <summary className={`btn ${bg} text-base-100 border-none shadow-none`}>
                        <Hamburger size={20} rounded easing="ease-in"/>
                    </summary>
                    <ul className="p-3 ml-0  gap-3 shadow menu dropdown-content z-[1] bg-neutral w-52 rounded-box ">
                        {navList}
                    </ul>
                </details>
                <Link to={"/"} className="text-3xl text-secondary font-normal"><span
                    className={"font-bold text-base-100"}>Sohoj</span>sell</Link>
            </div>
            <div className="hidden lg:flex md:flex lg:navbar-end md:navbar-center">
                <ul className="menu menu-horizontal px-1 gap-8 md:gap-4 items-center">
                    {navList}
                </ul>
            </div>
        </div>
    );
};

export default AppNavbar;