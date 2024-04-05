import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {useParams} from "react-router-dom";
import {adSearchByKeyword} from "../apiRequest/apiRequest.js";
const ListAds = lazy(()=>import("../components/common/ListAds.jsx"))

const ListByKeyword = () => {

    const {keyword} = useParams();


    useEffect(() => {
        (async ()=>{
           await adSearchByKeyword(1,5,keyword);
        })()
    }, [keyword]);

    return (
        <>
          <Suspense fallback={<LazyMotion />}>
              <ListAds />
          </Suspense>
        </>
    );
};

export default ListByKeyword;