"use client"
import CategorySearch from "./_Components/CategorySearch";
import DoctorList from "./_Components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";
import Counter from "./_Components/Counter";
import Ourservices from "./_Components/Ourservices";
import Banner from "./_Components/Banner";
import Hero from "./_Components/Hero";

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
