import React from 'react';
import {getCookie} from "../../utility/sessionHelper.js";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({Component}) => {

    const auth = getCookie();

    return auth ? < Component /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;