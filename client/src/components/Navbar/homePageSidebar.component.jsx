import React, { useState } from 'react';
import '../../../src/index.css';
import LogoutModal from "../LogoutModal/logoutModal.component";
import SignInModal from '../SignInModal/signinModal.component';

import { IoIosArrowBack } from 'react-icons/io';
import { IoExitOutline } from 'react-icons/io5';
import { BiHomeCircle, BiPlusCircle, BiUserCircle } from 'react-icons/bi';
import { AiOutlineSolution } from 'react-icons/ai';
import { RiQuestionnaireLine, RiSettingsLine } from 'react-icons/ri';
import { CgNotifications, CgProfile } from 'react-icons/cg';

import { Link, useLocation, useNavigate } from "react-router-dom";

import drofte__logo from "../../images/drofte_logo_blue.svg";
import drofte__logo__icon from "../../images/drofte-icon_blue.svg";
import test__img from "../../images/test_img.jpg";
import { useSelector } from 'react-redux';

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
              <img src={drofte__logo} alt="drofte_logo" className="w-80" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//Tab Screen
const NavMd = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logoutModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <LogoutModal setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className="">
        <div className="right__border__line min-h-screen top-0 bottom-0 lg:left-0 p-2 w-5/6 overflow-y-auto text-center h-full">
          <div className="flex flex-col justify-between h-full items-center">
            <div className="py-1">
              <div className="mb-5 w-10">
                <img src={drofte__logo__icon} alt="drofte_logo" className="w-full" />
              </div>

              <div className='flex flex-col items-center'>
                <button title='Home' className="my-4 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full">
                  <div className="w-8 h-8">
                    <BiHomeCircle className="w-full h-full" />
                  </div>
                </button>

                <button title='Your Queries' className="my-4 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full">
                  <div className="w-8 h-8">
                    <RiQuestionnaireLine className="w-full h-full" />
                  </div>
                </button>

                <button title='Your Remarks' className="my-4 flex rounded-xl gap-4 hover:drop-shadow-sm
                    focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full">
                  <div className="w-8 h-8">
                    <AiOutlineSolution className="w-full h-full" />
                  </div>
                </button>

                <button title='Notifications' className="my-4 flex rounded-xl gap-4 hover:drop-shadow-sm
                    focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full">
                  <div className="w-8 h-8">
                    <CgNotifications className="w-full h-full" />
                  </div>
                </button>

                <button title='Profile' className="my-4 flex rounded-xl gap-4 hover:drop-shadow-sm
                    focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full">
                  <div className="w-8 h-8">
                    <CgProfile className="w-full h-full" />
                  </div>
                </button>

                <button title='Settings' className="my-4 flex rounded-xl gap-4 hover:drop-shadow-sm
                    focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full">
                  <div className="w-8 h-8">
                    <RiSettingsLine className="w-full h-full" />
                  </div>
                </button>
              </div>

              <button className="hidden my-5 text-xl w-full bg-bms-400 text-white px-4 py-2 font-semibold rounded-3xl">
                Discuss
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <button onClick={logoutModal} className="w-8 h-8 text-red-500 hover:text-red-700 cursor-pointer" title="Logout?">
                <IoExitOutline className="h-full w-full" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

//Laptop Screen
const NavLg = ({ user }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false);

  const Navigate = useNavigate()
  const location = useLocation()

  const logoutModal = () => {
    setIsOpen(true);
  };

  const signinModal = () => {
    setIsSignOpen(true);
  };

  return (
    <>
      <SignInModal setIsSignOpen={setIsSignOpen} isSignOpen={isSignOpen} />
      <LogoutModal setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className="">
        <div className="right__border__line min-h-screen top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="px-5 py-1">
              <div className="mb-5">
                <img src={drofte__logo} alt="drofte_logo" className="w-80" />
              </div>

              <Link to={"/home"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/home" ? "text-bms-500 bg-gray-100 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <BiHomeCircle className="w-full h-full" />
                </div>
                <div className="text-xl">Home</div>
              </Link>

              <Link to={"/queries"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/queries" ? "text-bms-500 bg-gray-100 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <RiQuestionnaireLine className="w-full h-full" />
                </div>
                <div className="text-xl">Your Queries</div>
              </Link>

              <Link to={"/remarks"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/remarks" ? "text-bms-500 bg-gray-100 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <AiOutlineSolution className="w-full h-full" />
                </div>
                <div className="text-xl">Your Remarks</div>
              </Link>

              <Link to={"/profile"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/profile" ? "text-bms-500 bg-gray-100 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <CgProfile className="w-full h-full" />
                </div>
                <div className="text-xl">Profile</div>
              </Link>

              <Link to={"/question/new"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/question/new" ? "text-bms-500 bg-gray-100 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <BiPlusCircle className="w-full h-full" />
                </div>
                <div className="text-xl">Ask Question</div>
              </Link>

              <Link to={"/settings"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/settings" ? "text-bms-500 bg-gray-100 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <RiSettingsLine className="w-full h-full" />
                </div>
                <div className="text-xl">Settings</div>
              </Link>

              {/* <button className="hidden my-5 text-xl w-full bg-bms-400 text-white px-4 py-2 font-semibold rounded-3xl">
                Discuss
              </button> */}
            </div>

            <div className="flex gap-3 p-3 items-center">
              {
                user ?
                  <>
                    <div className="object-cover w-11 h-11">
                      <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full" />
                    </div>

                    <div className="text-xl leading-5">
                      {user.name} <br />
                      <span className="text-sm text-gray-400">@{user.UID}</span>
                    </div>

                    <button onClick={logoutModal} className="w-9 h-9 text-red-500 hover:text-red-700 cursor-pointer" title="Logout?">
                      <IoExitOutline className="h-full w-full" />
                    </button>
                  </>
                  :
                  <div className='flex flex-col w-full mx-7'>
                    <button onClick={signinModal} className="mb-4 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-blue-400 hover:bg-transparent w-full bg-blue-400 text-white font-bold">
                      <div className="w-8 h-8">
                        <BiUserCircle className="w-full h-full" />
                      </div>
                      <div className="text-xl">Login</div>
                    </button>
                    <button className=" p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-blue-400 hover:bg-transparent w-full bg-blue-400 text-white font-bold" onClick={() => Navigate("/signup")}>
                      <div className="w-8 h-8">
                        <BiUserCircle className="w-full h-full" />
                      </div>
                      <div className="text-xl">Register</div>
                    </button>
                  </div>
              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
};


//Main Function to export
const HomeSidebar = () => {
  const { user } = useSelector(state => state.user)
  return (
    <>
      <div className="">
        <div className="md:hidden">
          {/*Small Screen*/}
          <NavSm user={user} />
        </div>

        <div className="hidden md:flex lg:hidden">
          {/*Medium Screen*/}
          <NavMd user={user} />
        </div>

        <div className="hidden lg:flex">
          {/*Large Screen*/}
          <NavLg user={user} />
        </div>
      </div>
    </>
  );
};


export default HomeSidebar;