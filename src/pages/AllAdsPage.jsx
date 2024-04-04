import React, {lazy, Suspense, useEffect} from 'react';
import {allAdsRequest} from "../apiRequest/apiRequest.js";
import LazyMotion from "../layout/LazyMotion.jsx";
import {useParams} from "react-router-dom";
const ListAds = lazy(()=>import("../components/common/ListAds.jsx"))

const AllAdsPage = () => {

    useEffect(() => {
        (async()=>{
            await allAdsRequest(1,5);
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