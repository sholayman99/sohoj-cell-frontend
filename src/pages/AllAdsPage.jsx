import React, {lazy, Suspense, useEffect} from 'react';
import {allAdsRequest} from "../apiRequest/apiRequest.js";
import LazyMotion from "../layout/LazyMotion.jsx";
const ListAds = lazy(()=>import("../components/common/ListAds.jsx"))

const AllAdsPage = () => {

    useEffect(() => {
        (async()=>{
            await allAdsRequest();
        })()
    }, []);

    return (
        <>
          <Suspense fallback={<LazyMotion />}>
              < ListAds />
          </Suspense>
        </>
    );
};

export default AllAdsPage;