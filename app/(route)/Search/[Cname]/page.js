"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi'; // Adjust the path as per your file structure
import DoctorList from '@/app/_Components/DoctorList';

function Search({ params }) {
  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    GlobalApi.getDoctorsByCategory(params.Cname)
      .then(resp => {
        setDoctorList(resp.data.data);
        console.log(resp);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-5'>
      <DoctorList heading={params.Cname} doctorList={doctorList} />
    </div>
  );
}

export default Search;
