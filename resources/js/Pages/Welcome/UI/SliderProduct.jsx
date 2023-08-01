import React, { useState } from 'react'
import { ProductSliderData } from '../assets/Data/Data';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// import required modules
import { Navigation, Thumbs, FreeMode, Pagination } from "swiper";

import ImageZoom from 'react-image-zooom';
import { CloseWhite } from '../assets/Img/AllImages';

const SliderProduct = () => {

    const [imageZoom, setImageZoom] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [productSlider, setProductSlider] = useState(false);

    const zomImgHandler = () => {
        setImageZoom(!imageZoom);
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                pagination={{ clickable: true, }}
                modules={[Navigation, Thumbs, FreeMode, Pagination]}
                className="mySwiper productPageSlider"
            >
                {ProductSliderData.map((item, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <img src={item.SliderItem} alt="" onClick={zomImgHandler} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {ProductSliderData.map((item, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <img src={item.SliderItem} alt="" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            {imageZoom === true && (
                <>
                    <div className="zoomLayer">
                        <div className="closebtn">
                            <img src={CloseWhite} onClick={zomImgHandler} alt="" />
                        </div>
                        <Swiper
                            spaceBetween={0}
                            loop
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper3"
                        >
                            {ProductSliderData.map((item, key) => (
                                <SwiperSlide key={key}>
                                    <ImageZoom
                                        src={item.SliderItem}
                                    />
                                    {/* <img src={item.SliderItem} alt="" /> */}
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </>
            )}
        </>
    )
}

export default SliderProduct