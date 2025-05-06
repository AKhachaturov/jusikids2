import Image from "next/image";
import HeadText from "../components/HeadText";
import contactsImg from "../images/contactsImg.svg";
import whatsapp from "../images/whatsapp.png";
import telegram from "../images/telegram.png";
import mail from "../images/mail.webp";
import pek from "../images/pek.jpg";
import delovye from "../images/delovye-linii.webp";
import cdek from "../images/cdek.jpg";
import manufacturer from "../images/manufacturer.svg";


export default function Delivery(){
    return (
     
        <div className="flex-grow min-h-screen max-w-[50rem] xl:max-w-[70rem] mx-auto">
            <div className="px-5 mt-10">
                <HeadText className="text-gray-900">Контакты</HeadText>
                <p className="mt-5 text-xl">Если Вы заинтересованы нашим продуктом или у Вас есть вопросы, Вы можете связаться с нами указанными ниже способами.</p>
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <Image src={contactsImg} className="max-w-md mx-auto" alt=""/>
                    <div className="flex flex-col items-start gap-2 md:gap-3">
                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <Image src={whatsapp} className="max-w-[4rem] md:max-w-[6rem]" alt=""/>
                                <Image src={telegram} className="max-w-[5rem] md:max-w-[8rem]" alt=""/>
                            </div>
                            <p className="font-satoshi text-xl font-semibold md:text-2xl">+79606662993</p>
                        </div>
                        <div className="ml-5 flex gap-5 items-center md:ml-8 md:gap-8">
                            <Image src={mail} className="max-w-[40px] md:max-w-[4rem]" alt=""/>
                            <p className="font-satoshi text-xl font-semibold md:text-2xl">ancandy@mail.ru</p>
                        </div>    
                    </div>
                </div>  
            </div>
            <div className="px-5 mt-20 ">
                <HeadText className="text-gray-900">Доставка</HeadText>
                <p className="mt-5 text-xl">Доставка осуществляется следующими транспортными компаниями</p>
                <div className="flex flex-col items-center md:flex-row md:gap-10">
                    <Image src={pek} loading="lazy" className="max-w-[15rem] xl:max-w-[20rem]" alt=""/>
                    <Image src={delovye} loading="lazy" className="max-w-[15rem] xl:max-w-[20rem]" alt=""/>
                    <Image src={cdek} loading="lazy" className="max-w-[15rem] xl:max-w-[20rem]" alt=""/> 
                </div>  
            </div>
            <div className="px-5 mt-6">
                <HeadText className="text-gray-900">Производитель</HeadText>
                <div className="flex flex-col xl:flex-row xl:items-center xl:gap-10">
                    <Image src={manufacturer} loading="lazy" className="mt-10 max-w-xl" alt=""/>
                    <div className="mt-8 flex flex-col gap-1 md:gap-2">
                        <p className="font-satoshi text-xl font-semibold md:text-2xl">Хачатуров Олег Анатольевич ИП</p>
                        <p className="text-lg md:text-xl">ОГРНИП: 310264120900035</p>
                        <p className="text-lg md:text-xl">ИНН: 260904243804</p>
                        <p className="text-lg md:text-xl">Номер регистрации: 260904243804</p>
                    </div>
                </div>
            </div>
        </div>
     
    );
}

