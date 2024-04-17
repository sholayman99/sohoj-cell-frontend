import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {adListByStatusRequest} from "../apiRequest/apiRequest.js";
const AdListByStatus = lazy(()=>import("../components/dashboard/AdListByStatus.jsx"))

const AdListByStatusPage = () => {

    useEffect(() => {
        (async ()=>{
            await adListByStatusRequest(1,5,"all");
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

export default AdListByStatusPage;