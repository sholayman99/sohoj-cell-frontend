import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
const Search = lazy(()=>import("../components/home/Search.jsx"))

const HomePage = () => {
    return (
      <>
          <Suspense fallback={LazyMotion}>
              <Search />
          </Suspense>
      </>
    );
};

export default HomePage;