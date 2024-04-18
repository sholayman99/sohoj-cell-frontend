import React, {lazy, Suspense, useEffect} from 'react';
import {adListByStatusRequest} from "../apiRequest/apiRequest.js";
import LazyMotion from "../layout/LazyMotion.jsx";
const AdListByStatus = lazy(()=>import("../components/dashboard/AdListByStatus.jsx"))

const PendingAdPage = () => {
    useEffect(() => {
        (async ()=>{
            await adListByStatusRequest(1,10,"Pending");
        })()
    }, []);

    return (
        <>
            <Suspense fallback={<LazyMotion/>}>
                <AdListByStatus />
            </Suspense>
        </>
    );
};

export default PendingAdPage;