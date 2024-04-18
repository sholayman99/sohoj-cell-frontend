import React, {useEffect} from 'react';
import {categoryListRequest} from "../../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CategoryList = () => {

    useEffect(() => {
        (async ()=>{
           await categoryListRequest();
        })()
    }, []);

    const categoryList = useSelector((state)=>state.category.categoryList);

    return (
        <main className={"lg:px-20 md:p-10 p-5 lg:min-h-screen md:min-h-[60vh] flex items-center justify-center"}>
            <section className={"w-full flex flex-col gap-5"}>
                <h3 className={"font-semibold"}>Browse items by category</h3>
               <div className={"grid grid-flow-col md:grid-rows-4 lg:grid-rows-4 gap-24 md:gap-10 lg:gap-10 md:overflow-hidden lg:overflow-hidden overflow-scroll px-3 lg:px-8"}>
                   {
                       categoryList.map((item,i)=>{
                           return (
                               <Link to={`/list-by-category/${item['_id']}`} key={i} className={"flex items-center gap-2 mb-3 lg:mb-0 md:mb-0"}>
                                   <img className={"w-12"} src={item['image']} alt={item['categoryName']}/>
                                   <h3 className={"font-light md:text-[17px]  lg:text-[17px]"}>{item['categoryName']}</h3>
                               </Link>
                           )
                       })
                   }
               </div>
            </section>
        </main>
    );
};

export default CategoryList;