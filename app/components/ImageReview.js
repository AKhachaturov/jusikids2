'use client';

import { useRef, useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropTypes from "prop-types";
import classNames from "classnames";
import NavigationBtn from "./NavigationBtn";
import ImagesGallary from "./ImagesGallary";
import MainImage from "./MainImage";

function ImageReview({images}){
    const [curImageIndex, setCurImageIndex] = useState(0);
    const [mainSwiper, setMainSwiper] = useState(null);

    function setCurIndex(index){
        setCurImageIndex(index);
    }


    return (
        <div className="flex max-lg:w-full items-center lg:mx-auto lg:pl-2 xl:mx-5 xl:gap-5 xl:max-w-xl">
            
            <ImagesGallary 
                images={images}
                curImageIndex={curImageIndex}
                setCurImageIndex={setCurIndex}
                mainSwiper={mainSwiper} />

            <MainImage
                images={images}
                curImageIndex={curImageIndex}
                setCurImageIndex={setCurIndex}
                setMainSwiper={(swiper) => setMainSwiper(swiper)}
                />

        
            
        </div>
    );
}

ImageReview.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ImageReview;