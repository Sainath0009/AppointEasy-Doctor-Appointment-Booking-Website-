import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Services() {
    return (
        <div>
            <div className='relative  mr w-full h-[150px]'>
                <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: 'url("\image.png")' }}>
                    <div className='absolute inset-0   bg-[#007bff] opacity-60'></div>
                </div>
                <h2 className='relative z-10 font-bold text-3xl text-white p-8 text-center sm:text-3xl md:text-6xl'>
                Services
                </h2>
            </div>


           

        </div>
    );
}

export default Services;
