import React from "react";
import login__img from "../../images/login.svg"

//Mobile Screen
const NavSm = () => {
  return(
    <>
    <div className="text-black mx-6">
        <div className="mb-12 mt-8">
            <h1 className="text-5xl font-semibold">Sign In!</h1>
        </div>
        <div className="my-8">
            <div className="mb-6">
                <label htmlFor="username" className="text-2xl">Username</label> <br />
                <input type="text" placeholder="eg: dobbeX@19" className="text-2xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
            </div>
            <div className="mb-8">
                <label htmlFor="password" className="text-2xl">Password</label> <br />
                <input type="password" placeholder="password" className="text-2xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
            </div>
            <button className="text-white bg-bms-400 px-3 py-2 text-2xl rounded-lg focus:bg-bms-100 focus:text-gray-500">Sign In</button>
        </div>
        <div className="my-6">
            <span><h3 className="text-gray-400 hover:text-red-400">Forgot Password?</h3></span>
            <span><h3 className="text-gray-400">Don't have an account? <span className="hover:text-bms-500 underline underline-offset-4">Sign Up</span></h3></span>
        </div>
        <div className=" w-full mt-16">
            <img src={login__img} alt="login__img" />
        </div>
    </div>
  </>
  );
};

//Tab Screen
const NavMd = () => {
  return(
    <>
      <div className="text-black mx-8 my-8 flex justify-center items-center">
        <div className="w-full">
            <div className="mb-12 mt-8">
                <h1 className="text-5xl font-semibold">Sign In!</h1>
            </div>
            <div className="my-8">
                <div className="mb-6">
                    <label htmlFor="username" className="text-xl">Username</label> <br />
                    <input type="text" placeholder="eg: kobey#93" className=" w-5/6 text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                </div>
                <div className="mb-8">
                    <label htmlFor="password" className="text-xl">Password</label> <br />
                    <input type="password" placeholder="password" className=" w-5/6 text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                </div>
                <button className="text-white bg-bms-400 px-3 py-2 text-lg rounded-lg focus:bg-bms-100 focus:text-gray-500">Sign In</button>
            </div>
            <div className="my-6">
                <span><h3 className="text-gray-400 hover:text-red-400 cursor-pointer">Forgot Password?</h3></span>
                <span><h3 className="text-gray-400">Don't have an account? <span className="cursor-pointer hover:text-bms-500 underline underline-offset-4">Sign Up</span></h3></span>
            </div>
        </div>
        <div>
            <div className=" w-full mt-16">
                <img src={login__img} alt="login__img" />
            </div>
        </div>
    </div>
    </>
  );
};

//Laptop Screen
const NavLg = () => {
  return(
  <>
    <div className="bg-bms-400 mx-16 my-6 rounded-lg drop-shadow-2xl">
        <div className="text-white mx-12 my-2 flex justify-center items-center">
            <div className="w-full">
                <div className="mb-12 mt-8">
                    <h1 className="text-5xl font-semibold">Sign In!</h1>
                </div>
                <div className="my-8">
                    <div className="mb-6">
                        <label htmlFor="username" className="text-xl">Username</label> <br />
                        <input type="text" placeholder="eg: kobey#93" className=" w-3/4 text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-8">
                        <label htmlFor="password" className="text-xl">Password</label> <br />
                        <input type="password" placeholder="password" className=" w-3/4 text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <button className="text-bms-400 bg-gray-200 px-3 py-2 text-lg hover:bg-white rounded-lg focus:bg-bms-100 focus:text-gray-500">Sign In</button>
                </div>
                <div className="my-6">
                    <span><h3 className="text-white hover:text-red-600 cursor-pointer">Forgot Password?</h3></span>
                    <span><h3 className="text-white">Don't have an account? <span className="cursor-pointer hover:font-semibold underline underline-offset-4">Sign Up</span></h3></span>
                </div>
            </div>
            <div>
                <div className=" w-full mt-16">
                    <img src={login__img} alt="login__img" />
                </div>
            </div>
        </div>
    </div>
  </>
  );
};


//Main Function to export
const SignInPageBody = () => {
  return(
    <>
      <nav className="bg-gray-50 p-4">
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


export default SignInPageBody;