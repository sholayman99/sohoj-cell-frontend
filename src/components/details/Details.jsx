import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {CiShare2} from "react-icons/ci";
import {FaMessage, FaRegStar, FaSquarePhone} from "react-icons/fa6";
import {adToFavRequest} from "../../apiRequest/apiRequest.js";
import {Link, useNavigate} from "react-router-dom";
import safe from "../../assets/images/safe.png";
import {MdEmail} from "react-icons/md";
import {FaMobileAlt} from "react-icons/fa";
import {ImMail, ImMail4} from "react-icons/im";

const Details = () => {

    const details = useSelector((state)=>state.ads.details);

    const [showEmail,setShowEmail] = useState(false);
    const [showMobile,setShowMobile] = useState(false);

    const toggleShowEmail =()=>{
        setShowEmail(true)
    }

    const toggleCancelEmail=()=>{
        setShowEmail(false)
    }

    const toggleShowMobile =()=>{
        setShowMobile(true)
    }

    const toggleCancelMobile=()=>{
        setShowMobile(false)
    }

    const navigate = useNavigate();

    const adToFavourite =async ()=>{
        let postBody ={
            productID:details['_id']
        }

        let res = await adToFavRequest(postBody);
        if(res === true){
            navigate('/dashboard/favourites');
        }

    }

    return (
        <main className={"bg-base-300 lg:p-20"}>
            <div className={" bg-base-100 p-5 rounded-md flex flex-col gap-3.5"}>
                <section className={"flex items-center justify-between"}>
                    <div>
                        <h2 className={"lg:text-2xl md:text-2xl text-lg text-primary font-semibold"}>{details['productName']}<span
                            className={"text-neutral"}>({details['features']})</span></h2>
                        <p className={"text-gray-500 mt-2 lg:text-[16px]"}>Posted at {details['createdDate']}</p>
                    </div>

                    <div>
                        <button
                            className={"btn btn-ghost hover:btn-link hover:font-semibold hover:text-accent text-gray-600 text-[17px] font-light"}>
                            <CiShare2/>Share
                        </button>
                        <button onClick={adToFavourite}
                                className={"btn btn-ghost hover:btn-link hover:font-semibold hover:text-primary text-gray-600 text-[17px] font-light"}>
                            <FaRegStar/>Save ad
                        </button>
                    </div>
                </section>
                <div className={"flex gap-10"}>
                    <div className={"flex flex-col gap-3.5"}>
                        <section className={"max-w-3xl"}>
                            <img className={"lg:h-[70vh] w-full rounded-md"} src={details['image']}
                                 alt={details['productName']}/>
                        </section>

                        <section className={"flex flex-col gap-10 max-w-3xl"}>
                            <h2 className={"text-primary text-2xl font-bold"}>TK {details['price']} <span
                                className={"text-gray-500 font-normal text-xs"}>
                        {details['Negotiable'] === true ? (<i>
                            Negotiable
                        </i>) : (<i>Not Negotiable</i>)}
                    </span>
                            </h2>

                            <div>
                                <div className={" grid grid-cols-2"}>
                                    <p className={"text-gray-500 text-[16px]"}>Condition: <span
                                        className={"text-neutral"}>{details['condition']}</span></p>
                                    <p className={"text-gray-500 text-[16px]"}>Brand: <span
                                        className={"text-neutral"}>{details['brandName']}</span></p>
                                    <p className={"text-gray-500 text-[16px]"}>Model: <span
                                        className={"text-neutral"}>{details['model']}</span></p>
                                    <p className={"text-gray-500 text-[16px]"}>Authenticity: <span
                                        className={"text-neutral"}>{details['authenticity']}</span></p>
                                </div>

                                <div className={"mt-5"}>
                                    <h4 className={"font-semibold text-[16px]"}>Description:</h4>
                                    <p className={"text-gray-500"}> {details['description']}</p>
                                </div>
                            </div>

                        </section>

                    </div>

                    <section>

                        <div>
                            <h3 className={"text-xl font-semibold mb-3"}>Owner's details</h3>
                            <div className={"flex items-center gap-3 border px-5 py-2"}>
                                <p className={"text-4xl text-primary"}><ImMail/></p>
                                {
                                    showEmail ? (
                                        <div className={"flex flex-col gap-1 items-start"}>
                                            <p className={"text-lg font-semibold"}>Email seller</p>
                                            <button className={"bg-base-200 p-2 rounded-md font-medium"}
                                                    disabled={true}>{details['userEmail']}</button>
                                            <button onClick={toggleCancelEmail} className={"text-gray-500"}>Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className={"text-lg font-semibold"}>xxxxxxxx@gmail.com</p>
                                            <button onClick={toggleShowEmail} className={"text-gray-500"}>Click to show
                                                email
                                            </button>
                                        </div>
                                    )
                                }
                            </div>

                            <div className={"flex items-center gap-3 border px-5 py-2"}>
                                <p className={"text-4xl text-primary"}><FaSquarePhone/></p>
                                {
                                    showMobile ? (
                                        <div className={"flex flex-col gap-1 items-start"}>
                                            <p className={"text-lg font-semibold"}>Call seller</p>
                                            <button className={"bg-base-200 p-2 rounded-md font-medium"}
                                                    disabled={true}>{details['mobile']}</button>
                                            <button onClick={toggleCancelMobile} className={"text-gray-500"}>Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className={"text-lg font-semibold"}>01xxxxxxxxx</p>
                                            <button onClick={toggleShowMobile} className={"text-gray-500"}>Click to show
                                                phone number
                                            </button>
                                        </div>
                                    )
                                }
                            </div>


                        </div>

                        <div className={"border border-primary p-5"}>
                            <div className={"flex items-center gap-1"}>
                                <img className={"w-16 bg-none"} src={safe} alt={"safety"}/>
                                <h3 className={"text-[18px] font-semibold"}>Safety Tips</h3>
                            </div>
                            <ul className={"list-disc list-inside text-gray-500 mb-3"}>
                                <li>Meet in a safe & public place</li>
                                <li>Don’t pay in advance</li>
                            </ul>
                            <Link className={"text-accent"} to={"/"}>See all safety tips</Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Details;