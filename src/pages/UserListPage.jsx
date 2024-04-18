import React, {lazy, Suspense, useEffect} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import {userListRequest} from "../apiRequest/apiRequest.js";
const UserList = lazy(()=>import("../components/dashboard/UserList.jsx"));

const UserListPage = () => {

    useEffect(() => {
        (async ()=>{
            await userListRequest(1,10);
        })()
    }, []);

    return (
        <>
         <Suspense fallback={<LazyMotion />}>
             <UserList />
         </Suspense>
        </>
    );
};

export default UserListPage;