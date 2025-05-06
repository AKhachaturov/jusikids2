import Image from "next/image";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import classNames from "classnames";
import NavigationBtn from "./NavigationBtn";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

function MainImage({images, curImageIndex, setCurImageIndex, setMainSwiper}){
    return (
       <div className=" relative lg:max-w-sm  xl:max-w-md flex items-center overflow-hidden ">

        <NavigationBtn className="prev absolute ml-4">
            <ChevronLeftIcon className="text-black"/>
        </NavigationBtn>

        <Swiper
        onSwiper={(swiper) => setMainSwiper(swiper)}
        navigation={
            { nextEl: ".next", prevEl: ".prev"}
        }
        onSlideChange={(swiper) => {
            setCurImageIndex(swiper.realIndex);
            }
        }
        slidesPerView={1}
        spaceBetween={10}
        
        initialSlide={curImageIndex}       
        modules={[Navigation]}
        className="">

            {images.map((image, index) => (
                <SwiperSlide key={index} className="object-cover object-center max-lg:bg-gray-200 ">
                    <Image className="max-lg:max-w-sm lg:rounded-xl block mx-auto "
                        src={image.url}
                        alt={`Main ${index}`}
                        width={1200}
                        height={1600} /> 
                </SwiperSlide>
                        ))}

        </Swiper>

        <NavigationBtn className="next absolute right-0 mr-4">
            <ChevronRightIcon className="text-black"/>
        </NavigationBtn>
       </div> 
    );
}

export default MainImage;