import React from 'react';
import {FaSearch} from "react-icons/fa";

const Search = () => {
    return (
        <section className={"bg-primary h-[30vh] flex justify-center items-center"}>
            <label className="input focus:outline-none relative  rounded-full flex h-16  w-[60%] items-center gap-2">
                <input type="text" className="" placeholder="What are you looking for?"/>
                <button className={"btn btn-secondary text-xl  text-orange-800 absolute right-2 rounded-full"}>
                  <FaSearch />
                </button>
            </label>
        </section>
    );
};

export default Search;