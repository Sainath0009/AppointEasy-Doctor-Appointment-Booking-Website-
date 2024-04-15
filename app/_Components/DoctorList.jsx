import React from 'react';

function DoctorList({ doctorList }) {
  console.log(doctorList); // Log doctorList for debugging

  return (
    <div className='mb-10 px-10'>
      <h2 className='font-bold text-xl'>Popular Doctors</h2>
      <div className='grid grid-cols-2 gap-8 sm:grid-clos-2 mt-4 md:grid-clos-3 lg:grid-cols-4'>
        {!doctorList || (Array.isArray(doctorList) && doctorList.length > 0) ? (
          doctorList.map((doctor, index) => (
            <div key={index} className='border-[1px] rounded-lg p-2 cursor-pointer hover:border-primary hover:shadow-2xl transition-all ease-in-out'>
              {/* Your doctor list item JSX here */}
              <img src={doctor.attributes?.Image?.data?.[0]?.attributes?.url}
                alt="Doctor image"
                width={500}
                height={300}
                className='h-[200px] w-ful object-cover rounded-lg'
              />
              <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h3 className='text-[12px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{doctor.attributes?.categories?.data[0]?.attributes?.Name}</h3>
                <h2 className='font-bold'>{doctor.attributes?.Name}</h2>
                <h2 className='text-primary text-sm'> Experience : {doctor.attributes?.Experience}</h2>
                <h2 className='text-gray-500 text-sm'>{doctor.attributes?.Address}</h2>
              </div>
              <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>Book Now</h2>
            </div>
          ))
        ) : (
          [1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className='h-[220px] bg-slate-100 w-full rounded-lg animate-pulse'></div>
          ))
        )}
      </div>
    </div>
  );
}

export default DoctorList;
