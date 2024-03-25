import React from 'react';
import {FaSearch} from "react-icons/fa";

const Search = () => {
    return (
        <section className={"bg-primary lg:h-[30vh] h-[20vh] flex justify-center items-center"}>
            <label
                className="input focus:outline-none relative  rounded-full flex lg:h-16 md:h-16 h-14 w-[90%] md:w-[70%] lg:w-[60%] items-center gap-2">
                <input type="text" className="" placeholder="What are you looking for?"/>
                <button className="btn absolute right-2 btn-circle btn-secondary text-orange-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-7 h-7">
                        <path fillRule="evenodd"
                              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                              clipRule="evenodd"/>
                    </svg>
                </button>
            </label>
        </section>
    );
};

export default Search;