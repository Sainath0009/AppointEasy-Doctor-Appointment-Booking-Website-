import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export default function Counter() {
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px', // no margin
      threshold: 0.5, // trigger when half or more of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const elements = document.querySelectorAll('.count-up');
    elements.forEach((element) => {
      const target = +element.textContent.replace(/\D/g, '');
      const increment = Math.ceil(target / 100);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }
        element.textContent = current.toLocaleString();
      }, 10);
    });
  };

  return (
    <section ref={counterRef} className="flex flex-col mt-20 mb-50   bg-slate-50 w-full">
      <p className="font-semibold text-2xl p-5 md:text-3xl text-center">Why  <span className='text-primary'>Choose Us?</span></p>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4  mb-10  place-items-center  gap-10 mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-center items-center bg-blue-100 px-4 h-[50px] w-[70%] md:w-[200px] md:h-[150px] rounded-lg justify-self-center cursor-pointer hover:scale-110 transition-all ease-in-out">
          <div className="flex flex-row justify-center items-center">
            <Image src='/stethoscope.svg' alt='logo' width={50} height={50}  />
            <p className="count-up font-bold text-2xl sm:text-3xl lg:text-5xl leading-9 text-primary ml-2">954</p>
          </div>
          <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">Specialist Doctors</p>
        </div>
        <div className="flex flex-col justify-center items-center  bg-blue-100 px-4 h-[80px] w-[100%] md:w-[200px] md:h-[150px] rounded-lg justify-self-center  cursor-pointer hover:scale-110 transition-all ease-in-out">
          <div className="flex flex-row justify-center items-center">
            <Image src='/hospital.svg' alt='logo' width={60} height={110}  />
            <p className="count-up font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">557</p>
          </div>
          <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">Hospital </p>
        </div>
        <div className="flex flex-col justify-center items-center  bg-blue-100 px-4 h-[80px] w-[100%] md:w-[200px] md:h-[150px] rounded-lg justify-self-center  cursor-pointer hover:scale-110 transition-all ease-in-out">
          <div className="flex flex-row justify-center items-center">
            <Image src='/doc.svg' alt='logo' width={60} height={110}  />
            <p className="count-up font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">75 </p>
            <p  className=" font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ">k+</p>
          </div>
          <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">Happy Patients</p>
        </div>
        <div className="flex flex-col justify-center items-center  bg-blue-100 px-4 h-[80px] w-[100%] md:w-[200px] md:h-[150px] rounded-lg justify-self-center  cursor-pointer hover:scale-110 transition-all ease-in-out">
          <div className="flex flex-row justify-center items-center">
          <Image src='/cal.svg' alt='logo' width={60} height={110}  />
            <p className="count-up font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">800</p>
            <p  className=" font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ">+</p>

          </div>
          <p className="font-medium text-base sm:text-[18px] leading-6 mt-3 md:mt-6 text-center">Appointment Everyday</p>
        </div>
        
      </div>
    </section>
  );
}
