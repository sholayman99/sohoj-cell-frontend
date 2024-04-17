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
            <div className={"w-full lg:max-w-[20%] max-w-full flex flex-col gap-10"}>
                <div>
                    <div className={"flex items-center text-gray-500 justify-between mb-5"}>
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
                                <div className={"grid grid-cols-1 gap-3"}>
                                    {
                                        categoryList.map((item, i) => {
                                            return (
                                                <Link to={`/list-by-category/${item['_id']}`} key={i} className={"flex items-center gap-1"}>
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
                <div>
                    <div className={"flex items-center text-gray-500 justify-between mb-5"}>
                        <span className={"text-[14px]"}>Location</span>
                        <button className={"text-2xl"} onClick={toggleCategory}>
                            {
                                !toggleDivision ? <MdOutlineKeyboardArrowDown/> : <MdOutlineKeyboardArrowUp/>
                            }
                        </button>
                    </div>
                    {
                        !toggleDivision ? <></> :
                            <div>
                                <h3 className={"text-lg mb-3 font-medium"}>All of Bangladesh</h3>
                                <div className={"grid grid-cols-1 gap-3"}>
                                    {
                                        divisionList.map((item, i) => {
                                            return (
                                                <Link to={`/list-by-division/${item['_id']}`} key={i} className={"flex items-center gap-1"}>
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