import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import cv from "../assets/cv.pdf";

const NameInfo = () => {
  const pdfUrl = "";
  return (
    <div className="mb-8">
      <ul className="flex flex-col gap-8">
        {/* name */}
        <li>Jitendra Choudhary</li>
        {/* shortIntro */}
        <li>
          I'm a passionate software developer and current student with
          experience in building real-world projects using various technologies,
          including Flutter, MERN stack, and Redux. With a strong foundation in
          full-stack development, I continuously explore new tools and
          techniques to enhance my skills.
        </li>
        {/* contact info */}
        <ul className="flex flex-col gap-3">
          <ul className="flex items-center gap-2">
            <li>
              <FaPhoneAlt size={16} />
            </li>
            <li>+91 9561 222 822</li>
          </ul>
          <ul className="flex items-center gap-2">
            <li>
              <IoMdMail size={16} />
            </li>
            <li>jitendrajat6397@gmail.com</li>
          </ul>
          <li>
            <ul>
              <li>Social links:</li>
              <ul className="p-2 pl-0 flex gap-2">
                <li>
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaGithub size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaInstagram size={28} />
                  </a>
                </li>
              </ul>
            </ul>
            <li className="mt-3">
              <a
                href={pdfUrl}
                download
                className="inline-block px-6 py-2 text-bgColor hover:bg-primaryColor bg-primaryLightColor rounded-md text-center transition-colors duration-300"
              >
                View CV
              </a>
            </li>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NameInfo;
