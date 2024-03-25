import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const Search = lazy(()=>import("../components/home/Search.jsx"))
const CategoryList = lazy(()=> import("../components/home/CategoryList.jsx"));
const HomePage = () => {
    return (
      <>
          <Suspense fallback={LazyMotion}>
              <Search />
              <CategoryList />
          </Suspense>
      </>
    );
};

export default HomePage;