import React from "react";
import Cardhero from "./Cardhero";

const Hero = () => {
  return (
    <div className="w-full  pt-24 flex flex-col justify-between gap-12  bg-[#f6f6f6] p-2">
      <img className="mx-auto rounded-md object-cover w-[90%] h-[400px]" src={"/assets/cover-1.jpg"} alt="" />
      <Cardhero />
    </div>
  );
};

export default Hero;
