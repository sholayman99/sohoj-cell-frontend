import React, {useEffect} from 'react';
import AppNavbar from "./AppNavbar.jsx";
import Footer from "./Footer.jsx";
import {Link, Navigate, NavLink, Outlet} from "react-router-dom";
import {FaAngleRight} from "react-icons/fa6";
import {getCookie} from "../utility/sessionHelper.js";
import {userInfoRequest} from "../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";
import {MdAdminPanelSettings, MdManageAccounts} from "react-icons/md";


const Dashboard = () => {

    useEffect(() => {
        (async ()=>{
            await userInfoRequest()
        })()
    }, []);

    const userInfo = useSelector((state)=>state.user.info);

    return (
        <>
            <AppNavbar/>
              <main className={"bg-base-300 lg:p-20  p-5"}>
                  <div className={"bg-base-100 rounded-md p-5 flex flex-col lg:flex-row md:flex-row items-start  gap-10"}>
                      <section className={"flex flex-col items-start w-full max-w-[180px]"}>
                          <div className={"flex items-center gap-1"}>
                              <span className={"lg:text-4xl text-2xl text-primary"}><MdManageAccounts /> </span>
                              <h2 className={"lg:text-2xl text-xl"}>Account</h2>
                          </div>
                          <div className={"divider"}></div>
                          <div className={"w-full"}>
                              <ul className={"text-accent"}>
                                  <li>
                                      <NavLink className={({ isActive }) => isActive ? "flex items-center justify-between " +
                                          "text-[#000] font-semibold" : "flex items-center justify-between"} to={"/dashboard/my-account"}>
                                          <span>My account</span>
                                         <span className={"text-2xl"}> <FaAngleRight /></span>
                                      </NavLink>
                                  </li>
                                  <div className={"divider"}></div>
                                  <li>
                                      <NavLink className={({ isActive }) => isActive ? "flex items-center justify-between " +
                                          "text-[#000] font-semibold" : "flex items-center justify-between"} to={"/dashboard/favourites"}>
                                          <span>Favourites</span>
                                          <span className={"text-2xl"}> <FaAngleRight/></span></NavLink>
                                  </li>
                                  <div className={"divider"}></div>
                                  <li>
                                      <NavLink className={({ isActive }) => isActive ? "flex items-center justify-between " +
                                          "text-[#000] font-semibold" : "flex items-center justify-between"} to={"/dashboard/settings"}>
                                          <span>Settings</span>
                                          <span className={"text-2xl"}> <FaAngleRight/></span>
                                      </NavLink>
                                  </li>

                                  <div  className={"divider"}></div>

                                  <li>
                                      <NavLink className={({ isActive }) => isActive ? "flex items-center justify-between " +
                                          "text-[#000] font-semibold" : "flex items-center justify-between"} to={"/dashboard/my-ad"}>
                                          <span>My Ads</span>
                                          <span className={"text-2xl"}> <FaAngleRight/></span>
                                      </NavLink>
                                  </li>
                                  <div className={"divider"}></div>
                              </ul>
                              {
                                  userInfo['role'] ==="admin"?(
                                          <div>
                                              <div className={"flex items-center gap-1"}>
                                                  <span className={"lg:text-4xl text-2xl text-primary"}><MdAdminPanelSettings/></span>
                                                  <h2 className={"lg:text-2xl text-xl"}>Admin</h2>
                                              </div>
                                              <div className={"divider"}></div>
                                              <ul className={"text-accent"}>
                                                  <li>
                                                      <NavLink
                                                          className={({isActive}) => isActive ? "flex items-center justify-between " +
                                                              "text-[#000] font-semibold" : "flex items-center justify-between"}
                                                          to={`/dashboard/all/all`}>
                                                          <span>AdList</span>
                                                          <span className={"text-2xl"}> <FaAngleRight/></span>
                                                      </NavLink>
                                                  </li>
                                                  <div className={"divider"}></div>
                                                  <li>
                                                      <NavLink
                                                          className={({isActive}) => isActive ? "flex items-center justify-between " +
                                                              "text-[#000] font-semibold" : "flex items-center justify-between"}
                                                          to={"/dashboard/user-list"}>
                                                          <span>UserList</span>
                                                          <span className={"text-2xl"}> <FaAngleRight/></span>
                                                      </NavLink>
                                                  </li>
                                              </ul>
                                          </div>
                                      ) :
                                      (<> </>)
                              }
                          </div>
                      </section>
                      <section className={"w-full"}>
                          {
                              getCookie() === true ? <Outlet/> : <Navigate to={"/login"} replace/>
                          }
                      </section>
                  </div>
              </main>
            <Footer/>
        </>
    );
};

export default Dashboard;