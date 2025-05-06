import Image from "next/image";
import bg3 from "./images/bg3.jpg";
import bg5 from "./images/bg5.png";
import bg6 from "./images/bg6.png";
import review1 from "./images/review1.png";
import review2 from "./images/review2.png";
import review3 from "./images/review3.png";
import review4 from "./images/review4.png";
import review5 from "./images/review5.png";
import review6 from "./images/review6.png";
import review7 from "./images/review7.png";
import review8 from "./images/review8.png";
import review9 from "./images/review9.png";
import WB from "./images/WB.png";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Head from "next/head";


const MainText = (props) => (
  <h1 className="text-5xl xl:text-6xl text-black leading-tight font-bold font-satoshi">{props.children}</h1>
);

const HeadText = (props) => (
  <h2 className="text-4xl text-black leading-tight font-bold font-satoshi">{props.children}</h2>
);

export default function Home() {
  return (
    <>
    <Head>
      <title>JusiKids - Товары для детей оптом</title>
      <meta name="description" content="Оптовый магазин товаров для детей и малышей, производство наборов для кормления малышей, производство нагрудников для кормления, производство пластмассовой посуды, детские товары" />
    </Head>
    <div className="flex-grow min-h-screen ">
            <div className="overflow-hidden 2xl:max-w-[94rem] 2xl:mx-auto">
                <div className="pt-20 lg:pt-40 px-5 mx-auto md:px-10 flex flex-col md:flex-row">
                    <div className="z-10">
                        <MainText><span className="text-primary">Оптовый магазин</span> товаров для детей</MainText>
                        <p className="mt-10 text-xl max-w-xl 2xl:text-2xl">JusiKids – Российская компания, занимающаяся производством товаров для детей и их оптовой продажей.  Вот уже более 5 лет мы стремимся делать нашу продукцию не только качественной, но и доступной.</p>
                        
                    </div>
                    <Image src={bg3} alt="bg-picture1" className="max-w-3xl object-cover md:max-w-xl lg:max-w-3xl lg:-mt-10 xl:max-w-4xl 2xl:max-w-6xl xl:-mt-20 max-2xl:-mr-44 2xl:-mr-40"/>
                </div>
                <div className="mt-10 px-5 md:px-10 md:mt-32">
                    <HeadText><span className="text-primary">Почему</span> JusiKids - <span className="text-primary">лучший</span> выбор?</HeadText>
                    <div className="z-10 grid grid-cols-1 mt-14 max-md:space-y-10 md:grid-cols-3 gap-x-8">
                        <div>
                            <div className="font-satoshi text-4xl font-bold text-gray-800">1<span className="text-primary">.</span></div>
                            <h2 className="text-3xl text-primary font-satoshi font-semibold mt-8">Высокое качество</h2>
                            <p className="text-xl text-black mt-4">Каждый из наших товаров сделан из материала высокого качества. Например, наши нагрудники сделаны из водоотталкивающего материала, благодаря чему нагрудник не будет промокать, а ребенок будет комфортно себя чувствовать.</p>
                        </div>
                        <div>
                            <div className="font-satoshi text-4xl font-bold text-gray-800">2<span className="text-primary">.</span></div>
                            <h2 className="text-3xl text-primary font-satoshi font-semibold mt-8">Доступная цена</h2>
                            <p className="text-xl text-black mt-4">Покупая товары от JusiKids, вы выбираете лучшее соотношение цены и качества. Цель нашей компании в том, чтобы наш товар стал доступным для всех. Кроме того, цена на товары может снижаться по мере роста размера заказа.</p>
                        </div>
                        <div>
                            <div className="font-satoshi text-4xl font-bold text-gray-800">3<span className="text-primary">.</span></div>
                            <h2 className="text-3xl text-primary font-satoshi font-semibold mt-8">Уникальный дизайн</h2>
                            <p className="text-xl text-black mt-4">Наши продукты обладают привлекательным дизайном, который порадует как детей, так и их родителей. Например, у поильников, которые входят в комплектующие наших наборов, имеется 3D рисунок, а сами наборы имеют огромный выбор цветов как для девочек, так и для мальчиков.</p>
                        </div>
                    </div>
                    <Image src={bg5} alt="bg-picture2" className="max-w-2xl sm:max-w-3xl 2xl:max-w-5xl max-2xl:-ml-36 2xl:-ml-20"/>
                </div>
                <div className="px-5 mt-4 md:px-10 ">
                    <HeadText><span className="text-primary">Товары</span> от JusiKids популярны <span className="text-primary">на маркетплейсах</span></HeadText>
                    <div className="mt-10">
                        <a href="https://www.wildberries.ru/brands/310982630-jusi-kids" ><Image className="w-[30rem] mx-auto" src={WB} alt="wb"/></a>
                        <div className="text-sm text-gray-500 mx-auto max-w-md">(Нажмите на иконку, чтобы перейти на страницу магазина)</div>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-between sm:px-12 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="font-bold font-satoshi text-3xl xl:text-4xl text-primary">45.4K+</div>
                            <div className="text-md font-medium text-gray-500 text-center">Продаж</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-bold font-satoshi text-3xl xl:text-4xl text-black">7K+</div>
                            <div className="text-md font-medium text-gray-500 text-center">Отзывов</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-bold font-satoshi text-3xl xl:text-4xl text-primary">5+</div>
                            <div className="text-md font-medium text-gray-500 text-center">Лет</div>
                        </div>
                    </div>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-2 max-w-md md:max-w-2xl xl:max-w-4xl mx-auto">
                        <Image src={review1} alt="review1" className="rounded-lg shadow-md "/>
                        <Image src={review2} alt="review2" className="rounded-lg shadow-md "/>
                        <Image src={review3} alt="review3" className="rounded-lg shadow-md "/>
                        <Image src={review4} alt="review4" className="rounded-lg shadow-md "/>
                        <Image src={review5} alt="review5" className="rounded-lg shadow-md "/>
                        <Image src={review6} alt="review6" className="rounded-lg shadow-md "/>
                    </div>
                </div>
                <div className="mt-6 px-5 pb-20 md:px-10">
                   <Image src={bg6} alt="bg-picture3" className=" max-w-3xl sm:max-w-4xl 2xl:max-w-6xl max-2xl:-ml-[17rem] 2xl:-ml-24 lg:max-w-5xl"/>
                   <div className="px-2 -mt-10 ">
                        <HeadText><span className="text-primary">Заинтересованы</span> нашей продукцией?</HeadText>
                        <p className="text-xl 2xl:text-2xl text-black mt-10">Вы можете перейти на страницу товаров и изучить наш ассортимент.</p>
                        <Link href={`/products`} passHref className='bg-primary mt-5  max-w-md px-10 inline-block text-center py-2 rounded-xl text-md text-white tracking-wide font-bold shadow-md transition duration-100 ease-linear hover:bg-secondary-700 focus:border-none hover:cursor-pointer'>
                            Начать
                            <ArrowUpRightIcon className="inline w-5 ml-1"/>
                        </Link>
                   </div>

                </div>
                
            </div>
        </div>
        </>
  );
}
