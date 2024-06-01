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


            <section id="features" class="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-10 lg:py-10">
                <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                    <div
                        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                        <div class="flex h-[20px] flex-col justify-between rounded-md p-6">
                            <Image src="/Emergency.svg" width={55} height={90} />
                            <div class="space-y-2">
                                <h3 class="font-bold">Emergency Services</h3>
                                <p class="text-sm text-muted-foreground">Emphasize your commitment to providing timely access to medical care, especially in emergency situations.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                        <div class="flex h-[200px] flex-col justify-between rounded-md p-6">
                            <Image src="/cal.svg" width={55} height={90} />
                            <div class="space-y-2">
                                <h3 class="font-bold">Appointment Booking</h3>
                                <p class="text-sm text-muted-foreground">ease and convenience of booking appointments online, including the flexibility to choose preferred doctors andappointment times.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                        <div class="flex h-[200px] flex-col justify-between rounded-md p-6">
                            <Image src="/syringe.svg" width={55} height={90} />
                            <div class="space-y-2">
                                <h3 class="font-bold">covid 19 vaccine booking</h3>
                                <p class="text-sm text-muted-foreground">covid 19 vaccine booking Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                        <div class="flex h-[200px] flex-col justify-between rounded-md p-6">
                            <Image src="/Medical.svg" width={55} height={90} />
                            <div class="space-y-2">
                                <h3 class="font-bold">Medicine</h3>
                                <p class="text-sm text-muted-foreground">Lorem ipsum dolor sit amet  quam beatae itaharum ipsum architecto, maxime,
                                    .</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                        <div class="flex h-[200px] flex-col justify-between rounded-md p-6">
                            <Image src="/microscope.svg" width={55} height={90} />
                            <div class="space-y-2">
                                <h3 class="font-bold"> Lab Tess</h3>
                                <p class="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet voluptate modi alias minima .</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <Image src="/Emergency.svg" width={55} height={90} />
                            <div class="space-y-2">
                                <h3 class="font-bold">Subscriptions</h3>
                                <p class="text-sm text-muted-foreground">Free and paid subscriptions using Stripe.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default Services;
