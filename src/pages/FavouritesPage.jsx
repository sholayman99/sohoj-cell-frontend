import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {favouriteListRequest} from "../apiRequest/apiRequest.js";
const Favourites = lazy(()=>import("../components/dashboard/Favourites.jsx"))
const FavouritesPage = () => {

    useEffect(() => {
        (async ()=>{
            await favouriteListRequest();
        })()
    }, []);

    return (
        <>
          <Suspense fallback={<LazyMotion/>}>
             <Favourites />
          </Suspense>
        </>
    );
};

export default FavouritesPage;