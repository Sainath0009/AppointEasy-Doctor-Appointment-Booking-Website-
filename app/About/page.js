import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="about">
      <div className='relative w-full h-[150px] mb-10'>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: 'url("/image.png")' }}>
          <div className='absolute inset-0 bg-[#007bff] opacity-60'></div>
        </div>
        <h2 className='relative z-10 font-bold text-3xl text-white p-8 text-center sm:text-3xl md:text-6xl'>
          About Us
        </h2>
      </div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="Medical services"
                src="/R.png"
                className="absolute inset-0 h-full w-full object-cover"
                layout="fill"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">About AppointEasy</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
              </p>

              <a
                href="#1"
                className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">WHY CHOOSE <span class="text-blue-500">AppointEasy</span></h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <Image src="/Emergency.svg" width={55} height={90} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Emergency Services</h1>

              <p class="text-gray-500 dark:text-gray-300">
              Emphasize your commitment to providing timely access to medical care, especially in emergency situations.  </p>

              <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span class="mx-1">read more</span>
                <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <Image src="/cal.svg" width={55} height={90} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Appointment Booking</h1>

              <p class="text-gray-500 dark:text-gray-300">
              Ease and convenience of booking appointments online, including the flexibility to choose preferred doctors andappointment times.
              </p>

              <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span class="mx-1">read more</span>
                <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <Image src="/syringe.svg" width={55} height={90} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">covid 19 vaccine booking</h1>

              <p class="text-gray-500 dark:text-gray-300">
              covid 19 vaccine booking Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

              <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span class="mx-1">read more</span>
                <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <Image src="/Medical.svg" width={55} height={90} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Medicine</h1>

              <p class="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span class="mx-1">read more</span>
                <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <Image src="/microscope.svg" width={55} height={90} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Lab Tess</h1>

              <p class="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span class="mx-1">read more</span>
                <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <Image src="/Emergency.svg" width={55} height={90} />
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

              <p class="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>

              <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span class="mx-1">read more</span>
                <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default About;
