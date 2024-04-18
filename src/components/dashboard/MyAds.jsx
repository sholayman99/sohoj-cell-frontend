import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {FaEdit} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {FaEye} from "react-icons/fa6";
import {deleteAd} from "../../utility/deleteAlert.js";
import {allAdsRequest, userAdsRequest, userListRequest} from "../../apiRequest/apiRequest.js";
import {useNavigate} from "react-router-dom";
import ReactPaginate from "react-paginate";

const MyAds = () => {

    const userAds = useSelector((state)=>state.ads.userAd);
    const total = useSelector((state)=>state.ads.totalAd);
    const navigate = useNavigate();

    const seeDetails = (id) => {
      navigate(`/details/${id}`);
    }

    const handlePageClick = async (event)=>{
        await userAdsRequest(event.selected+1,10)
    }

   const removeItem = async (id)=>{
      let res = await deleteAd(id);
      if(res === true){
          await userAdsRequest(1,10);
          await allAdsRequest(1,5);
      }
   }

   const updateAd =async (id)=>{
        navigate(`/update-ad/${id}`);
   }


    return (
        <main>
            <h2 className={'text-2xl font-medium'}>Your Ads List</h2>
            <div className={"divider"}></div>
            <section className={" grid grid-cols-1 gap-5"}>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Created date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            userAds.map((item, i) => {
                                return (

                                    <tr key={i}>
                                        <th>
                                            <img src={item['image']} alt={item['productName']}
                                                 className={"lg:w-24 w-16"}/>
                                        </th>
                                        <td className={"font-semibold text-gray-600 text-[16px]"}>{item['productName']}</td>
                                        <td className={"font-light"}>{item['createdDate']}</td>
                                        <td>
                                            {
                                                item?.status === "Approved" ?
                                                    (<button disabled
                                                             className={"bg-green-100 font-medium p-2 rounded-full text-primary"}>
                                                        {item['status']}
                                                    </button>)
                                                    : item?.status === "Pending" ?
                                                        (<button disabled
                                                                 className={"bg-yellow-100 font-medium p-2 rounded-full text-orange-500"}>
                                                            {item['status']}
                                                        </button>)
                                                        :
                                                        <button disabled
                                                                className={"bg-red-100 font-medium p-2 rounded-full text-error"}>
                                                            {item['status']}
                                                        </button>
                                            }
                                        </td>
                                        <td className={"lg:text-2xl text-xl text-gray-600 flex items-center mt-3"}>
                                            <button onClick={() => updateAd(item['_id'])}
                                                    className={"hover:text-accent"}><FaEdit/></button>
                                            <button onClick={() => removeItem(item['_id'])}
                                                    className={"hover:text-error mx-2"}><MdDeleteForever/></button>
                                            <button className={"hover:text-primary"}
                                                    onClick={() => seeDetails(item['_id'])}><FaEye/></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="flex justify-center items-center lg:mt-8 mt-5">
                <ReactPaginate
                    pageCount={Math.ceil(total / 10)} onPageChange={handlePageClick} previousLabel={'<'} nextLabel={'>'}
                    breakLabel={'...'} marginPagesDisplayed={2} pageRangeDisplayed={5} containerClassName={'pagination'}
                    activeClassName={'active'} previousClassName={'prev'} nextClassName={'next'}
                    pageClassName={'page'}/>
            </section>
        </main>
    );
};

export default MyAds;