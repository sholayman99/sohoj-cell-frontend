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
import DetailsPage from "../pages/DetailsPage.jsx";
import UpdateAdPage from "../pages/UpdateAdPage.jsx";
import ListByKeyword from "../pages/ListByKeyword.jsx";


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
            {
                path: "/details/:id",
                element: <DetailsPage />
            },
            {
                path: "/update-ad/:id",
                element: <UpdateAdPage />
            },
            {
                path: "/list-by-keyword/:keyword",
                element: <ListByKeyword />
            }

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
                path:"/dashboard/my-account",
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