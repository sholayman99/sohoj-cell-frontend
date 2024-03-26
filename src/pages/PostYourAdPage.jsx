import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const PostAd = lazy(()=>import("../components/postAd/PostAd.jsx"))
const PostYourAdPage = () => {
    return (
        <>
        <Suspense fallback={LazyMotion}>
            <PostAd />
        </Suspense>
        </>
    );
};

export default PostYourAdPage;