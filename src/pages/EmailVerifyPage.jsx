import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const EmailVerify = lazy(()=>import("../components/authentication/EmailVerify.jsx"))

const EmailVerifyPage = () => {
    return (
        <>
          <Suspense fallback={<LazyMotion />}>
              <EmailVerify />
          </Suspense>
        </>
    );
};

export default EmailVerifyPage;