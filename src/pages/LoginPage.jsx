import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const Login = lazy(()=>import("../components/authentication/Login.jsx"));

const LoginPage = () => {
    return (
        <>
            <Suspense fallback={<LazyMotion/>}>
                <Login/>
            </Suspense>
        </>
    );
};

export default LoginPage;