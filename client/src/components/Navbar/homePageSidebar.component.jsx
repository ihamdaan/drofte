import React, { useState } from 'react';
import '../../../src/index.css';
import LogoutModal from "../LogoutModal/logoutModal.component";

import { IoIosArrowBack } from 'react-icons/io';
import { IoExitOutline } from 'react-icons/io5';
import { BiHomeCircle, BiPlusCircle } from 'react-icons/bi';
import { AiOutlineSolution } from 'react-icons/ai';
import { RiQuestionnaireLine, RiSettingsLine } from 'react-icons/ri';
import { CgNotifications, CgProfile } from 'react-icons/cg';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';

import { Link, useLocation, useNavigate } from "react-router-dom";

import drofte__logo from "../../images/drofte_logo_blue.svg";
import drofte__logo__icon from "../../images/drofte-icon_blue.svg";
import test__img from "../../images/test_img.jpg";
import { useSelector } from 'react-redux';
import SignInModal from '../SignInModal/signinModal.component';

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
  const [isSignOpen, setIsSignOpen] = useState(false);
  const Navigate = useNavigate()
  const location = useLocation()

  const logoutModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <LogoutModal setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className="">
        <div className="right__border__line top-0 bottom-0 lg:left-0 p-2 w-5/6 overflow-y-auto text-center h-full">
          <div className="flex flex-col  h-full items-center">
            <div className="py-1 my-5">
              <div className="mb-5 w-10">
                <img src={drofte__logo__icon} alt="drofte_logo" className="w-full" />
              </div>

              <div className='flex flex-col items-center'>
                <Link to="/" title='Home' className={`my-4 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/" ? "text-bms-500" : ""} `}>
                  <div className="w-8 h-8">
                    <BiHomeCircle className="w-full h-full" />
                  </div>
                </Link>


                <Link to="/queries" title='Your Queries' className={`my-4 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/queries" ? "text-bms-500" : ""} `}>
                  <div className="w-8 h-8">
                    <RiQuestionnaireLine className="w-full h-full" />
                  </div>
                </Link>

                <Link to="/remarks" title='Your Remarks' className={`my-4 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/remarks" ? "text-bms-500" : ""} `}>
                  <div className="w-8 h-8">
                    <AiOutlineSolution className="w-full h-full" />
                  </div>
                </Link>

                <Link to="/profile" title='Profile' className={`my-4 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/profile" ? "text-bms-500" : ""} `}>
                  <div className="w-8 h-8">
                    <CgProfile className="w-full h-full" />
                  </div>
                </Link>

                <Link to="/question/new" title='Ask Question' className={`my-4 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/question/new" ? "text-bms-500" : ""} `}>
                  <div className="w-8 h-8">
                    <RiSettingsLine className="w-full h-full" />
                  </div>
                </Link>
              </div>

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

  return (
    <>
      <LogoutModal setIsOpen={setIsOpen} isOpen={isOpen} />
      {user ? "" :
        <SignInModal setIsSignOpen={setIsSignOpen} isSignOpen={isSignOpen} />
      }
      <div className="">
        <div className="right__border__line top-0 min-h-screen bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center h-full">
          <div className="flex flex-col justify-evenly h-full">
            <div className="px-5 py-1">
              <div className="mb-5">
                <img src={drofte__logo} alt="drofte_logo" className="w-80" />
              </div>

              <Link to={"/"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/" ? "text-bms-500 bg-gray-200 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <BiHomeCircle className="w-full h-full" />
                </div>
                <div className="text-xl">Home</div>
              </Link>

              <Link to={"/queries"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/queries" ? "text-bms-500 bg-gray-200 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <RiQuestionnaireLine className="w-full h-full" />
                </div>
                <div className="text-xl">Your Queries</div>
              </Link>

              <Link to={"/remarks"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/remarks" ? "text-bms-500 bg-gray-200 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <AiOutlineSolution className="w-full h-full" />
                </div>
                <div className="text-xl">Your Remarks</div>
              </Link>

              <Link to={"/profile"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/profile" ? "text-bms-500 bg-gray-200 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <CgProfile className="w-full h-full" />
                </div>
                <div className="text-xl">Profile</div>
              </Link>

              <Link to={"/question/new"} className={`my-2 p-2 flex rounded-xl gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-bms-500 hover:bg-gray-50 w-full ${location.pathname === "/question/new" ? "text-bms-500 bg-gray-200 font-bold " : ""} `} >
                <div className="w-8 h-8">
                  <BiPlusCircle className="w-full h-full" />
                </div>
                <div className="text-xl">Ask Question</div>
              </Link>
            </div>

            {
              user ?
                <>
                  <div className="flex gap-2 p-3 items-center justify-evenly">
                    <div className="">
                      <img src={user?.profilePhoto?.url || test__img} alt="profile_pic" className="rounded-full object-cover h-11 w-11" />
                    </div>

                    <div className="text-xl leading-5">
                      {user.name} <br />
                      <span className="text-sm text-gray-400">@{user.UID}</span>
                    </div>
                  </div>
                  <div className="px-5">
                    <div onClick={logoutModal} className="flex text-red-700 hover:text-white hover:bg-red-600 cursor-pointer bg-red-100 justify-center rounded-md gap-2 pr-2 w-full mb-5">
                      <button type='button'>Logout </button>
                      <IoExitOutline className="w-6 h-9 " />
                    </div>
                  </div>
                </>
                :
                <div className='flex gap-2 p-3 items-center'>
                  <div className='flex flex-col w-full mx-7'>
                    <button className="mb-4 p-2 flex rounded-md gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-blue-400 hover:bg-gray-100 w-full bg-blue-400 text-white font-bold" onClick={() => Navigate("/signin")}>
                      <div className="w-8 h-8">
                        <PermIdentityTwoToneIcon className="w-full h-full" />
                      </div>
                      <div className="text-lg">Login</div>
                    </button>
                    <button className=" p-2 flex rounded-md gap-4 hover:drop-shadow-sm focus:font-bold items-center cursor-pointer hover:text-blue-400 hover:bg-gray-100 w-full bg-blue-400 text-white font-bold" onClick={() => Navigate("/signup")}>
                      <div className="w-8 h-8">
                        <PersonAddAltTwoToneIcon className="w-full h-full" />
                      </div>
                      <div className="text-lg">Register</div>
                    </button>
                  </div>
                </div>
            }

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
        <div className="md:hidden sm:flex">
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