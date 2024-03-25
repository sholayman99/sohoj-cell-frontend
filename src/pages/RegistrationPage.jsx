import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const Registration = lazy(()=>import("../components/authentication/Registration.jsx"))
const RegistrationPage = () => {
    return (
        <Suspense fallback={LazyMotion}>
           <Registration />
        </Suspense>
    );
};

export default RegistrationPage;