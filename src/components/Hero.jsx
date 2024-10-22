import React from "react";
import Image from "./Image";
import NameInfo from "./NameInfo";

const Hero = () => {
  return (
    <div className="flex items-center">
      <NameInfo />
      <Image />
    </div>
  );
};

export default Hero;
