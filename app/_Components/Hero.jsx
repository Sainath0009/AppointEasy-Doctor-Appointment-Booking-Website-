import React from 'react'
import { Button } from '@/components/ui/button'
function Hero() {
  return (
//     <section >
//   <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 " >
//     <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 ">
//       <div className="relative z-10 lg:py-16">
//         <div className="relative h-64 sm:h-80 lg:h-full">
//           <img
//             alt=""
//             src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?t=st=1711709063~exp=1711712663~hmac=ab7e201a74c1cd664ddf2af0ea52f29d37209989fdd4cbc629665c0ece28f537&w=996"
//             width={800}
//             height={600}
//             className="absolute inset-0 h-full w-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="relative flex items-center bg-gray-100">
//         <span
//           className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
//         ></span>

//         <div className="p-8 sm:p-16 lg:p-24">
//           <h2 className="text-2xl font-bold sm:text-3xl">
//           Find & Book <span className='text-primary'>Appointment</span> with your Favourite <span className='text-primary'>Doctors.</span>
//           </h2>

//           <p className="mt-4 text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
//             esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
//             architecto eius quis quibusdam fugiat dicta.
//           </p>

//       <Button className="mt-10">
//         Explore Now
//       </Button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

 <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?t=st=1711709063~exp=1711712663~hmac=ab7e201a74c1cd664ddf2af0ea52f29d37209989fdd4cbc629665c0ece28f537&w=996"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl"> Find & Book <span className='text-primary'>Appointment</span> with your Favourite <span className='text-primary'>Doctors.</span>
       </h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

       < Button className="mt-10">
        Explore Now
     </Button>
      </div>
    </div>
  </div>
</section> 




  )
}

export default Hero