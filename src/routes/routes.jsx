import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegistrationPage from "../pages/RegistrationPage.jsx";
import AllAdsPage from "../pages/AllAdsPage.jsx";
import PostYourAdPage from "../pages/PostYourAdPage.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ListByCategoryPage from "../pages/ListByCategoryPage.jsx";
import YourAdPage from "../pages/YourAdPage.jsx";


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
                path:"/dashboard",
                element:<Dashboard />
            },
            {
                path:"/list-by-category/:categoryID",
                element:<ListByCategoryPage />
            },
            {
                path:"/your-ad",
                element:<YourAdPage />
            }
        ]
    }
]);

export default routes