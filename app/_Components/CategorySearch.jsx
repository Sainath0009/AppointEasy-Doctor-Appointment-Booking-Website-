import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi'; // Ensure this utility handles API requests correctly

export default function CategorySearch() {
    const [doctorList, setDoctorList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        getDoctorList();
    }, []);

    const getDoctorList = async () => {
        try {
            const response = await GlobalApi.getDoctors(); // Assuming you have a GlobalApi method to fetch doctors
            setDoctorList(response.data.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    const handleSearch = () => {
        const filtered = doctorList.filter(doctor =>
            doctor.attributes.Name.toLowerCase().includes(searchQuery.toLowerCase())
        );
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
                    <li key={doctor.id}>
                        <Link href={`/doctor/${doctor.id}`}>{doctor.attributes.Name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
