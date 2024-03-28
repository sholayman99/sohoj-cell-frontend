import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {useParams} from "react-router-dom";
import {listByCategoryRequest} from "../apiRequest/apiRequest.js";
const ListAds = lazy(()=>import("../components/common/ListAds.jsx"))
const ListByCategoryPage = () => {

    const {categoryID} = useParams();


    useEffect(() => {
        (async()=>{
            await listByCategoryRequest(categoryID);
        })()
    }, [categoryID]);

    return (
        <>
           <Suspense fallback={<LazyMotion />}>
               <ListAds />
           </Suspense>
        </>
    );
};

export default ListByCategoryPage;