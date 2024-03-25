import { Link } from "react-router-dom";
import {FaUser} from "react-icons/fa6";
import { Fade as Hamburger } from 'hamburger-react'
import {getToken} from "../utility/sessionHelper.js";

const AppNavbar = () => {
    const navList = (
        <>
            <li>
                <Link to={"/"} className={" text-[16px] font-semibold"}>All ads</Link>
            </li>
            <li>
                {
                    getToken()?( <Link to={"/dashboard"}><span><FaUser/> </span> My account</Link>)
                        :
                        ( <Link to={"/login"}><span><FaUser/> </span> Login</Link>)
                }
            </li>
            <li>
                <Link  className={"btn btn-secondary  text-[16px] uppercase text-orange-800"} to={"/login"}> Post Your Add</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-primary text-base-100 lg:px-20">
            <div className="navbar-start">
                <details className="dropdown lg:hidden">
                    <summary className="btn btn-primary text-base-100 border-none shadow-none">
                        <Hamburger size={20} rounded easing="ease-in"/>
                    </summary>
                    <ul className="p-3 ml-0  gap-2 shadow menu dropdown-content z-[1] bg-neutral w-52 rounded-box ">
                        {navList}
                    </ul>
                </details>
                <Link to={"/"} className="text-3xl text-secondary font-normal"><span
                    className={"font-bold text-base-100"}>Sohoj</span>Cell</Link>
            </div>
            <div className="hidden lg:flex navbar-end">
                <ul className="menu menu-horizontal px-1 gap-8 items-center">
                    {navList}
                </ul>
            </div>
        </div>
    );
};

export default AppNavbar;