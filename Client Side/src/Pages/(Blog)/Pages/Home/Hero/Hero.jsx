import React from "react";
import Cardhero from "./Cardhero";
import HeroImg from "./heroAsets/heroImgPlastine.jpg";

const Hero = () => {
  return (
    <div className="w-full xl:w-4/5 xl:mx-auto xl:my-32 ">
        <img className="mx-auto rounded-md w-full" src={HeroImg} alt="" />
      <Cardhero />
    </div>
  );
};

export default Hero;
