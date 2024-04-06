'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi';

export default function CategorySearch() {
    const [categoriesList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            console.log(resp.data.data);
            setCategoryList(resp.data.data);
        });
    };

    return (
        <div className='mb-10 px-5 items-center flex flex-col gap-2'>
            <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
            <h2 className='text-gray-500 text-xl'>Search Your Doctor and Book Appointment in one click</h2>
            <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search..." />
                <Button type="submit">
                    <Search className='h-4 w-4 mr-2' /> Search
                </Button>
            </div>
             {/* Display List of Category */}
            <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6'>
            {categoriesList.map((item, index) => (
                <div key={index} className='flex flex-col text-center gap-2 
                hover:scale-110 transition-all ease-in-out cursor-pointer
                items-center p-5 bg-blue-50 m-2 rounded-lg'>
                    <img src={item?.attributes?.icon?.data?.attributes?.url} alt='Icon' width={40} height={40} />
                    <label className='text-blue-600 text-sm'>{item?.attributes?.Name}</label>
                </div>
            ))}
            </div>
        </div>
    );
}
