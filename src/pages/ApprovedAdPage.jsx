import React, {lazy, Suspense, useEffect} from 'react';
import {adListByStatusRequest} from "../apiRequest/apiRequest.js";
import LazyMotion from "../layout/LazyMotion.jsx";
const AdListByStatus = lazy(()=>import("../components/dashboard/AdListByStatus.jsx"))

const ApprovedAdPage = () => {
    useEffect(() => {
        (async ()=>{
            await adListByStatusRequest(1,10,"Approved");
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

export default ApprovedAdPage;