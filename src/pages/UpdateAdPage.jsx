import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const UpdateAd = lazy(()=>import("../components/ad/UpdateAd.jsx"));
const UpdateAdPage = () => {

    return (
        <>
          <Suspense fallback={<LazyMotion />}>
              <UpdateAd/>
          </Suspense>
        </>
    );
};

export default UpdateAdPage;