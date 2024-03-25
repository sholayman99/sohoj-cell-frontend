import React, {useEffect} from 'react';
import {categoryListRequest} from "../../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";

const CategoryList = () => {

    useEffect(() => {
        (async ()=>{
           await categoryListRequest();
        })()
    }, []);

    const categoryList = useSelector((state)=>state.category.categoryList);

    console.log(categoryList);

    return (
        <main className={"px-20 min-h-screen flex items-center justify-center"}>
            <section className={"w-full flex flex-col gap-5"}>
                <h3 className={"font-semibold"}>Browse items by category</h3>
               <div className={"grid grid-cols-4 gap-10 px-8"}>
                   {
                       categoryList.map((item,i)=>{
                           return (
                               <div key={i} className={"flex items-center gap-2"}>
                                   <img className={"w-12"} src={item['image']} alt={item['categoryName']}/>
                                   <h3 className={"font-light text-[17px]"}>{item['categoryName']}</h3>
                               </div>
                           )
                       })
                   }
               </div>
            </section>
        </main>
    );
};

export default CategoryList;