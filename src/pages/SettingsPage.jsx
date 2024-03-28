import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {userInfoRequest} from "../apiRequest/apiRequest.js";
const Settings = lazy(()=>import("../components/dashboard/Settings.jsx"))


const SettingsPage = () => {

    useEffect(() => {
        (async ()=>{
            await userInfoRequest();
        })()
    }, []);

    return (
       <>
       <Suspense fallback={ <LazyMotion /> }>
           <Settings />
       </Suspense>
       </>
    );
};

export default SettingsPage;