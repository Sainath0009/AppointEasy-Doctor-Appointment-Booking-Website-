"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import DoctorDetail from './_components3/DoctorDetail';

function Details({ params }) {
  // Initialize doctor state variable
  const [doctor, setDoctor] = useState();

  useEffect(() => {
    
      getDoctorById();
    
  },[]);

  const getDoctorById = () => { // Accept recordId as a parameter
    GlobalApi.getDoctorById(params.recordId).then(resp => {
      setDoctor(resp.data.data); 
   })//.catch(error => {
    //   console.error('Error fetching doctor details:', error);
    // });
  }

  return (
    <div className='p-2 md: px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>
      <div>
        {/* Check if doctor is defined before rendering DoctorDetail component */}
        {doctor && <DoctorDetail doctor={doctor}/>}
      </div>
    </div>
  );
}

export default Details;
