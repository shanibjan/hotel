import React from 'react';
import logo from '../images/Logo.png'
import bg from '../images/bg.png'

const NavBar = ({ }) => {
  return (
    <>
      <div className='px-24 pt-12 pb-4' >
        <div className='grid grid-cols-10 relative' >
          <div className='  col-span-4 ' >
            <div className='flex absolute top-[3px] '  >

            <img src={logo} alt="" />
            <div className='ml-4 text-[25px] font-extrabold'  >
              <div className='flex w-32 justify-between' >

                <h1 className='text-[#0796ef]' >DEEP </h1>
                <h1 className='text-gray-200' >NET </h1>
              </div>
              <h1 className='text-gray-500' >SOFT </h1>
            </div>
            </div>

          </div>
          <div className='col-span-6 ' >
            <ul className='text-gray-200 flex justify-between max-tablet:translate-x-full' >
              <li>HOME</li>
              <li className='text-[#0796ef]' >MENU</li>
              <li>MAKE A RESERVATION</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
        <div  className='px-24 pt-24 pb-12 text-center'
          style={{
            background:`url(${bg})`,
            
            
          }}>
          <h1 className='text-white text-[38px] font-semibold'  >MENU</h1>
          <p className='text-white' >Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br /> place an order, use the "Order Online" button located below the menu.</p>
        </div>
    </>
  );
};

export default NavBar;