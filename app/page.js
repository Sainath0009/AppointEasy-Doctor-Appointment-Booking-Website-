"use client"


import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";
import Counter from "./_components/Counter";
import Ourservices from "./_components/Ourservices";
import Banner from "./_components/Banner";

export default function Home() {

  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, [])
  const getDoctorList = () => {
    GlobalApi.getDoctorList().then(resp => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div>
      {/* Hero Section  */}
      <Hero />
      <Counter />


      {/* Search bar + Categories  */}
      <CategorySearch />


      {/* <Servicess/> */}


      {/* Popular Doctor List  */}
      <DoctorList doctorList={doctorList} />
      {/* <Availabe/> */}
      <Ourservices />
      <Banner />

    </div>
  );
}
