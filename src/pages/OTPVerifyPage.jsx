import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const OtpVerify = lazy(()=>import("../components/authentication/OtpVerify.jsx"))

const OtpVerifyPage = () => {
    return (
        <>
            <Suspense fallback={<LazyMotion />}>
                 <OtpVerify />
            </Suspense>
        </>
    );
};

export default OtpVerifyPage;