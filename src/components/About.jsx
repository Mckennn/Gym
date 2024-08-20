import React from "react";
import { about } from "../assets";
import Button from "./Button";

const About = () => (
  <section
    id="about"
    className="w-[100%] h-screen mt-[3%] flex flex-col justify-center items-center"
  >
    <div className="flex w-[80%] max-sm:w-[100%] max-md:items-center max-lg:items-center">
      <img src={about} alt="about" className="w-[50%] max-sm:hidden max-md:h-[60%] max-md:w-[60%] max-lg:w-[60%] max-lg:h-[60%]" />

      <div className="flex flex-col items-start justify-center ml-[5%] w-[45%] max-sm:w-[100%] max-sm:items-center max-sm:ml-0 max-sm:text-center">
        <h1 className="text-[5rem] text-[#FF1414] font-[500] m-0 p-0 max-sm:text-[4.3rem]">
          LEARN MORE ABOUT US
        </h1>
        <p className="text-[1.5rem] text-[#ffffff] max-sm:text-[1.3rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          eius accusamus, vel necessitatibus nemo doloribus iure libero tenetur
          ipsam maiores laudantium, explicabo atque mollitia illo autem nihil
          itaque ipsa magni.
        </p>

        <Button>READ MORE</Button>
      </div>
    </div>
  </section>
);

export default About;
