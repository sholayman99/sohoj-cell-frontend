import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegistrationPage from "../pages/RegistrationPage.jsx";


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
        ]
    }
]);

export default routes