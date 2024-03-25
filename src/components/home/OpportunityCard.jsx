import React from 'react';
import money from "../../assets/images/money.png";
import {FaChevronCircleRight, FaPlusCircle} from "react-icons/fa";


const OpportunityCard = () => {
    return (
        <main className={"px-20"}>
            <section className={"flex items-center justify-center gap-10 shadow-2xl p-5 rounded-lg"}>
                <div className={"flex max-w-xl w-full items-center"}>
                    <img className={"w-56"} src={money} alt={"Money"}/>
                    <div className={"flex flex-col gap-3"}>
                        <h2 className={"text-xl font-semibold"}>Start making money!</h2>
                        <p className={"text-gray-600"}>Do you have something to sell?
                            Post your first ad and start making money!</p>
                        <button className={"btn btn-secondary rounded-full w-52 text-orange-800"}><FaPlusCircle/>Post your ads for free
                        </button>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className={"flex flex-col gap-4 max-w-sm w-full  "}>
                    <h2 className={"text-2xl text-info font-bold"}>SohojCell <span className={"text-lg font-semibold"}>JOBS</span></h2>
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