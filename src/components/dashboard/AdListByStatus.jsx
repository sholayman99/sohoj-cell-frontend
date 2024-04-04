import React from 'react';
import {adListByStatusRequest} from "../../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";
import {FaEdit} from "react-icons/fa";
import dateFormat from "dateformat";
import {updateStatus} from "../../utility/updateStatus.js";
import {useNavigate} from "react-router-dom";
const AdListByStatus = () => {

  const adByStatus = useSelector((state)=>state.ads.adByStatus);
  const navigate = useNavigate();

  const updateAdStatus = async (id,status)=>{
       let res = await updateStatus(id,status);
       if(res === true){
           await adListByStatusRequest("all");
           navigate('/dashboard/ad-list-byStatus')
       }
  }

    return (
        <main>
            <h2 className={'text-2xl font-medium'}>Ads List</h2>
            <div className={"divider"}></div>
            <section className={"flex justify-center items-center mb-5"}>
                <div className="join join-vertical md:join-horizontal lg:join-horizontal">
                    <input className="join-item btn" type="radio" name="options" aria-label="All"
                           onClick={async () => await adListByStatusRequest("all")}/>
                    <div className={"divider md:divider-horizontal lg:divider-horizontal"}></div>
                    <input className="join-item btn" type="radio" name="options" aria-label="Approved"
                           onClick={async () => await adListByStatusRequest("Approved")}/>
                    <div className={"divider md:divider-horizontal lg:divider-horizontal"}></div>
                    <input className="join-item btn" type="radio" name="options" aria-label="Pending"
                           onClick={async () => await adListByStatusRequest("Pending")}/>
                    <div className={"divider md:divider-horizontal lg:divider-horizontal"}></div>
                    <input className="join-item btn" type="radio" name="options" aria-label="Canceled"
                           onClick={async () => await adListByStatusRequest("Canceled")}/>
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
                                                    (<button className={"bg-green-100 font-medium p-2 rounded-full text-primary"}>
                                                        {item['status']}
                                                    </button>)
                                                    :item?.status === "Pending" ? (<button
                                                               className={"bg-yellow-100 font-medium p-2 rounded-full text-orange-400"}>
                                                        {item['status']}
                                                    </button>):(
                                                        <button
                                                            className={"bg-red-100 font-medium p-2 rounded-full text-error"}>
                                                            {item['status']}
                                                        </button>
                                                    )
                                            }
                                        </td>
                                        <td className={"text-gray-600 flex items-center mt-3"}>
                                            <button onClick={() => updateAdStatus(item['_id'],item['status'])}
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
        </main>

    );
};

export default AdListByStatus;