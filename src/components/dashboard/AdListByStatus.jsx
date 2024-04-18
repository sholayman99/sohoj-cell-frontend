import React from 'react';
import {adListByStatusRequest} from "../../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";
import {FaEdit} from "react-icons/fa";
import dateFormat from "dateformat";
import {updateStatus} from "../../utility/updateStatus.js";
import {Link, useNavigate, useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";
const AdListByStatus = () => {
    const navigate = useNavigate();
    const adByStatus = useSelector((state)=>state.ads.adByStatus);
    const {status} = useParams();
    const total = useSelector((state)=>state.ads.totalAd);

    const updateAdStatus = async (id,status)=>{
       let res = await updateStatus(id,status);
       if(res === true){
           await adListByStatusRequest(1,10,status);
           navigate('/dashboard/all/all');
       }
       else {
           navigate('/dashboard/all/all');
       }
  }


    const handlePageClick = async (event)=>{
           if(status === "Pending"){
               await adListByStatusRequest(event.selected+1,5,"Pending")
           }
           else if(status === "Approved"){
               await adListByStatusRequest(event.selected+1,5,"Approved")
           }
           else if(status === "Canceled"){
               await adListByStatusRequest(event.selected+1,5,"Canceled")
           }
           else{
               await adListByStatusRequest(event.selected+1,5,"all")
           }
    }


    return (
        <main>
            <h2 className={'text-2xl font-medium'}>Ads List</h2>
            <div className={"divider"}></div>
            <section className={"flex justify-center items-center mb-5"}>
                <div className="join join-horizontal">
                    <Link to={"/dashboard/all/all"} className="join-item btn lg:btn-md md:btn-sm btn-xs" type="radio" name="options"
                          aria-label="All" >All </Link>
                    <div className={"divider divider-horizontal"}></div>
                    <Link to={"/dashboard/approved/Approved"} className="join-item btn lg:btn-md md:btn-sm btn-xs" type="radio" name="options"
                          aria-label="Approved" >Approved </Link>
                    <div className={"divider divider-horizontal"}></div>
                    <Link to={"/dashboard/pending/Pending"} className="join-item btn lg:btn-md md:btn-sm btn-xs" type="radio" name="options"
                          aria-label="Pending" >Pending </Link>
                    <div className={"divider divider-horizontal"}></div>
                    <Link to={"/dashboard/cancel/Canceled"} className="join-item btn lg:btn-md md:btn-sm btn-xs" type="radio" name="options"
                          aria-label="Canceled" >Canceled</Link>
                </div>
            </section>
            <section>
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
                            adByStatus.map((item, i) => {
                                return (

                                    <tr key={i}>
                                        <th>
                                            <img src={item['image']} alt={item?.['productName']}
                                                 className={"lg:w-24 w-16"}/>
                                        </th>
                                        <td className={"font-semibold text-gray-600 text-[16px]"}>{item['productName']}</td>
                                        <td className={"font-light"}>
                                            {dateFormat(item?.['createdDate'], "dddd, mmmm d, yyyy, h:MM:ss TT")}
                                        </td>
                                        <td>
                                            {
                                                item?.status === "Approved" ?
                                                    (<button
                                                        className={"bg-green-100 font-medium p-2 rounded-full text-primary"}>
                                                        {item['status']}
                                                    </button>)
                                                    : item?.status === "Pending" ? (<button
                                                        className={"bg-yellow-100 font-medium p-2 rounded-full text-orange-400"}>
                                                        {item['status']}
                                                    </button>) : (
                                                        <button
                                                            className={"bg-red-100 font-medium p-2 rounded-full text-error"}>
                                                            {item['status']}
                                                        </button>
                                                    )
                                            }
                                        </td>
                                        <td className={"text-gray-600 flex items-center mt-3"}>
                                            <button onClick={() => updateAdStatus(item['_id'], item['status'])}
                                                    className={" btn bg-base-100 p-0 border-none hover:bg-base-100 hover:text-accent"}>
                                                <FaEdit/>Update Status
                                            </button>
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
                    pageCount={Math.ceil(total / 10)} onPageChange={handlePageClick}
                    previousLabel={'<'} nextLabel={'>'} breakLabel={'...'}
                    marginPagesDisplayed={2} pageRangeDisplayed={5} containerClassName={'pagination'}
                    activeClassName={'active'} previousClassName={'prev'} nextClassName={'next'}
                    pageClassName={'page'} />
            </section>
        </main>

    );
};

export default AdListByStatus;