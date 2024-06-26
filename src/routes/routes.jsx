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
import AllAdListByStatusPage from "../pages/AllAdListByStatusPage.jsx";
import PrivateRoute from "../components/route/PrivateRoute.jsx";
import DashBoard from "../components/dashboard/DashBoard.jsx";
import UserListPage from "../pages/UserListPage.jsx";
import ListByDivisionPage from "../pages/ListByDivisionPage.jsx";
import PendingAdPage from "../pages/PendingAdPage.jsx";
import ApprovedAdPage from "../pages/ApprovedAdPage.jsx";
import CanceledAdPage from "../pages/CanceledAdPage.jsx";
import EmailVerifyPage from "../pages/EmailVerifyPage.jsx";
import OTPVerifyPage from "../pages/OTPVerifyPage.jsx";
import SetPasswordPage from "../pages/SetPasswordPage.jsx";






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
                element: <PrivateRoute Component={PostYourAdPage} />
            },
            {
                path:"/list-by-category/:categoryID",
                element:<ListByCategoryPage />
            },
            {
                path: "/details/:id",
                element: <PrivateRoute Component={DetailsPage} />
            },
            {
                path: "/update-ad/:id",
                element: <PrivateRoute Component={UpdateAdPage} />
            },
            {
                path: "/list-by-keyword/:keyword",
                element: <ListByKeyword />
            },
            {
                path: "/list-by-division/:divisionID",
                element: <ListByDivisionPage />
            },
            {
                path: "/email-verify",
                element: <EmailVerifyPage />
            },
            {
                path: "/otp-verify",
                element: <OTPVerifyPage />
            },
            {
                path: "reset-password",
                element: <SetPasswordPage />
            }

        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute Component={Dashboard} />,
        children:[
            {
               path: "/dashboard",
               element: <DashBoard />
            },
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
            {
                path: "/dashboard/all/:status",
                element: <AllAdListByStatusPage />
            },
            {
                path: "/dashboard/pending/:status",
                element: <PendingAdPage />
            },
            {
                path: "/dashboard/approved/:status",
                element: <ApprovedAdPage />
            },
            {
                path: "/dashboard/cancel/:status",
                element: <CanceledAdPage />
            },
            {
                path: "/dashboard/user-list",
                element: <UserListPage />
            },

        ]
    }
]);

export default routes