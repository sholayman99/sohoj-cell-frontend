import React from 'react';
import {getUserInfo} from "../utility/sessionHelper.js";
import {Link} from "react-router-dom";
import {RiAlignBottom} from "react-icons/ri";

const MyAccountPage = () => {
    let userInfo = getUserInfo();
    return (
        <main>
           <h2 className={'text-xl font-semibold'}>{userInfo['fName']} {userInfo['lName']}</h2>
            <div className={"divider"}></div>
            <section className={"flex flex-col justify-center items-center gap-5 h-[50vh]"}>
               <h3 className={"text-xl font-semibold"}>You don't have any ads yet!</h3>
                <p className={"text-gray-500"}>Click the Post an ad now! button to post your ad.</p>
                <div className={"text-5xl text-secondary"}>
                    <RiAlignBottom />
                </div>
                <Link className={"btn btn-secondary text-orange-800"} to={"/create-ad"}>Post your ad now!</Link>
            </section>
        </main>
    );
};

export default MyAccountPage;