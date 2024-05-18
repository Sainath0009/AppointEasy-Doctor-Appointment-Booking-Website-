"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Search } from 'lucide-react';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


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
    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user);
    }, [user])
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
            {user ?
                <Popover>
                    <PopoverTrigger>            <Image src={user?.picture} alt='profile-picture' width={50} height={50} className=' rounded-full' />
                    </PopoverTrigger>
                    <PopoverContent className=" w-44">
                        <ul className='flex flex-col gap-2'>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>Profile</li>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>My Booking </li>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'> <LogoutLink> logo out </LogoutLink></li>
                        </ul>
                    </PopoverContent>
                </Popover>


                :
                <LoginLink>  <Button>Get Started</Button> </LoginLink>

            }


        </div>
    )
}

export default Header
