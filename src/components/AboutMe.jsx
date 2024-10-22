import React from "react";
import AboutMeContent from "./AboutMeContent";

const AboutMe = () => {
  return (
    <div className="mt-6 p-5 ">
      <h1 className="text-lg bg-bgColor drop-shadow-2xl font-bold">About Me</h1>
      <AboutMeContent
        title="Introduction"
        description="Hi, I'm Jitendra Choudhary, a software engineering student at MIT ADT with hands-on experience through internships at various companies. I've developed real-world applications and honed my skills in building efficient and scalable solutions."
      />
      <AboutMeContent title="Work experience" />
      <AboutMeContent
        title="Bussiness Solutions [October 2023 - December 2023]"
        description="I had a good
experience. The company made me industry-ready and also helped me
develop new skills during my time there.Also made design and fullstack websites during the working period hkjhfsjk "
      />
      <AboutMeContent
        title="SkillsPe Technologies Pvt Ltd. [June 2024 - Ongoing]"
        description="
I am a full stack intern at SkillsPe, where I developed the SkillsPe
app in Flutter and created the company website. Both the app and
the website are live. I am also working on the admin console."
      />
      <AboutMeContent title="Hobbies" description="Geopolitics and football" />
    </div>
  );
};

export default AboutMe;
