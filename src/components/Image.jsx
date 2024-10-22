import React from "react";
import image from "../assets/image.jpg";

const Image = () => {
  return (
    <div>
      <div className="group   drop-shadow-2xl">
        <img
          src={image}
          className="w-full border-[3px] border-primaryColor max-w-xl h-auto rounded-2xl transition-transform duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-2"
          alt="Responsive"
        />
      </div>
    </div>
  );
};

export default Image;
