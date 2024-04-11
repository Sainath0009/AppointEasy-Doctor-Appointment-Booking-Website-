import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Search } from 'lucide-react';

function Header() {
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: '/'
        },
        {
            id: 2,
            name: "Find a Doctor",
            path: '/'
        },
        {
            id: 3,
            name: "Explore",
            path: '/'
        },
        {
            id: 4,
            name: "Contact Us",
            path: '/'
        },
    ]
    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center'>
                    <Image src='/logo.svg' alt='logo' width={40} height={80} className='-mt-2.5' />
                    <h2 className='text-primary tracking-wider font-extrabold ml-2'>BookMyAppointment</h2>
                </div>
                <ul className='md:flex gap-10 hidden'>
                    {Menu.map((item, index) => (
                        <li key={item.id} className='hover:text-primary cursor-pointer hover:scale-105 translate-all ease-in-out font-bold'>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Button>Get Started</Button>
        </div>
    )
}

export default Header
