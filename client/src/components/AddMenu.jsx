import {
 
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";



const AddMenu = ({ onDataSend }) => {
  const [isLogin, setIsLogin] = useState(true);
  

  const [menu, setMenu] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
console.log(menu);


  useEffect(() => {
    onDataSend(isLogin);
  }, [isLogin]);

  const addClick = async () => {
    try {
      const res = await axios.post(`https://hotel-ni2b.onrender.com/api/v1/menu/add-food`, {
            category:menu,
            name:item,
            price,
            description:desc
      });
      console.log(res.data);
      if (res.data.success) {
       window.alert(res.data.message)
        setIsLogin(false);
        setTimeout(()=>{
          window.location.reload();
        },500)
      }
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.message)
    }
  };
  return (
    <div className="flex h-full justify-center relative rounded-md">
      <div className="w-[50%] max-[620px]:w-full pt-[70px] pb-[10px] flex  justify-center text-center  ">
        <div className="w-full">
          <h1 className="font-QBold max-[425px]:font-QSemi text-[25px] max-[425px]:text-[18px]  mb-[30px]">
            Add Menu
          </h1>
      <div className="grid gap-y-4" >
      <div className="bg-gray-100 w-[70%] max-[425px]:text-[12px] rounded-md px-[3%] py-[2%] mx-auto flex justify-between items-center font-QRegular">
            <input
              value={menu}
              onChange={(e) => setMenu(e.target.value.toUpperCase())}
              className="outline-none w-[90%] bg-gray-100 text-gray-500"
              type="text"
              placeholder="Menu"
            />
          </div>
          <div className="bg-gray-100 w-[70%] max-[425px]:text-[12px] rounded-md px-[3%] py-[2%] mx-auto flex justify-between items-center font-QRegular">
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="outline-none w-[90%] bg-gray-100 text-gray-500"
              type="text"
              placeholder=" Item"
            />
          </div>
          <div className="bg-gray-100 w-[70%] max-[425px]:text-[12px] rounded-md px-[3%] py-[2%] mx-auto flex justify-between items-center font-QRegular">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="outline-none w-[90%] bg-gray-100 text-gray-500"
              type="text"
              placeholder="Price"
            />
          </div>
          <div className="bg-gray-100 w-[70%] max-[425px]:text-[12px] rounded-md px-[3%] py-[2%] mx-auto flex justify-between items-center font-QRegular">
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="outline-none w-[90%] bg-gray-100 text-gray-500"
              type="text"
              placeholder="Description"
            />
          </div>
      </div>
          
          <h1
            onClick={addClick}
            className=" max-[425px]:text-[11px] rounded-md cursor-pointer flex items-center font-QSemi text-[#417AB2] max-[715px]:text-[13px] border-[1px] justify-center mx-auto w-[50%] border-[#417AB2] mt-[30px]  px-[10%] py-[2%]"
          >
            Add
          </h1>
        </div>
      </div>
      <div
        onClick={() => setIsLogin(false)}
        className="absolute cursor-pointer top-[10px] right-[20px] text-[22px] text-gray-500"
      >
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default AddMenu;
