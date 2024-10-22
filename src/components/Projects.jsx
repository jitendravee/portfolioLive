import React from "react";
import SkillspeLogo from "../assets/skills_pe_logo.png";

const Projects = () => {
  return (
    <div className="py-4">
      <h2 className="text-lg bg-bgColor drop-shadow-2xl font-bold p-5">
        Projects
      </h2>
      <div className="mt-3 flex justify-center">
        <ul className=" flex">
          <li className="max-w-lg border-2 border-gray-600 p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300">
            <div className="flex flex-col items-center">
              <img
                src={SkillspeLogo}
                alt="SkillsPe App"
                className="w-32 h-32 object-contain mb-4 shadow-lg rounded-lg"
              />
              <p className="text-center font-medium mb-2">
                SkillsPe App Description: I developed a comprehensive
                Flutter-based mobile application for SkillsPe Technologies Pvt
                Ltd that enhances user engagement through an innovative
                challenge-based platform.
              </p>
              <p className="text-center font-medium mb-2">
                The app features a robust user authentication system utilizing
                OTP (One-Time Password) for secure sign-in, ensuring a seamless
                onboarding experience.
              </p>
              <h3 className="font-semibold mt-2">Key Features:</h3>
              <ul className="list-disc list-inside text-left mb-4">
                <li>
                  User Profiles: Users can create and manage their profiles,
                  allowing for a personalized experience tailored to their
                  preferences and activities.
                </li>
                <li>
                  Dynamic Home Screen: The home screen showcases content
                  relevant to each user, driven by their individual data and
                  interactions within the app.
                </li>
                <li>
                  Challenge Creation and Participation: Users can create and
                  engage in exciting challenges that can be played with friends.
                  These challenges are bid-based, integrating real monetary
                  stakes to enhance competitiveness and enjoyment.
                </li>
                <li>
                  Bidding System: Users can place bids on various challenges,
                  with the potential to win real money upon the declaration of
                  results. The winner receives the total bid amount,
                  incentivizing active participation and engagement.
                </li>
                <li>
                  Transaction Management: The app provides users with the
                  ability to view their transaction history, add funds to their
                  accounts, and withdraw earnings seamlessly.
                </li>
                <li>
                  Activity Tracking: Users can keep track of their activities
                  within the app, ensuring transparency and an overview of their
                  engagements.
                </li>
              </ul>
              <p className="text-center font-medium">
                The SkillsPe app is live on both the Play Store and App Store,
                making it accessible to a broad audience.
              </p>
              <p className="text-center font-medium">
                <strong>Download Links:</strong>{" "}
                <a
                  href="https://apps.apple.com/in/app/skillspe/id6572280569"
                  target="_blank"
                >
                  <p className="text-blue-400 cursor-pointer">App Store</p>
                </a>{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.application.skillspe&hl=en"
                  target="_blank"
                >
                  <p className="text-blue-400 cursor-pointer">Play Store</p>
                </a>{" "}
              </p>
              <p className="text-center font-medium">
                This application not only promotes friendly competition among
                users but also creates a vibrant community where skills and
                strategy can shine.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
