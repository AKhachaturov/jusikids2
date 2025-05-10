import Link from "next/link";
import ImageReview from "@/app/components/ImageReview";
import Record from "@/app/components/Record";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import { notFound } from "next/navigation";


// time to repeat request


export async function getProduct(id){
    try{
        const res = await fetch(`https://jusikids.ru/api/api/products/${Number(id)}`).then(res => res.json());
        return res;
    }catch(err){
        throw err;
    }
}

export async function generateMetadata({ params }) {
    const {id} = await params;
    try{
    const product = await getProduct(id);

    
    return {
        title: product.name,
        description: product.description
    
    }
    }catch(err){}
}

export default async function Product({params}){
    const {id} = await params;
    let product;
    try{
        product = await getProduct(id);
    }catch(err){
        return <p>{err.message}</p>
    }

    if(!product){
        return notFound();
    }
    return (    
        <div className=' flex flex-grow min-h-screen flex-col pt-2 sm:pt-10 2xl:mx-auto 2xl:max-w-[90rem]'>
            <div className=' flex flex-col lg:items-center lg:flex-row lg:gap-3'>
                <ImageReview images={product.images.sort((a, b) => a.priority - b.priority)} />
                <div className='lg:ml-auto lg:mr-4 xl:ml-10'>
                    <div className="justify-center shadow-md rounded-xl px-3 pt-2 pb-4 mx-2 mt-4">
                        <div className='mt-2 text-xs  max-w-[16rem] text-secondary-300 font-semibold rounded-md px-2 py-1 font-satoshi bg-secondary-100 tracking-wide'>
                            Возможность изготовления под заказ
                        </div>
                        <h5 className='mt-2 text-xs md:text-sm text-gray-400 tracking-wide'>{'Минимальный заказ: ' + product.minCount }</h5>
                        <h1 className='mt-3 text-2xl md:text-3xl font-bold leading-tight text-gray-800'>{product.name}</h1>
                
                        <h3 className='mt-5 text-lg md:text-xl font-semibold text-gray-700'>Основная информация</h3>
                        <div className='grid grid-cols-2 items-center gap-2 md:gap-4 mt-4 px-2 md:pb-3 '>
                            <Record left={'Цвет'} right={product.color} />
                            <Record left={'Количество предметов'} right={product.itemsCount} />
                            <Record left={'Материал'} right={product.material} />
                            <Record left={'Возрастные ограничения'} right={product.fromAge} />
                            <Record left={'Комплектация'} right={product.content} />
                            <Record left={'Страна производства'} right={product.country} />
                        </div>
                
                    </div>
                    <div className='flex gap-4 md:gap-8 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.13)] mx-2 py-3 px-3 mt-2 items-baseline'>
                        <span className='text-gray-900  text-3xl font-bold'>{product.price} &#8381;<span className='text-3xl font-normal'>/</span><span className='text-lg font-normal'>ед</span></span>
                        <Link href={`/delivery`} passHref className='bg-primary flex-1 max-w-xl gap-2 text-center items-center py-2 rounded-xl text-md text-white tracking-wide font-bold shadow-md transition duration-100 ease-linear hover:bg-secondary-700 focus:border-none hover:cursor-pointer'>
                            
                                Заказать
                                <ShoppingCartIcon className='ml-1 w-4 inline'/>
                            
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mt-8 ml-2'>
                <h2 className='text-2xl font-bold text-gray-800 px-3'>Характеристики</h2>
                <div className='grid grid-cols-2 items-center gap-4 mt-4 px-4 max-w-lg'>
                    <Record left={'Вес товара с упаковкой (г)'} right={product.weight} />
                    <Record left={'Длина упаковки'} right={product.length} />
                    <Record left={'Высота упаковки'} right={product.height} />
                    <Record left={'Ширина упаковки'} right={product.width} />
                </div>
            </div>
            <div className='mt-10 ml-2'>
                <h2 className='text-2xl font-bold text-gray-800 px-3'>Описание</h2>
                <p className='mt-2 px-4 leading-relaxed max-w-2xl 2xl:text-lg'>{product.description}</p>
            </div>
    
    
        </div>
        
    );
}