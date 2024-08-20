import React from "react";

const Featurebox = (props) => (
  <div id="lol" className="w-[30%] h-[700px] m-[50px] rounded-[10px] overflow-hidden relative bg-[#000000] duration-[400ms] ease-in-out max-sm:h-[450px] max-sm:w-[60%] max-md:h-[600px] max-md:w-[80%]">
    <div className="w-[100%] h-[60%] max-sm:h-[40%]">
      <img
        src={props.image}
        alt=""
        className="p-[15px] mt-[40px] w-[100%] h-[50%] max-sm:h-[100%]"
      />
    </div>
    <div className="w-[100%] h-[40%] flex justify-center items-center text-center flex-col">
      <h2 className="text-[#ffffff] text-[3rem] font-[900] max-sm:text-[2rem] max-lg:text-[1.7rem]">{props.title}</h2>
      <p className="m-0 text-[#ffffffa6] text-[1.3rem] font-lato block max-w-[80%] mt-[5px] overflow-hidden text-ellipsis mb-[10px] webkit">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>
);

export default Featurebox;
