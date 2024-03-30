import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RiAlignBottom} from "react-icons/ri";
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";
import {MdDelete, MdDeleteForever} from "react-icons/md";
import {FaEye} from "react-icons/fa6";

const MyAds = () => {

    const userAds = useSelector((state)=>state.ads.userAd);
    const [isDisable,setIsDisable] = useState(true);

    const userDetails = useSelector((state)=>state.user.info);


    useEffect(() => {
        if(userDetails['role'] === "admin"){
            setIsDisable(false);
        }
        else {
            setIsDisable(true);
        }
    }, []);

    return (
        <main>
            <h2 className={'text-xl font-semibold'}>Your Ads List</h2>
            <div className={"divider"}></div>
            <section className={" grid grid-cols-1 gap-5"}>
                <div  className="overflow-x-auto">
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
                                        userAds.map((item,i)=>{
                                            return (

                                                  <tr key={i}>
                                                  <th>
                                                   <img src={item['image']} alt={item['productName']} className={"lg:w-24 w-16"}/>
                                                   </th>
                                                  <td className={"font-semibold text-gray-600 text-[16px]"}>{item['productName']}</td>
                                                  <td className={"font-light"}>{item['createdDate']}</td>
                                                 <td >
                                                     <button disabled={isDisable} className={"bg-sky-200 p-2 rounded-full text-accent"}>{item['status']}</button>
                                                 </td>
                                                <td className={"lg:text-2xl text-xl text-gray-600 flex items-center"}>
                                                    <button className={"hover:text-accent"}><FaEdit/></button>
                                                    <button className={"hover:text-error mx-2"}><MdDeleteForever/></button>
                                                    <button ><FaEye/></button>
                                                </td>
                                               </tr>
                                            )})
                                    }
                                    </tbody>
                                </table>
                            </div>
            </section>
        </main>
    );
};

export default MyAds;