import Image from "next/image";
import { Button } from "@/components/ui/button"
import Hero from "./_Components/Hero";
import CategorySearch from "./_Components/CategorySearch";



export default function Home() {
  return (
 <div >
  {/* Hero-section */}
  
  <Hero/>
  {/* Search bar + Categories */}
  <CategorySearch/>
  
 </div>
  );
}
