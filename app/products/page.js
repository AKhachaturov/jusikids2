'use client';

import { useEffect, useState } from "react";
import {Suspense} from 'react';
import testImg from "../images/test.jpg";
import CardList from "../components/CardList";
import FiltersContainer from "../components/FiltersContainer";
import typeFilters from "../config/filters";
import SortingList from "../components/SortingList";
import SyncLoader from "react-spinners/SyncLoader";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebounce } from 'use-debounce';

export const dynamic = 'force-dynamic';

let productsTest = [
    {
        id: 1,
        type: "set",
        image: testImg,
        name: "Набор для кормления малышей",
        minCount: 100,
        price: '150.00',
        new: true
    },
]


const sortings = [
    {name: "price,asc", label: "По возрастанию цены"},
    {name: "price,desc", label: "По убыванию цены"}
];

function Products(){
    const [products, setProducts] = useState([]);
    const [typeFilter, setTypeFilter] = useState([]);
    const [sorting, setSorting] = useState(sortings[0]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const searchParams = useSearchParams();
    const router = useRouter();
    const [debounce] = useDebounce(searchParams, 300);
    const [isInitialLoading, setIsInitialLoading] = useState(true);


    const page = parseInt(searchParams.get('page')) || 0;
    const sort = searchParams.get('sort') || 'price,asc';
    const filters = {
        type: searchParams.get('type') || ''
    }

    const handleFilterChange = (filter) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('page');
        setTypeFilter(filter);

        if(filter.length > 0){
            newParams.set(filter[0].type, filter[0].value);
        }else{
            newParams.delete('type');
        }

        router.push(`?${newParams.toString()}`);
    };

    const handleSortChange = (sort) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('page');
        setSorting(sort);
        newParams.set('sort', sort.name);
        router.push(`?${newParams.toString()}`);
    };

    useEffect(() => {
        if(isInitialLoading){
            setLoading(true);
        }

        const fetchProduct = async() => {
            setError(null);

            try{
                const params = {
                    page,
                    sort,
                    ...filters
                };
                setSorting(sortings.find(sorting => sorting.name === sort));

                Object.keys(params).forEach(key => {
                    if(!params[key]) delete params[key]
                });

                const response = await axios.get('https://jusikids.ru/api/api/products', {params});
                
                setProducts(response.data.content);
            } catch(err){
                setError(err.message);
            } finally {
                if(isInitialLoading){
                    setLoading(false);
                    setIsInitialLoading(false);
                }
            }
        }

        fetchProduct();

    }, [debounce]);

    if(loading){
        return (
            <div className='flex flex-grow justify-center items-center min-h-screen'>
                <SyncLoader className='' color='#CF163E' size={50} />
            </div>);
    }
    if(error){
        return <p className='flex-grow min-h-screen'>Ошибка: {error}</p>;
    }
    if(!products){
        return <p className='flex-grow min-h-screen'>Товары не найдены</p>;
    }

    return (
    
        <div className="mt-12 md:mt-20 md:mx-8 flex-grow min-h-screen ">
            <div className="flex flex-col mx-auto max-w-[100rem] ">
            <div className="flex flex-col sm:flex-row mx-3 gap-3">
                <FiltersContainer filters={[...typeFilters]} curFilter={typeFilter} onAction={(filter) => handleFilterChange(filter)}/>
                <SortingList method={(sort) => handleSortChange(sort)} curSorting={sorting} sortings={sortings}/>
            </div>
            <CardList list={products} /> 
            </div> 
        </div>
    
    );
}

export default function ProductsPage(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Products/>
        </Suspense>
    );
};