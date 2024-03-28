import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegistrationPage from "../pages/RegistrationPage.jsx";
import AllAdsPage from "../pages/AllAdsPage.jsx";
import PostYourAdPage from "../pages/PostYourAdPage.jsx";
import Dashboard from "../layout/Dashboard.jsx";
import ListByCategoryPage from "../pages/ListByCategoryPage.jsx";
import MyAdsPage from "../pages/MyAdsPage.jsx";
import MyAccountPage from "../pages/MyAccountPage.jsx";
import FavouritesPage from "../pages/FavouritesPage.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";



const routes = createBrowserRouter([
    {
        path:"/",
        element: <Main /> ,
        children:[
            {
                path:"/",
                element:<HomePage />
            },
            {
                path:"/login",
                element:<LoginPage />
            },
            {
                path:"/registration",
                element:<RegistrationPage />
            },
            {
                path:'/all-ads',
                element:<AllAdsPage />
            },
            {
                path:"/create-ad",
                element:<PostYourAdPage />
            },
            {
                path:"/list-by-category/:categoryID",
                element:<ListByCategoryPage />
            },
        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard />,
        children:[
            {
                path: "/dashboard/my-ad",
                element: <MyAdsPage />
            },
            {
                path:"/dashboard",
                element: <MyAccountPage />
            },
            {
                path:"/dashboard/favourites",
                element: <FavouritesPage />
            },
            {
                path:"/dashboard/settings",
                element: <SettingsPage />
            },
            {
                path:"/dashboard/my-ad",
                element: <MyAdsPage />
            },

        ]
    }
]);

export default routes