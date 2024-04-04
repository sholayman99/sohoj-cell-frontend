import React from 'react';
import {useSelector} from "react-redux";
import {FaStar} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {favouriteListRequest, removeFavouriteRequest} from "../../apiRequest/apiRequest.js";

const Favourites = () => {

    const favouriteList = useSelector((state)=>state.ads.favourites);

    const removeFavourite = async (id)=>{
          let res = await removeFavouriteRequest(id);
          if(res === true){
              await favouriteListRequest();
          }
    }

    return (
        <main className={""}>
            <h3 className={"text-2xl font-medium"}>Favourites</h3>
            <div className={"divider"}></div>
            {
                favouriteList.length === 0 ? (
                    <section className={"flex items-center justify-center gap-10"}>
                        <div className={"text-[8rem] text-secondary"}>
                            <FaStar/>
                        </div>
                        <div className={"flex flex-col gap-5 items-center"}>
                            <h3 className={"text-lg font-semibold text-neutral"}>
                                You haven't marked any ads as favorite yet.
                            </h3>
                            <p className={"text-gray-500 text-[16px]"}>Click on the star symbol on any ad to save it as
                                a favorite.</p>
                            <p className={"text-gray-500 text-[16px]"}>Start to
                                <Link className={"link-accent"} to={"/all-ads"}> browse ads </Link>
                                to find ads you would like to favorite.</p>
                        </div>
                    </section>
                ) : (
                    <section className={"grid grid-rows-1 gap-5"}>
                        {
                            favouriteList.map((item, i) => {
                                return (
                                    <div key={i}
                                         className="flex justify-between px-4">

                                        <div className={"flex items-start gap-6"}>
                                            <figure>
                                                <img src={item?.['ad']?.['image']} className={"w-48"}
                                                     alt="Album"/>
                                            </figure>
                                            <div className="flex flex-col gap-1">
                                                <h2 className="text-2xl font-semibold">{item?.['ad']?.['productName']}
                                                    <span
                                                        className={"text-sm font-medium text-gray-600"}>({item?.['ad']?.['features']})</span>
                                                </h2>
                                                <p className={"text-gray-600 font-semibold"}>{item?.['ad']?.['brandName']}</p>
                                                <p className={"text-gray-500"}>{item?.['district']?.['districtName']},{item?.['division']?.['divisionName']}</p>
                                                <h3 className={"text-primary text-lg font-semibold"}>Tk {item?.['ad']?.['price']}</h3>
                                            </div>
                                        </div>

                                        <div className={"flex items-end justify-end"}>
                                            <button onClick={()=>removeFavourite(item['_id'])}
                                                className={"text-secondary btn bg-base-100 border-none hover:bg-base-100 p-0 font-normal text-[16px]"}>
                                                <FaStar/>Favourite
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className={"divider"}></div>
                    </section>
                )
            }
        </main>
    );
};

export default Favourites;