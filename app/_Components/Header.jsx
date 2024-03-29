import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: '/'
        },
        {
            id: 2,
            name: "Explore",
            path: '/'
        },
        {
            id: 3,
            name: "Contact Us",
            path: '/'
        },
    ]
    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image src='/logo.jpg' alt='logo'
                    width={180} height={190} />

                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link href={item.path}>
                        <li className='hover:text-primary cursor-pointer hover:scale-105 translate-all ease-in-out'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        <Button>Get Started</Button>
        </div>
    )
}

export default Header