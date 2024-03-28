import React from 'react';
import AppNavbar from "./AppNavbar.jsx";
import Footer from "./Footer.jsx";
import {Link, Outlet} from "react-router-dom";
import {FaAngleRight} from "react-icons/fa6";


const Dashboard = () => {
    return (
        <>
            <AppNavbar/>
              <main className={"bg-base-200 lg:p-20  p-5"}>
                  <div className={"bg-base-100 rounded-md p-5 flex flex-col lg:flex-row md:flex-row items-start  gap-10"}>
                      <section className={"flex flex-col items-start w-full max-w-[150px]"}>
                          <h2 className={"text-2xl font-light"}>Account</h2>
                          <div className={"divider"}></div>
                          <div className={"w-full"}>
                              <ul className={"text-accent"}>
                                  <li>
                                      <Link className={"flex items-center justify-between"} to={"/dashboard"}>
                                          <span>My account</span>
                                         <span className={"text-2xl text-gray-500"}> <FaAngleRight /></span>
                                      </Link>
                                  </li>
                                  <div className={"divider"}></div>
                                  <li>
                                      <Link className={"flex items-center justify-between"} to={"/dashboard/favourites"}>
                                          <span>Favourites</span>
                                          <span className={"text-2xl text-gray-500"}> <FaAngleRight/></span></Link>
                                  </li>
                                  <div className={"divider"}></div>
                                  <li>
                                      <Link className={"flex items-center justify-between"} to={"/dashboard/settings"}>
                                          <span>Settings</span>
                                          <span className={"text-2xl text-gray-500"}> <FaAngleRight/></span>
                                      </Link>
                                  </li>

                                  <div  className={"divider"}></div>

                                  <li>
                                      <Link className={"flex items-center justify-between"} to={"/dashboard/my-ad"}>
                                          <span>My Ads</span>
                                          <span className={"text-2xl text-gray-500"}> <FaAngleRight/></span>
                                      </Link>
                                  </li>
                                  <div className={"divider"}></div>
                              </ul>
                          </div>
                      </section>
                      <section className={"w-full"}>
                          <Outlet />
                      </section>
                  </div>
              </main>
            <Footer/>
        </>
    );
};

export default Dashboard;