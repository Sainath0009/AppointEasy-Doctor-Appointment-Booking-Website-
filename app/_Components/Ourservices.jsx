import React from 'react';
import Image from 'next/image';

function Ourservices() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Text Content */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                AppointEasy
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We've built a website that allows you to find and book doctor appointments in the most convenient way.
              </p>

              <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
                {/* Feature 1 */}
                <div className="relative pl-12">
                  <Image
                    src="/cal.svg"
                    alt="Calendar icon"
                    width={24}
                    height={24}
                    className="absolute left-0 top-1 h-6 w-6"
                  />
                  <dt className="font-semibold text-gray-900">
                    Easy & Fast Appointment Booking
                  </dt>
                  <dd>
                    Inspired by Sendgrid, Mailchimp, and Postmark, we allow you to create and apply templated content to your media.
                  </dd>
                </div>

                {/* Feature 2 */}
                <div className="relative pl-12">
                  <Image
                    src="/Emergency.svg"
                    alt="Emergency icon"
                    width={24}
                    height={24}
                    className="absolute left-0 top-1 h-6 w-6"
                  />
                  <dt className="font-semibold text-gray-900">
                    Emergency Services
                  </dt>
                  <dd>
                    Emphasize your commitment to providing timely access to medical care, especially in emergency situations.
                  </dd>
                </div>

                {/* Feature 3 */}
                <div className="relative pl-12">
                  <Image
                    src="/syringe.svg"
                    alt="Syringe icon"
                    width={24}
                    height={24}
                    className="absolute left-0 top-1 h-6 w-6"
                  />
                  <dt className="font-semibold text-gray-900">
                    COVID-19 Vaccine Booking
                  </dt>
                  <dd>
                    Easily book your COVID-19 vaccination appointments through our platform.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Image Section with Bigger Size */}
          <div className="relative h-96 sm:h-[28rem] lg:h-[32rem]">
            <img
              src="https://wallpapers.com/images/hd/physician-group-photo-ideas-pvxso3pip2x34ewg.jpg"
              alt="Doctors group"
              className="w-full h-full object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourservices;
