import React, {useEffect} from 'react';
import {MdCategory, MdDashboard} from "react-icons/md";
import {FaBuysellads, FaUserGraduate} from "react-icons/fa6";
import {countRequest} from "../../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";
import DataChart from "./DataChart.jsx";
import DataAreaChart from "./DataAreaChart.jsx";
import DataPiChart from "./DataPiChart.jsx";

const DashBoard = () => {

    useEffect(() => {
        (async ()=>{
            await countRequest();
        })()
    }, []);

    const userCount = useSelector((state)=>state.user.userCount);
    const adsCount = useSelector((state)=>state.user.adsCount);
    const categoryCount = useSelector((state)=>state.user.categoryCount);


    return (
        <main>
            <div className={"flex items-center gap-1 text-2xl font-medium"}>
                <span><MdDashboard/></span>
                <h3>Dashboard</h3>
            </div>
            <div className={"divider"}></div>
            <div className={"flex flex-col gap-16"}>
                <section
                    className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-base-100 justify-between lg:px-10 md:px-3 px-1 items-center gap-5"}>
                    <div className={"flex items-center gap-3 bg-[#4ADDC0] p-5 rounded-md"}>
                        <span className={"lg:text-4xl text-2xl"}><FaUserGraduate/></span>
                        <div className={"text-xl font-medium"}>
                            <h2>{userCount}</h2>
                            <h2>Total Users</h2>
                        </div>
                    </div>

                    <div className={"flex items-center gap-3 bg-[#FFC167] p-5 rounded-md"}>
                        <span className={"lg:text-4xl text-2xl"}><FaBuysellads/></span>
                        <div className={"text-xl font-medium"}>
                            <h2>{adsCount}</h2>
                            <h2>Total Ads</h2>
                        </div>
                    </div>

                    <div className={"flex items-center gap-3 bg-[#FF7289] p-5 rounded-md"}>
                        <span className={"lg:text-4xl text-2xl"}><MdCategory/></span>
                        <div className={"text-xl font-medium"}>
                            <h2>{categoryCount}</h2>
                            <h2>Total Category</h2>
                        </div>
                    </div>
                </section>

                <section className={"grid lg:grid-cols-2 gap-8 lg:pr-10 md:pr-3 pr-1"}>
                    <DataChart/>
                    <DataAreaChart />
                    <DataPiChart />
                </section>
            </div>
        </main>
    );
};

export default DashBoard;