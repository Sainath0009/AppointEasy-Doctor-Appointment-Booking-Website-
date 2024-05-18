import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi';
import Link from 'next/link';

export default function CategorySearch() {
    const [doctorList, setdoctorList] = useState([]);
    const [CategoryList, setCategoryList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            setCategoryList(resp.data.data);
        });
    };

    const handleSearch = () => {
        console.log("Search Query:", searchQuery);
        console.log("DoctorList:", doctorsList)
    
        const filtered = doctorList.filter(item =>
            item.attributes.Name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        console.log("Filtered Doctors:", filtered);
    
        setFilteredDoctors(filtered);
    };
    
    


    return (
        <div className='mb-10 px-5 items-center flex flex-col gap-2'>
            <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
            <h2 className='text-gray-500 text-xl'>Search Your Doctor and Book Appointment in one click</h2>
            <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Search by doctor's name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" onClick={handleSearch}>
                    <Search className='h-4 w-4 mr-2' /> Search
                </Button>

            </div>
            {/* Display the filtered list of doctors */}
            <ul>
                {filteredDoctors.map(doctor => (
                    <li key={doctor.id}>{doctor.attributes.Name}</li>
                    /* Adjust the property name as per your API response */
                ))}
            </ul>
        </div>
    );
}
