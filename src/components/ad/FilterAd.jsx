import React, {useState} from 'react';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const FilterAd = () => {
    const [show,setShow] = useState(true);
    const [showDivision,setShowDivision] = useState(true);

    const toggleCategory = ()=>{
        setShow(!show);
    }

    const toggleDivision = ()=>{
        setShowDivision(!showDivision);
    }


    const categoryList = useSelector((state)=>state.category.categoryList);
    const divisionList = useSelector((state)=>state.category.divisionList);

    return (
        <>
            <div className={"w-full lg:max-w-[20%] max-w-full flex flex-col gap-5"}>
                <div>
                    <div className={"flex items-center text-gray-500 justify-between mb-3"}>
                        <span className={"text-[14px]"}>Category</span>
                        <button className={"text-2xl"} onClick={toggleCategory}>
                            {
                                !show ? <MdOutlineKeyboardArrowDown/> : <MdOutlineKeyboardArrowUp/>
                            }
                        </button>
                    </div>
                    {
                        !show ? <></> :
                            <div>
                                <h3 className={"text-lg mb-3 font-medium"}>All Categories</h3>
                                <div className={"flex flex-row lg:flex-col md:flex-col overflow-scroll gap-10 lg:gap-3 md:gap-3 md:overflow-hidden" +
                                    " lg:overflow-hidden"}>
                                    {
                                        categoryList.map((item, i) => {
                                            return (
                                                <Link to={`/list-by-category/${item['_id']}`} key={i} className={"flex items-center gap-1 mb-3 lg:mb-0 md:mb-0"}>
                                                    <img className={"w-5"} src={item['image']} alt={""}/>
                                                    <p className={"text-accent font-light text-[16px]"}>{item['categoryName']}</p>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                    }
                </div>
                <div className={"w-full bg-base-300 h-[1px]"}></div>
                <div className={"mb-5 lg:mb-0 md:mb-0"}>
                    <div className={"flex items-center text-gray-500 justify-between mb-3"}>
                        <span className={"text-[14px]"}>Location</span>
                        <button className={"text-2xl"} onClick={toggleDivision}>
                            {
                                !showDivision ? <MdOutlineKeyboardArrowDown/> : <MdOutlineKeyboardArrowUp/>
                            }
                        </button>
                    </div>
                    {
                        !showDivision ? <></> :
                            <div>
                                <h3 className={"text-lg mb-3 font-medium"}>All of Bangladesh</h3>
                                <div className={"flex flex-row lg:flex-col md:flex-col overflow-scroll gap-10 lg:gap-3 md:gap-3 md:overflow-hidden " +
                                    "lg:overflow-hidden"}>
                                    {
                                        divisionList.map((item, i) => {
                                            return (
                                                <Link to={`/list-by-division/${item['_id']}`} key={i} className={"flex items-center gap-1 mb-3 lg:mb-0 md:mb-0"}>
                                                    <p className={"text-accent font-light text-[16px]"}>{item['divisionName']} division</p>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    );
};

export default FilterAd;