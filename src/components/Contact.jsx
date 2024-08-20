import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="w-[100%] h-screen flex flex-col justify-center items-center"
  >
    <h1 className="text-[#ffffff] text-[5rem] font-[900] mb-[30px] max-sm:text-[4rem]">
      CONTACT US
    </h1>

    <form
      action=""
      className="w-[60%] flex flex-col justify-center items-center max-lg:w-[100%]"
    >
      <input
        type="text"
        placeholder="Full Name"
        required
        className="w-[60%] h-[60px] my-[5px] p-[10px] border-none outline-none bg-[#ffffff2d] text-[#ffffff] rounded-[5px] max-lg:w-[90%]"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Type Your E-Mail"
        required
        className="w-[60%] h-[60px] my-[5px] p-[10px] border-none outline-none bg-[#ffffff2d] text-[#ffffff] rounded-[5px] max-lg:w-[90%]"
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Write Here......"
        className="w-[60%] my-[5px] p-[10px] border-none outline-none bg-[#ffffff2d] text-[#ffffff] rounded-[5px] h-[250px] max-lg:w-[90%]"
      ></textarea>
      <input
        type="submit"
        name="submit"
        id="submit"
        className="w-[60%] h-[45px] my-[5px] p-[10px] border-none outline-none text-[#ffffff] rounded-[5px] bg-[#FF1414] cursor-pointer uppercase max-lg:w-[90%]"
      />
    </form>
  </section>
);

export default Contact;
