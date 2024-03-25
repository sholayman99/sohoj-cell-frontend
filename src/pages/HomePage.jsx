import React, {lazy, Suspense} from 'react';
import LazyMotion from "../layout/LazyMotion.jsx";
import OpportunityCard from "../components/home/OpportunityCard.jsx";
const Search = lazy(()=>import("../components/home/Search.jsx"))
const CategoryList = lazy(()=> import("../components/home/CategoryList.jsx"));
const HomePage = () => {
    return (
      <>
          <Suspense fallback={LazyMotion}>
              <Search />
              <CategoryList />
              <OpportunityCard />
          </Suspense>
      </>
    );
};

export default HomePage;