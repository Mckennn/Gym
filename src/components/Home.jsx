import React from "react";

import { banner } from "../assets";
import Button from "./Button";

const Home = () => (
  <section
    id="home"
    className="h-screen bg-[url('./assets/banner.png')] w-[100%] bg-no-repeat bg-cover relative z-0 flex flex-col items-center justify-center max-sm:bg-[-300px]"
  >
    <div className="flex flex-col text-center justify-center font-montserrat">
      <h2 className="font-lato text-[5rem] font-[900] m-[0px] tracking-[2px] text-[#ffffff] max-sm:text-[2rem]">
        STEP UP YOUR
      </h2>
      <h1 className="font-lato text-[7rem] font-[900] m-[0px] tracking-[2px] text-[#ffffff] max-sm:text-[3rem]">
        <span className="text-[#FF1414] max-sm:text-[5rem]">FITNESS</span> WITH US
      </h1>
    </div>

    <div className="">
      <p className="text-[1.6rem] text-[#c5c5c5] max-sm:text-[1rem]">
        Build Your Body And Fitness With Professional Touch
      </p>
    </div>

    <Button>JOIN US</Button>
  </section>
);

export default Home;
