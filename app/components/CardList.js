import Link from "next/link";
import Card from "./Card";

const CardList = ({list}) => (
    <div className="mt-6 grid grid-cols-1 gap-5 md:gap-1 md:gap-y-6 justify-between md:grid-cols-3 lg:grid-cols-4 max-w-[100rem]">
        {list.map((item) => {
            return(
                <Link 
                    href={`/products/${item.id}`}
                    passHref
                    key={item.id}>
                    <Card product={item} />
                </Link>    
                    );
        })}
    </div>
);  

export default CardList;