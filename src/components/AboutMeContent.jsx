import React from "react";

const AboutMeContent = ({ title, description }) => {
  return (
    <div className="p-2 items-center">
      <h1 className="text-md font-bold flex items-center gap-2">
        {" "}
        <p className="text-2xl">•</p> <p>{title}</p>
      </h1>
      <p className="pl-5">{description}</p>
    </div>
  );
};

export default AboutMeContent;
