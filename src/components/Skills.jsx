import React from "react";
import { skills } from "./skills"; // Import the skills array with icon paths
import SingleSkill from "./SingleSkill";

const Skills = () => {
  return (
    <div>
      <h2 className="text-lg bg-bgColor drop-shadow-2xl font-bold p-5">
        Skills
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <li key={index}>
            <SingleSkill iconPath={skill.iconPath} title={skill.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
