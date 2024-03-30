import React, {lazy, Suspense, useEffect} from 'react';
import {userAdsRequest, userInfoRequest} from "../apiRequest/apiRequest.js";
const MyAds = lazy(()=>import("../components/dashboard/MyAds.jsx"))

const MyAdsPage = () => {

    useEffect(() => {
        (async ()=>{
            await userAdsRequest();
            await userInfoRequest();
        })()
    }, []);

    return (
        <>
          <Suspense>
              <MyAds />
          </Suspense>
        </>
    );
};

export default MyAdsPage;