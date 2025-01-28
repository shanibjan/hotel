import React, { useEffect, useState } from "react";
import rect from "../images/rect.png";
import drinkTop from "../images/drinktop.png";
import drinkBottom from "../images/drinkbottom.png";
import frame from "../images/Frame.png";
import axios from "axios";
const Menu = () => {
  const [bg, setBg] = useState("FOOD");
  const [menu, setMenu] = useState([]);

  const food = menu.filter((list) => {
    return list.category === bg;
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/v1/menu/get-menu"
      );
      setMenu(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  let menus = [];
  menu.map((list, key) => {
    if (!menus.includes(list.category)) {
      menus.push(list.category);
    }
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-[425px]:mb-[45px]">
      <div
        className="px-24 py-8 max-[425px]:px-[6%] max-[425px]:py-[30px] "
        style={{
          background: `url(${rect})`,
        }}
      >
        <div>
        {/* grid grid-cols-6 max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 */}
        <div className={`text-white  flex justify-center ${menus.length>8?"grid grid-cols-6   ":""} max-[1000px]:grid max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2  gap-[10px] mx-auto font-bold text-[20px] max-[425px]:text-[12px]`}>
          {menus.map((menu, i) => {
            return (
              <button
                key={i}
                onClick={() => setBg(menu)}
                className={
                  bg === menu
                    ? "border border-[#0796ef] uppercase py-2 px-6 bg-[#0796ef]"
                    : "border border-[#0796ef] uppercase py-2 px-6"
                }
              >
                {menu}
              </button>
            );
          })}
        </div>
        </div>
        
      </div>
      <div className=" relative ">
        <img
          className="absolute left-0 w-[8%] h-[517px] object-cover max-[560px]:hidden "
          src={frame}
          alt=""
        />

        <div className="px-24 my-14 max-[560px]:px-8 ">
          <div className=" mx-auto border border-white relative ">
            <div className="text-white items-center text-[30px] font-bold flex   ">
              <div className="mt-[-192px] ml-[-85px] max-[1000px]:mt-[-50px] max-[1000px]:ml-[-13px]">
                <img
                  className="w-[175px] h-[250px] max-[1000px]:w-[90px] max-[1000px]:h-[150px]"
                  src={drinkTop}
                  alt=""
                />
              </div>
              <div className=" w-[83%] flex justify-center max-[452px]:w-[43%]">
                <h1 className="max-[425px]:text-[25px]">{bg}</h1>
              </div>
            </div>
            <div className="text-white  grid grid-cols-1  gap-x-[80px] max-[425px]:gap-y-0 gap-y-9 ">
              {food.map((list, i) => {
                return (
                  <div key={i} className="text-center my-5">
                    <h4 className="font-gorditaBold capitalize text-[20px] mx-10 text-left max-[425px]:text-[14px]  ">
                      {list.name}....................${list.price}
                    </h4>
                    <h6 className="font-gordita  mx-10 text-left max-[425px]:text-[12px]">
                      {list.description}
                    </h6>
                  </div>
                );
              })}
            </div>
            <div className=" absolute right-0   bottom-[-45px]  max-[1000px]:hidden">
              <img className="w-[200px] h-[250px]  " src={drinkBottom} alt="" />
            </div>
            <div className=" justify-end hidden max-[1000px]:flex">
              <img className=" w-[90px] " src={drinkBottom} alt="" />
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 right-[-6px] max-[560px]:hidden h-[517px] max-[1000px]:w-[8%] object-cover w-[6%]"
          src={frame}
          alt=""
        />
      </div>
    </div>
  );
};

export default Menu;
