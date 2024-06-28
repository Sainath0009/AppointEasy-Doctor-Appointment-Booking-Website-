import React from 'react'
import Image from 'next/image'

function Ourservices() {
  return (
    <section className="overflow-hidden bg-white py-8 sm:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AppointEasy</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">We've built a website that allows you to find and book doctor appointments in the most convenient way.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
              <Image src="/cal.svg"  width={60} height={90} className="absolute left-1 top-1 h-6 w-6 text-indigo-600"/>  Easy & Fast Appointment Booking 
              </dt>
              <dd className="inline">Inspired by Sendgrid, Mailchimp, and Postmark, we allow you to create and apply
                templated content to your media.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
              <Image src="/Emergency.svg"  width={70} height={90} className="absolute left-1 top-1 h-6 w-6 text-indigo-600"/> Emergency Services
              </dt>
              <dd className="inline"> Emphasize your commitment to providing timely access to medical care, especially in emergency situations.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
              <Image src="/syringe.svg"  width={60} height={90} className="absolute left-1 top-1 h-6 w-6 text-indigo-600"/>  covid 19 vaccine booking
              </dt>
              <dd className="inline"> covid 19 vaccine booking Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-10 flex items-center gap-x-6">
       
          
        </div>
      </div>
      <img src="https://wallpapers.com/images/hd/physician-group-photo-ideas-pvxso3pip2x34ewg.jpg" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
    </div>
  </div>
</section>

  )
}

export default Ourservices