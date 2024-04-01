import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {useParams} from "react-router-dom";
import {adDetailsRequest} from "../apiRequest/apiRequest.js";
const Details = lazy(()=>import("../components/details/Details.jsx"))

const DetailsPage = () => {

    const {id} = useParams();

    useEffect(() => {
        (async ()=>{
            await adDetailsRequest(id);
        })()
    }, [id]);

    return (
        <>
         <Suspense fallback={<LazyMotion />}>
            <Details />
         </Suspense>
        </>
    );
};

export default DetailsPage;