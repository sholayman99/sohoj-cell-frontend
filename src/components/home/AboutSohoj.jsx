import React, {useState} from 'react';
import {FaArrowTurnDown, FaArrowTurnUp} from "react-icons/fa6";

const AboutSohoj = () => {

    const [showFull,setShowFull] = useState(false);

    const toggleShowMore = ()=>{
        setShowFull(true);
    }

    const toggleShowLess =()=>{
        setShowFull(false);
    }

    return (
        <main className={"p-20"}>
            <h3 className={"text-[18px] text-gray-600 mb-5 font-semibold"}>About Bikroy, The Largest Marketplace in Bangladesh!</h3>
            {
                showFull ? (
                        <section className={"flex flex-col items-start  gap-6"}>
                            <div>
                                <p className={"text-gray-500"}>Bikroy is a platform on which you can buy and sell almost
                                    everything! We help people buy and sell vehicles,
                                    find properties, get jobs or recruit employees, buy and sell mobile phones, purchase
                                    electronic products, and
                                    much more. With more than 50 categories our solutions are built to be safe, smart, and
                                    convenient for our customers.</p>
                            </div>
                            <div className={"flex flex-col gap-4"}>
                                <h4 className={"text-[16px] text-gray-600 font-semibold"}>Buy, Sell, Rent, or Find Jobs in
                                    Bangladesh</h4>
                                <p className={"text-gray-500"}>
                                    Every month, hundreds of millions of people use Bikroy to find and sell mobiles, musical
                                    instruments, cars, houses,
                                    jobs, and more through classified ads. To sell new items or sell used items quickly,
                                    Bikroy offers Ad Promotion
                                    features.
                                </p>
                                <p className={"text-gray-500"}>
                                    Bikroy has an extensive collection of new and used goods, making it easier for users to
                                    quickly buy new items or buy
                                    used items at their desired location. To buy online, users easily can reach their
                                    desired products through filtering options.
                                </p>
                                <p className={"text-gray-500"}>
                                    For businesses, Bikroy has introduced the ‘Membership’ service, which helps them expand
                                    their businesses online. Members will
                                    have their virtual shop with a Bikroy URL with free promotions of their goods. With
                                    different membership categories, businesses can
                                    flourish as verified members and authorized dealers.
                                </p>
                                <p className={"text-gray-500"}>
                                    With millions of unique monthly visitors, thousands of interested buyers, and thousands
                                    of active dealers on our platform, Bikroy is the
                                    Largest Marketplace in Bangladesh.
                                </p>
                            </div>
                            <div className={"flex flex-col gap-4"}>
                                <h4 className={"text-[16px] text-gray-600 font-semibold"}>Benefits of Trading at Bikroy</h4>
                                <p className={"text-gray-500"}>At Bikroy, we make it so easy to connect people to buy, sell
                                    or rent goods and services as other classified sites.</p>
                                <ul className={"text-gray-500 list-disc list-inside flex flex-col gap-4"}>
                                    <li>Fast & Easy Experience: Navigated buying and selling experience in Bangladesh which
                                        is simpler, faster, and easier.
                                        Shop and sell on the go and get your desired products in just a few clicks.
                                    </li>
                                    <li>
                                        Post Ads Free: As a free classified website, we offer free ad posting features in
                                        many categories for the convenience of
                                        the users based on their locations.
                                    </li>
                                    <li>
                                        Safe & Secure Shopping: We have listed our verified members and authorized dealers
                                        to create a safe shopping experience for our users.
                                    </li>
                                </ul>
                            </div>
                            <button onClick={toggleShowLess}
                                    className={"btn bg-base-100 text-gray-600 border-none shadow-none hover:bg-base-100 font-light p-0"}>Show
                                Less <FaArrowTurnUp/></button>
                        </section>
                    )
                    :
                    (<section className={"flex flex-col gap-5 items-start"}>
                        <div>
                            <p className={"text-gray-500"}>Bikroy is a platform on which you can buy and sell almost
                                everything! We help people buy and sell vehicles,
                                find properties, get jobs or recruit employees, buy and sell mobile phones, purchase
                                electronic products, and
                                much more. With more than 50 categories our solutions are built to be safe, smart, and
                                convenient for our customers.</p>
                        </div>
                        <button onClick={toggleShowMore}
                            className={"btn bg-base-100 border-none text-gray-600 shadow-none hover:bg-base-100 font-light p-0"}>Show
                            More <FaArrowTurnDown/></button>
                    </section>)
            }
        </main>
    );
};

export default AboutSohoj;