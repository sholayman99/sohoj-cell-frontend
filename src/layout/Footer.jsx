import React from 'react';
import apple from "../assets/images/apple.png";
import google from "../assets/images/google.png";
import {FaFacebookSquare} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" px-20 py-5 bg-base-100 border-t-2 border-primary text-base-content">
            <section className={"footer"}>
                <aside className={"flex flex-col gap-5"}>
                    <h3 className={"text-gray-700 font-semibold"}>Download our app</h3>
                    <div className={"flex items-center gap-1"}>
                        <img className={"w-28"} src={google} alt={"google"}/>
                        <img className={"w-28"} src={apple} alt={"apple"}/>
                    </div>
                    <Link to={"/"} className={"flex items-center gap-2 font-semibold text-sky-700"}>
                        <span><FaFacebookSquare/></span>
                        <h3>Like us on Facebook</h3>
                    </Link>
                    <div>
                        <h3 className={"text-gray-700 font-semibold"}>Other Countries</h3>
                        <p className={"text-info"}>Sri Lanka</p>
                    </div>
                </aside>
                <nav>
                    <h6 className={"text-gray-700 font-semibold"}>More from SohojCell</h6>
                    <a className="link link-info link-hover">Sell Fast</a>
                    <a className="link link-info link-hover">Membership</a>
                    <a className="link link-info link-hover">Banner Ads</a>
                    <a className="link link-info link-hover">Ads Promotion</a>
                    <a className="link link-info link-hover">Bikes Guides</a>
                </nav>
                <nav>
                    <h6 className={"text-gray-700 font-semibold"}>Help & Support</h6>
                    <a className="link link-info link-hover">Faq</a>
                    <a className="link link-info link-hover">Stay Safe</a>
                    <a className="link link-info link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className={"text-gray-700 font-semibold"}>Follow SohojCell</h6>
                    <a className="link link-info link-hover">Blog</a>
                    <a className="link link-info link-hover">Facebook</a>
                    <a className="link link-info link-hover">Twitter</a>
                    <a className="link link-info link-hover">Youtube</a>
                </nav>
                <nav>
                    <h6 className={"text-gray-700 font-semibold"}>About SohojCell</h6>
                    <a className="link link-info link-hover">About Us</a>
                    <a className="link link-info link-hover">Careers</a>
                    <a className="link link-info link-hover">Terms & Conditions</a>
                    <a className="link link-info link-hover">Privacy Policy</a>
                    <a className="link link-info link-hover">Sitemap</a>
                </nav>
                <div className={"divider"}></div>
            </section>
            <div className={"divider"}></div>
            <section className="flex items-center justify-between pb-4 bg-base-100">
                <aside>
                    <p>Copyright © 2024 - Ostad</p>
                </aside>
                <div>
                    <h1 className={"font-semibold text-2xl"}>Sohojsell</h1>
                </div>
            </section>
        </footer>
    );
};

export default Footer;