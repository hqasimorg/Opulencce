import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// import required modules
import { Navigation, Thumbs, FreeMode, Pagination } from "swiper";
import { SliderData } from '../assets/Data/Data';




const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                pagination={{ clickable: true, }}
                modules={[Navigation, Thumbs, FreeMode, Pagination]}
                className="mySwiper homePageSlider"
            >
                {SliderData.map((item, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <img src={item.SliderItem} alt="" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default Slider