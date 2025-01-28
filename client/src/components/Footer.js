import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/Logo.png";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({}) => {
  return (
    <div className=" px-24 my-32 max-[725px]:px-8 max-[425px]:mb-8">
      <div className="flex max-[725px]:grid grid-cols-1 gap-y-[20px] justify-between">
      <div className="border border-white rounded-md w-[30%] max-[725px]:w-full hidden max-[725px]:flex  justify-center items-center h-[140px] ">
          <div className="relative">
            <img
              className="mx-auto absolute right-0 left-0 top-[-83px] max-[425px]:w-[60px] max-[425px]:top-[-72px]"
              src={logo}
              alt=""
            />
            <div className="flex  justify-between  mx-auto font-gorditaBold">
              <h1 className="text-[#0796ef]">DEEP </h1>
              <h1 className="text-gray-200">NET </h1>
              <h1 className="text-gray-500">SOFT </h1>
            </div>
            <span className="text-gray-400">
              <FontAwesomeIcon icon={faInstagram} className="mx-3 " />
              <FontAwesomeIcon icon={faFacebook} className="mx-3 " />
              <FontAwesomeIcon icon={faLinkedin} className="mx-3 " />
              <FontAwesomeIcon icon={faTwitter} className="mx-3 " />
            </span>
          </div>
        </div>
        <div className="border border-white rounded-md w-[30%] max-[725px]:w-full  text-center flex justify-center items-center h-[140px] ">
          <div>
            <h2 className="text-[#0796ef] font-gorditaMedium ">
              Connect with Us
            </h2>
            <span className="flex justify-center font-gordita">
              <FontAwesomeIcon icon={faPhone} className="mx-3 text-[#ecba2e]" />
              <h4 className="text-gray-400">+91 9567843340</h4>
            </span>
            <span className="flex justify-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mx-3 text-[#ecba2e] "
              />
              <h4 className="text-gray-400">info@deepnetsoft.com</h4>
            </span>
          </div>
        </div>
        <div className="border border-white rounded-md w-[30%] max-[725px]:w-full flex max-[725px]:hidden justify-center items-center h-[140px] ">
          <div className="relative">
            <img
              className="mx-auto absolute right-0 left-0 top-[-83px]"
              src={logo}
              alt=""
            />
            <div className="flex  justify-between  mx-auto font-gorditaBold">
              <h1 className="text-[#0796ef]">DEEP </h1>
              <h1 className="text-gray-200">NET </h1>
              <h1 className="text-gray-500">SOFT </h1>
            </div>
            <span className="text-gray-400">
              <FontAwesomeIcon icon={faInstagram} className="mx-3 " />
              <FontAwesomeIcon icon={faFacebook} className="mx-3 " />
              <FontAwesomeIcon icon={faLinkedin} className="mx-3 " />
              <FontAwesomeIcon icon={faTwitter} className="mx-3 " />
            </span>
          </div>
        </div>
        <div className="border border-white rounded-md w-[30%] max-[725px]:w-full flex justify-center items-center h-[140px]">
          <div>
            <h2 className="text-[#0796ef] text-center font-gorditaMedium ">
              Find Us
            </h2>
            <span className="flex justify-center font-gordita ">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mx-3 text-[#ebca2e] "
              />
              <h4 className="text-gray-400">
              First floor, Geo infopark, <br />
              Infopark EXPY, Kakkanad 
               
              </h4>
            </span>
          </div>
        </div>
      </div>
      <div className="text-gray-400 max-[725px]:grid max-[725px]:grid-cols-1 max-[425px]:text-[10px] max-[725px]:text-center flex justify-between font-gorditaMedium my-12">
        <h3  >© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</h3>
        <h3>Terms & Conditions Privacy Policy</h3>
      </div>
    </div>
  );
};

export default Footer;
