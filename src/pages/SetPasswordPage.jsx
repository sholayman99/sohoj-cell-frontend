import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const ResetPassword = lazy(() => import("../components/authentication/ResetPassword.jsx"));


const SetPasswordPage = () => {
    return (
        <>
            <Suspense fallback={<LazyMotion />}>
              <ResetPassword/>
            </Suspense>
        </>
    );
};

export default SetPasswordPage;