import React from 'react';
import {Link} from "react-router-dom";


const ComingSoon = () => {
    return (
        <main className={"bg-[#BBC4D9] p-2 text-center"}>
            <section className={"flex flex-col justify-center items-center min-h-screen w-full"}>
                <div className={"lg:max-w-5xl md:max-w-3xl max-w-full"}>
                    <h1 className={"text-[#333333] font-extrabold lg:text-6xl md:text-5xl text-3xl"}>Landing Soon</h1>
                    <p className={"my-5 text-gray-700"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book.
                    </p>
                    <Link to={"/"} className={"btn btn-accent rounded"}>Return Home</Link>
                </div>
            </section>
        </main>
    );
};

export default ComingSoon;