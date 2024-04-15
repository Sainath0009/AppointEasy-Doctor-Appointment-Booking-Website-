"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_Components/Hero";
import CategorySearch from "./_Components/CategorySearch";
import DoctorList from "./_Components/DoctorList";
import GlobalApi from"./_utils/GlobalApi";
import { useEffect, useState } from "react";
import Footer from "./_Components/Footer";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList()
      .then(res => {
        console.log(res.data.data);
        setDoctorList(res.data.data);
      })
      .catch(error => {
        console.error("Error fetching doctor list:", error);
      });
  };

  return (
    <div>
      {/* Hero-section */}
      <Hero />
      {/* Search bar + Categories */}
      <CategorySearch />
      {/* Popular Doctors list */}
      <DoctorList doctorList={doctorList} />
    
    </div>
  );
}
