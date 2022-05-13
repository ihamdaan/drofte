import React from "react";
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import drofte__logo from "../../images/drofte_logo.svg";
import drofte__logo__icon from "../../images/drofte_logo_icon.svg"

//Mobile Screen
const NavSm = () => {
  const Navigate = useNavigate()
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div className="w-full flex items-center">
          <div className="w-3/4">
            <div className="w-8 h-8" onClick={() => Navigate(-1)}>
              <IoIosArrowBack className="w-full h-full" />
            </div>
          </div>
          <div className="w-full">
            <div className="w-12">
              <img src={drofte__logo__icon} alt="drofte_logo" className="w-80"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//Tab Screen
const NavMd = () => {
  const Navigate = useNavigate()
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div className="w-full flex items-center cursor-pointer" onClick={() => Navigate(-1)}>
          <div className="w-8 h-8">
            <IoIosArrowBack className="w-full h-full" />
          </div>
          <div className="w-32">
            <img src={drofte__logo} alt="drofte_logo" className="w-80"/>
          </div>
        </div>
      </div>
    </>
  );
};

//Laptop Screen
const NavLg = () => {
  const Navigate = useNavigate()
  return (
    <>
      <div className="container mx-auto px-16 flex gap-3 items-center justify-between">
        <div className="flex items-center w-1/2">
          <div className="w-32">
            <img src={drofte__logo} alt="drofte_logo" className="w-80"/>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-200 text-s flex items-center hover:text-white cursor-pointer" onClick={() => Navigate(-1)}>
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

  return (
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