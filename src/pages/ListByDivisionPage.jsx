import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {useParams} from "react-router-dom";
import {listByDivisionRequest} from "../apiRequest/apiRequest.js";
const ListAds = lazy(()=> import("../components/common/ListAds.jsx"))

const ListByDivisionPage = () => {

    const {divisionID} = useParams();

    useEffect(()=>{
        (async ()=>{
            await listByDivisionRequest(1,5,divisionID);
        })()
    },[divisionID])

    return (
        <>
         <Suspense fallback={<LazyMotion />}>
             <ListAds />
         </Suspense>
        </>
    );
};

export default ListByDivisionPage;