import Image from "next/image";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import classNames from "classnames";
import NavigationBtn from "./NavigationBtn";


function ImagesGallary({images, curImageIndex, setCurImageIndex, mainSwiper}){
    

    return (
        <div className=" max-xl:hidden flex flex-col space-y-4 items-center">
            {images.map((image, index) =>(
                <Image alt="" src={image.url} key={index} width={1200} height={1600}
                    onClick={() => {
                        mainSwiper?.slideTo(index);
                    }}
                    className= {classNames(
                        index === curImageIndex ? "border-2 border-black" : "",
                        " md:w-[4rem] xl:w-[6rem] rounded-lg object-cover hover:outline-2 hover:outline-black hover:cursor-pointer")} />
            ))}
        </div>
            

    );
}

export default ImagesGallary;