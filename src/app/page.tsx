import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Calculator from "@/components/sections/Calculator";
import SuitableFor from "@/components/sections/SuitableFor";
import Integrate from "@/components/sections/Integrate";
import Formats from "@/components/sections/Formats";
import WhatItGives from "@/components/sections/WhatItGives";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Calculator />
      <SuitableFor />
      <Integrate />
      <Formats />
      <WhatItGives />
      <FAQ />
    </>
  );
}
