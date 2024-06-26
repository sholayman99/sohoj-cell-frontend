import React from 'react';
import money from "../../assets/images/money.png";
import {FaChevronCircleRight, FaPlusCircle} from "react-icons/fa";


const OpportunityCard = () => {
    return (
        <main className={"lg:px-20 lg:py-10 md:p-10 p-5"}>
            <section className={"flex flex-col lg:flex-row items-center justify-center gap-16 shadow-md py-10 rounded-lg"}>
                <div className={"flex max-w-lg w-full items-start"}>
                    <img className={"lg:w-48 w-28 md:w-48 "} src={money} alt={"Money"}/>
                    <div className={"flex flex-col gap-3"}>
                        <h2 className={"lg:text-xl md:text-xl text-lg font-semibold"}>Start making money!</h2>
                        <p className={"text-gray-600"}>Do you have something to sell?
                            Post your first ad and start making money!</p>
                        <button className={"btn btn-secondary rounded-full w-52 text-orange-800"}><FaPlusCircle/>Post your ads for free
                        </button>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className={"flex flex-col gap-4 max-w-sm w-full  "}>
                    <h2 className={"text-2xl text-info font-bold"}>SohojSell <span className={"text-lg font-semibold"}>JOBS</span></h2>
                    <p className={"text-gray-600"}>Looking to hire or get hired in Bangladesh ?
                        Get access to 800k+ CVs or browse through 800+ job vacancies!</p>
                    <button className={"btn btn-info rounded-full w-52 text-base-100"}>
                        Explore More <FaChevronCircleRight />
                    </button>
                </div>
            </section>
        </main>
    );
};

export default OpportunityCard;