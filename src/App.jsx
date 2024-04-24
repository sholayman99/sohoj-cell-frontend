import React from 'react';
import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes.jsx";
import axios from "axios";
import FullScreenLoader from "./layout/FullScreenLoader.jsx";
import {Toaster} from "react-hot-toast";


const App = () => {
    axios.defaults.baseURL = 'https://sohoj-cell-backend.vercel.app/api/v1';

    axios.defaults.withCredentials = true


    return (
        <div className={"max-w-screen-2xl mx-auto"}>
          <RouterProvider router={routes}/>
            <Toaster position={"bottom-center"} />
            <FullScreenLoader />
        </div>
    );
};

export default App;