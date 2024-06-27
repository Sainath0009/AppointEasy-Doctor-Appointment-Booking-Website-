import React from 'react'

function Banner() {
    return (
        <section className=" dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
            <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div className="lg:w-1/2">
                    <div className="h-64 bg-cover lg:h-full" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=CB3h3a-0yUBgaZHhF2Kd5ibfDv25Qcjsca-ia5gIWUM=')" }}></div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        YOUR MOST TRUSTED
                        HEALTH PARTNERE
                    </h2>

                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                    Easily connect with leading doctors and schedule appointments online. Access detailed profiles, patient feedback, and convenient booking options, all designed to prioritize your healthcare needs.
                    </p>

                    <div className="inline-flex w-full mt-6 sm:w-auto">
                        <a href="#1" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-primary rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner