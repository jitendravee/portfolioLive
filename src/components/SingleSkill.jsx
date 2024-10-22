import React from "react";

const SingleSkill = ({ iconPath, title }) => {
  return (
    <div className="flex gap-4 p-2 items-center">
      <img
        src={iconPath}
        alt={`${title} logo`}
        className="object-contain h-16 w-16 md:h-24 md:w-24"
      />
      <p className="font-bold text-xl">{title}</p>
    </div>
  );
};

export default SingleSkill;
