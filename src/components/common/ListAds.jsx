import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Slider from "./Slider.jsx";
import {MdCategory} from "react-icons/md";
import { FaClipboardQuestion} from "react-icons/fa6";
import {
    adSearchByKeyword, allAdsRequest,
    categoryListRequest,
    districtListRequest,
    divisionListRequest, listByCategoryRequest, listByDivisionRequest,
} from "../../apiRequest/apiRequest.js";
import {Link, useParams} from "react-router-dom";
import dateFormat from "dateformat";
import ReactPaginate from "react-paginate";
import FilterAd from "../ad/FilterAd.jsx";

const ListAds = () => {

    const {keyword,categoryID,divisionID} = useParams();


    const handlePageClick = async (event)=>{
        if(keyword){
            await adSearchByKeyword(event.selected+1,5,keyword)
        }
        else if(categoryID){
            await listByCategoryRequest(event.selected+1,5,categoryID);
        }
        else if(divisionID){
            await listByDivisionRequest(event.selected+1,5,divisionID)
        }
        else{
            await allAdsRequest(event.selected+1,5)
        }
    }




    useEffect(() => {
        (async()=>{
            await categoryListRequest();
            await districtListRequest();
            await divisionListRequest();
        })()
    }, []);

    const listAds = useSelector((state)=>state.ads.listAd);
    const total = useSelector((state)=>state.ads.totalAd);


    return (
        <main className={"bg-base-200 lg:p-20"}>
            <div className={"bg-base-100 p-4 rounded-md"}>
                <section className={"flex items-center gap-24"}>
                    <div className={"flex lg:text-lg text-sm  font-semibold text-gray-700 items-center gap-1"}>
                        <FaClipboardQuestion/>
                        <h2>What are you looking for?</h2>
                    </div>
                    <div className={"flex lg:text-lg text-sm md:text-lg font-semibold text-gray-700 items-center gap-1"}>
                        <MdCategory/>
                        <h2>Select Category</h2>
                    </div>
                </section>
                <div className={"divider m-0"}></div>
                <section className={"flex flex-col md:flex-row lg:flex-row lg:items-start mt-5"}>
                   <FilterAd />
                    <div className="divider md:divider-horizontal lg:divider-horizontal m-0"></div>
                    <div className={"w-full max-w-2xl"}>
                        <h2 className={"text-lg font-semibold text-gray-700"}>Buy, Sell, Rent or Find Anything in
                            Bangladesh</h2>
                        <Slider/>
                                <div className={"grid grid-cols-1 gap-5"}>
                                    {
                                        listAds.length === 0 ?
                                            <div className={"flex flex-col items-center justify-center gap-3"}>
                                                <h2 className={"text-error font-semibold mt-10 text-2xl text-center"}>Sorry!No ads are available</h2>
                                                <p className={"text-6xl mb-0"}>&#128543;</p>
                                            </div>
                                            :
                                            listAds.map((item, i) => {
                                            return (
                                                <Link key={i} to={`/details/${item['_id']}`}
                                                      className={"flex items-start gap-5 border p-2 rounded-md border-secondary"}>
                                                    <img className={"lg:w-48 md:w-48 w-32"} src={item['image']} alt={""}/>
                                                    <div className="flex flex-col gap-1 w-full">
                                                        <h3 className={"text-2xl font-semibold"}>{item['productName']}
                                                        </h3>
                                                        <p className={"text-gray-600 font-semibold"}>{item['brandName']}</p>
                                                        <p className={"text-gray-600"}>{item?.['district']?.['districtName']},
                                                            {item?.['division']?.['divisionName']} at
                                                            <span
                                                                className={"text-[#000]"}> {dateFormat(item['createdAt'], "dddd, mmmm d, yyyy, h:MM:ss TT")}</span>
                                                        </p>
                                                        <h4 className={"text-lg text-primary font-semibold"}>TK {item['price']}</h4>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                    </div>
                </section>
                <section className="flex justify-center items-center lg:mt-8 mt-5">
                    <ReactPaginate
                        pageCount={Math.ceil(total / 5)}
                        onPageChange={handlePageClick}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        previousClassName={'prev'}
                        nextClassName={'next'}
                        pageClassName={'page'}
                    />
                </section>
            </div>
        </main>
    );
};

export default ListAds;