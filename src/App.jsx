import React from 'react';
import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes.jsx";

const App = () => {
    return (
        <div className={"max-w-screen-2xl mx-auto"}>
          <RouterProvider router={routes}/>
        </div>
    );
};

export default App;