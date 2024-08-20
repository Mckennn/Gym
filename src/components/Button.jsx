import React from "react";

const Button = ({children}) => (
  <button className="mt-[40px] text-[#ffffff] w-[200px] h-[60px] bg-[#FF1414] rounded-[5px] text-[1.6rem] shadow-[0px_0px_32px_25px_rgba(255,2,2,0.20)] hover:transition-all hover:duration-500 hover:bg-[transparent] hover:shadow-[0_0_0_2px_#FF1414]">
    {children}
  </button>
);

export default Button;
