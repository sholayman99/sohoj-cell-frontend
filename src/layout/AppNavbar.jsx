import { Link } from "react-router-dom";
import {FaUser} from "react-icons/fa6";

const AppNavbar = () => {
    const navList = (
        <>
            <li>
                <Link to={"/"} className={" text-[16px] font-semibold"}>All ads</Link>
            </li>
            <li>
                <Link to={"/login"}><span><FaUser/> </span> Login</Link>
            </li>
            <li>
                <Link  className={"btn btn-secondary  text-[16px] uppercase text-orange-800"} to={"/login"}> Post Your Add</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-primary text-base-100 lg:px-20">
        <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                        {navList}
                    </ul>
                </div>
            <Link to={"/"} className="text-2xl font-normal"><span className={"font-bold text-secondary text-3xl"}>Sohoj</span>Cell</Link>
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