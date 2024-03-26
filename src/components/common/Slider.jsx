import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Keyboard, Navigation,Autoplay} from 'swiper/modules';
import {sliderListRequest} from "../../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";

const Slider = () => {

    useEffect(() => {
        (async()=>{
            await sliderListRequest();
        })()
    }, []);

    const sliderList = useSelector((state)=>state.sliders.value);



    return (
        <section className={"my-5"}>
            <Swiper
                pagination={{clickable: true}}  grabCursor={true} keyboard={{enabled: true}}
                navigation={true} modules={[Pagination,Autoplay,Navigation,Keyboard]}
                loop={true}  slidesPerView={1} spaceBetween={30} className="mySwiper"
                style={{
                    '--swiper-navigation-color': '#000',
                    '--swiper-pagination-color': '#000',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}>
                {
                    sliderList.map((item,i)=>{
                        return(
                            <SwiperSlide key={i}>
                                <img src={item['image']} className={""} alt={""} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Slider;