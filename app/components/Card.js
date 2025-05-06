
import classNames from "classnames";
import PropTypes from "prop-types";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "./Image";

function Card({product}){
    return (
        <div className="flex mx-2 rounded-lg xl:rounded-xl shadow-md overflow-hidden md:flex-col md:max-w-sm"> 

            <Image loading="lazy"  src={product.images.find(img => img.priority === 1).url} alt={product.name}/>

            <div className="max-md:pb-2 pl-4 pr-2 md:px-2 md:py-3">
                <h2 className=' text-xl sm:text-2xl font-bold leading-5 md:leading-none  text-gray-700 line-clamp-2 max-w-full '>{product.name}</h2>
                <h5 className='mt-2 text-sm md:text-sm text-gray-400 tracking-wide'>{'Минимальный заказ: ' + product.minCount }</h5>
                <div className="flex flex-col mt-1">
                    <p className='text-gray-800 mb-2 text-2xl font-bold'>{product.price} &#8381;<span className='text-3xl font-normal'>/</span><span className='text-lg font-normal'>ед</span></p>
                    <button className=' bg-primary flex-1 max-w-sm text-center  py-2 rounded-xl text-md text-white tracking-wide font-bold shadow-md transition duration-100 ease-linear hover:bg-secondary-700 focus:border-none hover:cursor-pointer'>                       
                        Подробнее
                        <MagnifyingGlassIcon className='ml-1 w-5 inline'/>                       
                    </button>
                </div>
        
            </div>
        </div>
    );
}



export default Card;