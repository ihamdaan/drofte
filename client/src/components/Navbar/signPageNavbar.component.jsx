import React from "react";
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';


//Mobile Screen
const NavSm = () => {
  return(
    <>
    <div className="text-white flex items-center justify-between">
      <div className="w-full flex">
        <div className="w-8 h-8">
          <IoIosArrowBack className="w-full h-full"/>
        </div>
        <h1 className="text-xl font-bold text-center tracking-widest w-full">
          DRØFTE
        </h1>
      </div>
    </div>
  </>
  );
};

//Tab Screen
const NavMd = () => {
  return(
    <>
    <div className="text-white flex items-center justify-between">
      <div className="w-full flex">
        <div className="w-8 h-8">
          <IoIosArrowBack className="w-full h-full"/>
        </div>
        <h1 className="text-xl font-bold tracking-widest">
          DRØFTE
        </h1>
      </div>
    </div>
  </>
  );
};

//Laptop Screen
const NavLg = () => {
  return(
  <>
    <div className="container mx-auto px-16 flex gap-3 justify-between">
      <div className="flex items-center w-1/2 gap-3">
        <div className="w-full">
        <h1 className="text-xl font-bold text-white tracking-widest w-full">
          DRØFTE
        </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-200 text-s flex items-center hover:text-red-600 cursor-pointer">
          <AiOutlineClose />
           Back
        </span>
      </div>
    </div>
  </>
  );
};


//Main Function to export
const SignNavbar = () => {
  return(
    <>
      <nav className="bg-bms-400 p-4 drop-shadow-lg">
        <div className="md:hidden">
          {/*Small Screen*/}
          <NavSm />
        </div>

        <div className="hidden md:flex lg:hidden">
          {/*Medium Screen*/}
          <NavMd />
        </div>

        <div className="hidden lg:flex">
          {/*Large Screen*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};


export default SignNavbar;