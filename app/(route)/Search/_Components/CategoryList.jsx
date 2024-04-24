"use client"
import { useEffect, useState } from "react";
import React from 'react'
import GlobalApi from "@/app/_utils/GlobalApi"
import Image from "next/image";
import Link from "next/link";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,

} from "@/components/ui/command"
import { usePathname } from "next/navigation";


function CategoryList() {
    const [categoriesList, setCategoryList] = useState([]);
    const   params=usePathname();
    const Category=params.split('/')[2];
    useEffect(() => {
        getCategoryList();
      
      
    }, []);

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            console.log(resp.data.data); // Check if data is fetched correctly
            setCategoryList(resp.data.data);
        });
    };

    return (
        <div className="h-screen mt-5  flex flex-col mb-5">
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="overflow-visible">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {categoriesList && categoriesList.map((item, index) => (
                           <Link key={item.id} href={`/Search/${item?.attributes?.Name}`} className={` p-2 flex gap-2 m-2 rounded-lg text-primary flex-col text-[12px] text-center item-center cursor-pointer w-full hover:scale-110 transition-all ease-in-out ${Category==item.attributes.Name&&'bg-blue-600'}`}>
                           <CommandItem>
                               <Image src={item?.attributes?.icon?.data?.attributes?.url} alt="Category Icon" width={30} height={30} className="mr-2" />
                               <label>{item?.attributes?.Name}</label>
                           </CommandItem>
                       </Link>
                       
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    )
}

export default CategoryList;
