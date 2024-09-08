"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



function Header() {
    const Menu = [
        { id: 1, name: 'Home', path: '/' },
        { id: 3, name: 'About Us', path: '/About' },
        { id: 4, name: 'Services', path: '/Services' },
        { id: 5, name: 'Contact Us', path: '/Contact' },
        { id: 6, name: 'Blogs', path: '/Blog' },
    ];
    const avatar = './user.svg'

    const { user } = useKindeBrowserClient();

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center'>
                    <Image src='/logo2.png' alt='logo' width={60} height={70} className='-mt-2.5' />
                    <h2 className='  text-primary text-2xl  font-semibold'>AppointEasy</h2>
                </div>
                <ul className='md:flex gap-10 hidden'>
                    {Menu.map((item) => (
                        <li key={item.id} className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out font-semibold'>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {user?
      
      <Popover>
       <PopoverTrigger>
       {user?.picture?
       <Image src={user?.picture} alt='profile-image'
       width={40}
       height={40}
       className='rounded-full border-primary border-2 ' />:
       <Image src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt='profile-image'
       width={40}
       height={40}
       className='rounded-full border-primary border-2 ' />}
       </PopoverTrigger>
       <PopoverContent className="w-200 h-300  ">
       {user?.picture?
       <Image src={user?.picture} alt='profile-image'
       width={40}
       height={40}
       className='rounded-full border-primary border-2 ml-20 mb-3' />:
      < Image src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt='profile-image'
       width={40}
       height={40}
       className='rounded-full border-primary border-2 ml-20 mb-3' />
       }
           <h2 className=" text-center ">{user?.email}</h2>
           <ul className='flex mt-1  flex-col gap-2'>
          
           <Link href={'/my-booking'} className='cursor-pointer
            hover:bg-slate-100 p-2 rounded-md'>My Booking</Link>
               <li className='cursor-pointer
            hover:bg-slate-100 p-2 rounded-md'>
               <LogoutLink> Logout </LogoutLink></li>
           </ul>
       </PopoverContent>
       </Popover>
         : (
                <LoginLink>
                    <Button>Get Started</Button>
                </LoginLink>
            )}
        </div>
    )
}

export default Header
