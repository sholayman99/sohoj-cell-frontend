import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {
    categoryListRequest,
    districtListRequest,
    divisionListRequest,
    userInfoRequest
} from "../apiRequest/apiRequest.js";
const PostAd = lazy(()=>import("../components/postAd/PostAd.jsx"))
const PostYourAdPage = () => {

    useEffect(() => {
        (async()=>{
            await userInfoRequest();
            await categoryListRequest();
            await districtListRequest();
            await divisionListRequest();
        })()
    }, []);

    return (
        <>

        <Suspense fallback={<LazyMotion />}>
            <PostAd />
        </Suspense>

        </>
    );
};

export default PostYourAdPage;