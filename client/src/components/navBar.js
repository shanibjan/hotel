import React, { useState } from "react";
import logo from "../images/Logo.png";
import bg from "../images/bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import AddMenu from "./AddMenu";

const NavBar = ({}) => {
  const [isLogin, setIsLogin] = useState(false);
  const handleDataFromLogin = (data, ) => {
  
   

    if (data === false) {
      setIsLogin(data);
     

    }
    
    
  };
  return (
    <>
      <div className="px-[3%] pt-12 pb-4 max-[425px]:pb-0 max-[425px]:pt-4">
        <div className="flex justify-between relative">
          <div className=" max-[425px]:w-[25%]  ">
            <div className="flex absolute top-[3px]  max-[425px]:w-full max-[425px]:justify-center ">
              <img className="max-[425px]:w-[12%]" src={logo} alt="" />
              <div className="ml-4 text-[25px] font-extrabold max-[425px]:hidden">
                <div className="flex w-32 justify-between">
                  <h1 className="text-[#0796ef]">DEEP </h1>
                  <h1 className="text-gray-200">NET </h1>
                </div>
                <h1 className="text-gray-500">SOFT </h1>
              </div>
            </div>
          </div>
          <div className="w-[35%] max-[945px]:hidden max-[1256px]:w-[50%] ">
            <ul className="text-gray-200 flex justify-between cursor-pointer ">
              <li>HOME</li>
              <li
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#0796ef]"
              >
                ADD MENU
              </li>
              <li>MAKE A RESERVATION</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="dropdown hidden max-[945px]:block text-white">
            <FontAwesomeIcon icon={faList} />
            <ul className="dropdown-menu font-QSemi text-[#244262] leading-[35px] max-[1000px]:px-[20px] left-[-170px] max-[1000px]:left-[-125px] max-[550px]:text-[11px] max-[500px]:left-[-125px] max-[1000px]:w-[150px] ">
              <li className="border-b-[1px] text-white cursor-pointer ">
                HOME
              </li>
              <li onClick={() => setIsLogin(!isLogin)} className="border-b-[1px] text-white cursor-pointer">
                ADD MENU
              </li>
              <li className="border-b-[1px] text-white cursor-pointer">
                {" "}
                RESERVATION
              </li>
              <li className="text-white cursor-pointer">CONTACT US</li>
            </ul>
          </div>
          {/* <div className="">
            <FontAwesomeIcon icon={faList} />
          </div> */}
        </div>
      </div>
      <div
        className="px-24 pt-24 pb-12 max-[425px]:pt-12  max-[425px]:px-4 text-center"
        style={{
          background: `url(${bg})`,
        }}
      >
        <h1 className="text-white text-[38px] font-semibold">MENU</h1>
        <p className="text-white">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to <br /> place an order, use the "Order Online" button
          located below the menu.
        </p>
      </div>

      
        {isLogin && (
          <div className="overlay">
            <div className=" overlay-content fixed w-full flex h-screen justify-center items-center ">
              <div
                className="w-[50%] rounded-md max-[1000px]:w-[80%] max-[900px]:w-[90%] h-[500px] bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <AddMenu onDataSend={handleDataFromLogin}/>
              </div>
            </div>
          </div>
        )}
     
    </>
  );
};

export default NavBar;
