import React from 'react';
import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes.jsx";
import axios from "axios";
import FullScreenLoader from "./layout/FullScreenLoader.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {
    axios.defaults.baseURL = 'http://localhost:5050/api/v1';
    return (
        <div className={"max-w-screen-2xl mx-auto"}>
          <RouterProvider router={routes}/>
            <Toaster position={"bottom-center"} />
            <FullScreenLoader />
        </div>
    );
};

export default App;