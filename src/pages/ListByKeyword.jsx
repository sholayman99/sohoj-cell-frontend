import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const ListProduct = lazy(()=>import("../components/common/ListAds.jsx"))

const ListByKeyword = () => {
    return (
        <>
          <Suspense fallback={<LazyMotion />}>
              <ListProduct />
          </Suspense>
        </>
    );
};

export default ListByKeyword;