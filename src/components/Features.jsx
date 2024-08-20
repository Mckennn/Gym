import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../assets/1.svg";
import fimage2 from "../assets/2.svg";
import fimage3 from "../assets/3.svg";
import fimage4 from "../assets/4.svg";

const Features = () => (
  <section id="features" className="w-[100%] h-[100vh] font-lato box-border flex flex-col items-center justify-center pt-[40px] bg-[#000000] max-sm:h-[100%] max-md:h-[100%]">
    <h1 className="text-[#ffffff] text-[5rem] font-[900] mb-[50px] max-sm:text-[3rem] max-sm:mt-[100px] max-md:mt-[100px]">FEATURES</h1>
    <div className="flex justify-center items-center max-sm:flex-col max-md:flex-col">
      <Featurebox image={fimage1} title="WeightLifting" />
      <Featurebox image={fimage2} title="Specific Muscle" />
      <Featurebox image={fimage3} title="Flex Your Muscle" />
      <Featurebox image={fimage4} title="Cardio Exercises" />
    </div>
  </section>
);

export default Features;
