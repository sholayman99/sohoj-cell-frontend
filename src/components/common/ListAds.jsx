import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Slider from "./Slider.jsx";
import {MdCategory} from "react-icons/md";
import {FaClipboardQuestion} from "react-icons/fa6";
import {
    adListByFilter,
    categoryListRequest,
    districtListRequest,
    divisionListRequest,
} from "../../apiRequest/apiRequest.js";
import {Link} from "react-router-dom";

const ListAds = () => {

    const [filter,setFilter] = useState({categoryID:"",districtID:"",divisionID:""})

    const inputOnChange=async(key,value)=>{
        setFilter((data)=>({
            ...data,
            [key]:value
        }))
    }

    useEffect(() => {
        (async()=>{
            await categoryListRequest();
            await districtListRequest();
            await divisionListRequest();

            let isEveryFilterPropertyEmpty=Object.values(filter).every(value => value==="")
            !isEveryFilterPropertyEmpty? await adListByFilter(filter):<></>

        })()
    }, [filter]);

    const listAds = useSelector((state)=>state.ads.listAd);
    const categoryList = useSelector((state)=>state.category.categoryList);
    const districtList = useSelector((state)=>state.category.districtList);
    const divisionList = useSelector((state)=>state.category.divisionList);

    return (
        <main className={"bg-base-200 lg:p-20"}>
            <div className={"bg-base-100 p-4 rounded-md"}>
                <section className={"flex items-center gap-24"}>
                    <div className={"flex text-lg font-semibold text-gray-700 items-center gap-1"}>
                        <FaClipboardQuestion/>
                        <h2>What are you looking for?</h2>
                    </div>
                    <div className={"flex text-lg font-semibold text-gray-700 items-center gap-1"}>
                        <MdCategory/>
                        <h2>Select Category</h2>
                    </div>
                </section>
                <div className={"divider"}></div>
                <section className={"flex items-start"}>
                    <div className={"w-full max-w-xs flex flex-col gap-10"}>
                        <select className="select select-info w-full max-w-md"
                        onChange={(e)=>inputOnChange("categoryID",e.target.value)}>
                            <option disabled selected>Select Category</option>
                            {
                                categoryList.map((item, i) => {
                                    return (
                                        <option value={item['_id']} key={i}>{item['categoryName']}</option>
                                    )
                                })
                            }
                        </select>
                        <select className="select select-info w-full max-w-md"
                                onChange={(e)=>inputOnChange("districtID",e.target.value)}>
                            <option disabled selected>Select District</option>
                            {
                                districtList.map((item, i) => {
                                    return (
                                        <option value={item['_id']} key={i}>{item['districtName']}</option>
                                    )
                                })
                            }
                        </select>
                        <select className="select select-info w-full max-w-md"
                                onChange={(e)=>inputOnChange("divisionID",e.target.value)}>
                            <option disabled selected>Select Division</option>
                            {
                                divisionList.map((item, i) => {
                                    return (
                                        <option value={item['_id']} key={i}>{item['divisionName']}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className={"w-full max-w-2xl"}>
                        <h2 className={"text-lg font-semibold text-gray-700"}>Buy, Sell, Rent or Find Anything in Bangladesh</h2>
                        <Slider/>
                        <div className={"grid grid-cols-1 gap-5"}>
                            {
                                listAds.map((item,i)=>{
                                    return(
                                        <Link key={i} to={`/details/${item['_id']}`} className={"flex items-start gap-5 border p-2 rounded-md border-secondary"}>
                                            <img className={"w-48"} src={item['image']} alt={""} />
                                            <div className="flex flex-col gap-1">
                                                <h3 className={"text-2xl font-semibold"}>{item['productName']}
                                                    <span className={"text-sm text-gray-600 font-medium"}>({item['features']})</span>
                                                </h3>
                                                <p className={"text-gray-600 font-semibold"}>{item['brandName']}</p>
                                                <p className={"text-gray-600"}>{item?.['district']?.['districtName']},{item?.['division']?.['divisionName']}</p>
                                                <h4 className={"text-lg text-primary font-semibold"}>TK {item['price']}</h4>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ListAds;