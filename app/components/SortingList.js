import { Field, RadioGroup, Radio, Label } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import FilterButton from "./FilterButton";
import { ArrowsUpDownIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";

const sortings = [
    {name: "price,asc", label: "По возрастанию цены"},
    {name: "price,desc", label: "По убыванию цены"}
];

function SortingList({method, curSorting, sortings}){
    
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event){
            if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, []);

    return (
        <div className="relative" ref={dropDownRef}>
            <FilterButton className="w-full sm:w-64" onClick={() => setIsOpen(!isOpen)}>
                <ArrowsUpDownIcon className="mr-2 w-4 inline"/>
                {curSorting.label}
                <ChevronDownIcon className=" w-5 inline"/> 
            </FilterButton>

            {isOpen && (
                <div className='absolute bg-white  border rounded-lg mt-2 p-4 w-full sm:w-64 '>
                <RadioGroup value={curSorting} onChange={(val) => {setIsOpen(false); method(val)}}>
                    {sortings.map((sorting) => (
                        <div key={sorting.name} className="flex-col gap-y-2">
                        <Field className="flex items-center gap-2 cursor-pointer">
                            <Radio value={sorting}>
                                {({ checked }) => (
                                    <span className={classNames(
                                        'group flex size-5 items-center justify-center rounded-full border',
                                        checked ? 'bg-primary' : 'bg-white'
                                    )}>
                                        {checked && <span className="size-2 rounded-full bg-white" />}
                                    </span>
                                )}
                            </Radio>
                            <Label>
                                {sorting.label}
                            </Label>
                        </Field>
                        </div>
                    ))}

                </RadioGroup>
                </div>
            )}

        </div>
    );
}

export default SortingList;