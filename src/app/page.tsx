import Hero from "@/components/sections/Hero";
import SubHero from "@/components/sections/SubHero";
import SuitableFor from "@/components/sections/SuitableFor";
import Integrate from "@/components/sections/Integrate";
import Formats from "@/components/sections/Formats";
import WhatItGives from "@/components/sections/WhatItGives";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <SuitableFor />
      <Integrate />
      <Formats />
      <WhatItGives />
      <FAQ />
    </>
  );
}
