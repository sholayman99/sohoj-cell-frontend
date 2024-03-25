import React from 'react';
import AppNavbar from "./AppNavbar.jsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./Footer.jsx";

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') ||
        location.pathname.includes('registration') || location.pathname.includes('update-profile');

    return (
        <div>
            {noHeaderFooter ||  <AppNavbar />}
           <Outlet />
            {noHeaderFooter ||  <Footer />}
        </div>
    );
};

export default Main;