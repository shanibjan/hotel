import React, { useEffect, useState } from "react";
import rect from "../images/rect.png";
import drinkLeft from "../images/drinkleft.png";
import drinkRight from "../images/drinkright.png";
import drinkTop from "../images/drinktop.png";
import drinkBottom from "../images/drinkbottom.png";
import hukka from "../images/hukka.png"
import drinks from '../images/DRINKS.png'
import brunch from "../images/BRUNCH COCKTAILS.png"
import frame from "../images/Frame.png"
import axios from 'axios'
const Menu = () => {
  const [bg, setBg] = useState("FOOD");
  const[menu,setMenu]=useState([])
  
  const food=menu.filter((list)=>{return list.category===bg})
  console.log(food);
  

  const fetchData = async () => {
    try {
        const response = await axios.get(
            'http://localhost:7000/api/v1/menu/get-menu'
        );
        setMenu(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
      <div
        className="px-24 py-8 "
        style={{
          background: `url(${rect})`,
        }}
      >
        <div className="text-white flex justify-around mx-auto w-[400px] font-bold text-[20px] ">
          <button
            onClick={() => setBg("FOOD")}
            className={
              bg === "FOOD"
                ? "border border-[#0796ef] py-2 px-6 bg-[#0796ef]"
                : "border border-[#0796ef] py-2 px-6 "
            }
          >
            FOOD
          </button>
          <button
            onClick={() => setBg("DRINKS")}
            className={
              bg === "DRINKS"
                ? "border border-[#0796ef] py-2 px-6 bg-[#0796ef]"
                : "border border-[#0796ef] py-2 px-6 "
            }
          >
            DRINKS
          </button>
          <button
            onClick={() => setBg("BRUNCH")}
            className={
              bg === "BRUNCH"
                 ? "border border-[#0796ef] py-2 px-6 bg-[#0796ef]"
                : "border border-[#0796ef] py-2 px-6 "
            }
          >
            BRUNCH
          </button>
        </div>
      </div>
<div className=" relative " >
<img className="absolute left-[-27px] " src={frame}  alt="" />
      <div className="mx-24">
       
        <div className=" mx-auto border border-white text-center">
          <div className="text-white items-center text-[30px] font-bold flex justify-between ">
           
              <div className="mt-[-85px] ml-[-85px]" >
                <img className="bige:w-[263px] laptop:w-[175px] ipad:w-[175px] bige:h-[233px] laptop:h-[175px]" src={drinkLeft} alt="" />
              </div>
            
            {/* <img className="ipad:w-[100px] laptop:w-[140px] bige:w-[180px] " src={drinks} alt="" /> */}
            <h2>{bg}</h2>
            <div className="mt-[-65px] mr-[-65px]"  >
              <img className="bige:w-[263px] laptop:w-[175px] ipad:w-[175px] bige:h-[233px] laptop:h-[175px]"src={drinkRight} alt="" />
            </div>
          </div>
          <div className="text-white  grid grid-cols-1 laptop:grid-cols-2 gap-x-[80px] gap-y-9 ">
            {food.map((list)=>{
              return(
                <div className="my-5 mx-10" >
            
                <h4 className="font-gorditaBold text-[20px]   " >
                  {list.name}......................................................${list.price}
                </h4>
                <h6 className="font-gordita" >{list.description}</h6>
              </div>
              )
              
            })}
         
            
         
            
          </div>
        </div>
      </div>
      <div className="px-24 my-14 ">
        <div className=" mx-auto border border-white ">
          <div className="text-white items-center text-[30px] font-bold flex  relative ">
           
              <div className="mt-[-192px] ml-[-85px]" >
                <img className=" ipad:w-[263px] ipad:h-[340px] w-[175px] h-[250px]" src={drinkTop} alt="" />
              </div>
            <div className="laptop:ml-[60px] bige:ml-[233px] ipad:ml-0" >

            <img className="ipad:w-[250px] laptop:w-[350px] bige:w-[450px] " src={brunch} alt="" />
            </div>
            <div   >
              <img className=" bige:top-[160px] laptop:w-[226px] laptop:h-[274px] absolute right-0 ipad:w-[175px] ipad:h-[245px] ipad:top-[300px] top-[250px] laptop:top-[206px]" src={drinkBottom} alt="" />
            </div>
          </div>
          <div className="text-white  grid grid-cols-1 laptop:grid-cols-2 gap-x-[80px] gap-y-9 ">
          <div className="my-5 mx-10" >
            
              <h4 className="font-gorditaBold text-[20px]  " >
                LYCHEETINI......................................................$14
              </h4>
              <h6 className="font-gordita" >229 Vodka ,vermouth,lychee juice,fresh lime juice</h6>
            </div>
            <div className="my-5 mx-10" >
            
              <h4 className="font-gorditaBold text-[20px] " >
                LYCHEETINI......................................................$14
              </h4>
              <h6 className="font-gordita" >229 Vodka ,vermouth,lychee juice,fresh lime juice</h6>
            </div>
            <div className="my-5 mx-10" >
            
            <h4 className="font-gorditaBold text-[20px] " >
              LYCHEETINI......................................................$14
            </h4>
            <h6 className="font-gordita" >229 Vodka ,vermouth,lychee juice,fresh lime juice</h6>
          </div>
          
          </div>
        </div>
      </div>



      <div className="px-24" >
        <div className="border border-gray-400 px-10 py-10" >
          <div  >

          <img className="mx-auto my-7" src={hukka} alt="" />
          </div>
          <div>
            <ul className="flex justify-between text-white font-gorditaMedium" >
              <li>ORANGE MINT</li>
              <li>BLUE MIST</li>
              <li>MIGHTY FREEZE</li>
              <li>LUV 66</li>
              <li>PEACH</li>
              <li>WATERMELON</li>
            </ul>
          </div>
        </div>

        <div className="text-center my-14" >
          <button className="text-white p-5 bg-[#0796ef]" >ORDER ONLINE</button>
        </div>
      </div>


      <div className="px-24" >
        <div className="text-white flex justify-between bg-[#c5a059] py-5 font-gorditaMedium " >
          <div className="px-5" ><h3>Food may not be refunded. If your food was made <br />incorrectly we will remake it for you.</h3></div>
          <div className=" px-5 border-x-2 border-dotted" >
            <h3>18% service charge will be added to all checks over $100.</h3>
          </div>
          <div className="px-5" >
            <h3>
            Consuming raw or undercooked meats, poultry,<br /> seafood, shellfish or eggs may increase your risk of <br /> foodborne illness
            </h3>
          </div>
        </div>
      </div>
      <img className="absolute top-0 right-0 w-[95px]" src={frame}  alt="" />
</div>



    </div>
  );
};

export default Menu;
