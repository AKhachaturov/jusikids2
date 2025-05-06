import Link from "next/link";

const Ref = (props) => (
    <Link {...props} passHref className="border-b-2 border-b-transparent transition ease-in-out duration-300 hover:border-b-white hover:cursor-pointer">
        {props.children}
    </Link>
);

const Footer = () => (
    <footer className=" mt-14 h-36 border-t" style={{backgroundColor: "#01091B"}}>
        <div className="px-3">
            <div className="text-white font-satoshi font-medium flex gap-4 justify-center pt-10 sm:gap-10 md:gap-24 xl:gap-40">
                <Ref href="/" >Главная</Ref>
                <Ref href="/products">Товары</Ref>
                <Ref href="/delivery" >Контакты и Доставка</Ref>
            </div>
            <div className="flex sm:px-5 xl:px-10 mt-5 text-gray-300">
                <div className="flex flex-col sm:flex-row sm:gap-1">
                    <span className="">© 2025 JusiKids, Inc.</span>
                    <span>Все права защищены.</span>
                </div>
                
                <span className="ml-auto">ancandy@mail.ru</span>
            </div>
        </div>
    </footer>
);

export default Footer;