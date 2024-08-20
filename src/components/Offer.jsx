import React from "react";
import Button from "./Button";

const Offer = () => (
  <section
    id="offer"
    className="w-[100%] h-[100vh] bg-[url('./assets/offer.png')] bg-no-repeat bg-cover mt-[3%] text-center flex flex-col justify-center items-center relative z-0 max-sm:bg-[-500px]"
  >
    <div className="font-lato w-[60%]">
      <h1 className="text-[6rem] font-lato tracking-[2px] font-[900] text-[#ffffff] max-sm:text-[3.5rem]">
        A BIG <span className="text-[#FF1414]">OFFER</span> FOR THIS SUMMER
      </h1>
    </div>

    <p className="text-[1.6rem] text-[#ffffff]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>

    <Button>JOIN NOW</Button>
  </section>
);

export default Offer;
