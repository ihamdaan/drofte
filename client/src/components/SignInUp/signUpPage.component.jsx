import React from "react";
import register_img from "../../images/register.svg"

//Mobile Screen
const NavSm = () => {
  return(
    <>
    <div className="text-black mx-6">
        <div className=" w-full mt-14">
            <img src={register_img} alt="register_img" />
        </div>
        <div className="mb-12 mt-14">
            <h1 className="text-5xl font-semibold">Sign Up!</h1>
        </div>
        <div className="my-6">
                    <div className="mb-4">
                        <label htmlFor="fullname" className="text-xl">Full Name</label> <br />
                        <input type="text" placeholder="eg: Katy Ceren" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-xl">Email</label> <br />
                        <input type="email" placeholder="eg: kayceren7@xyz.com" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-xl">Username</label> <br />
                        <input type="text" placeholder="eg: ikayc96#" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-xl">Password</label> <br />
                        <input type="password" placeholder="password" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                        <button className="text-gray-500 bg-gray-300 px-3 py-2 mx-2 text-lg hover:bg-red-500 hover:text-white rounded-lg focus:bg-bms-100 focus:text-gray-500">Cancel</button>
                        <button className="text-white bg-bms-400 px-3 py-2 text-lg mx-1 hover:bg-white hover:bg-white hover:text-bms-600 rounded-lg focus:bg-bms-100 focus:text-gray-500">Submit</button>
                
                </div>
                    <div className="mb-2">
                        <span><h3 className="text-gray-400">Already have an account? <span className="cursor-pointer hover:font-semibold underline underline-offset-4">Sign In</span></h3></span>
                        <span><h3 className="text-gray-400 hover:text-red-600 cursor-pointer">Forgot Password?</h3></span>
                    </div>

    </div>
  </>
  );
};

//Tab Screen
const NavMd = () => {
  return(
    <>
      <div className="text-black mx-4 my-2 flex justify-center items-center gap-9">
            <div className="w-full order-2">
                <div className="mb-12 mt-8">
                    <h1 className="text-5xl font-semibold">Sign Up!</h1>
                </div>
                <div className="my-6">
                    <div className="mb-4">
                        <label htmlFor="fullname" className="text-xl">Full Name</label> <br />
                        <input type="text" placeholder="eg: Katy Ceren" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-xl">Email</label> <br />
                        <input type="email" placeholder="eg: kayceren7@xyz.com" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-xl">Username</label> <br />
                        <input type="text" placeholder="eg: ikayc96#" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-xl">Password</label> <br />
                        <input type="password" placeholder="password" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <button className="text-gray-500 bg-gray-300 px-3 py-2 text-lg hover:bg-red-500 hover:text-white rounded-lg focus:bg-bms-100 focus:text-gray-500">Cancel</button>
                        <button className="text-white bg-bms-400 px-3 py-2 text-lg hover:bg-white hover:bg-white hover:text-bms-600 rounded-lg focus:bg-bms-100 focus:text-gray-500">Submit</button>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="mb-2">
                        <span><h3 className="text-gray-400">Already have an account? <span className="cursor-pointer hover:font-semibold underline underline-offset-4">Sign In</span></h3></span>
                        <span><h3 className="text-gray-400 hover:text-red-600 cursor-pointer">Forgot Password?</h3></span>
                    </div>
                </div>
            </div>
            <div>
                <div className="order-1 w-full mt-16">
                    <img src={register_img} alt="register_img" />
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
        <div className="text-white mx-20 my-2 flex justify-center items-center gap-9">
            <div className="w-full order-2">
                <div className="mb-12 mt-8">
                    <h1 className="text-5xl font-semibold">Sign Up!</h1>
                </div>
                <div className="my-6">
                    <div className="mb-4">
                        <label htmlFor="fullname" className="text-xl">Full Name</label> <br />
                        <input type="text" placeholder="eg: Katy Ceren" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-xl">Email</label> <br />
                        <input type="email" placeholder="eg: kayceren7@xyz.com" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-xl">Username</label> <br />
                        <input type="text" placeholder="eg: ikayc96#" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-xl">Password</label> <br />
                        <input type="password" placeholder="password" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100"/>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <button className="text-gray-400 bg-gray-100 px-3 py-2 text-lg hover:bg-red-500 hover:text-white rounded-lg focus:bg-bms-100 focus:text-gray-500">Cancel</button>
                        <button className="text-bms-400 bg-gray-50 px-3 py-2 text-lg hover:bg-white hover:bg-white hover:text-bms-600 rounded-lg focus:bg-bms-100 focus:text-gray-500">Submit</button>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="mb-2">
                        <span><h3 className="text-white">Already have an account? <span className="cursor-pointer hover:font-semibold underline underline-offset-4">Sign In</span></h3></span>
                        <span><h3 className="text-white hover:text-red-600 cursor-pointer">Forgot Password?</h3></span>
                    </div>
                </div>
            </div>
            <div>
                <div className="order-1 w-full mt-16">
                    <img src={register_img} alt="register_img" />
                </div>
            </div>
        </div>
    </div>
  </>
  );
};


//Main Function to export
const SignUpPageBody = () => {
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


export default SignUpPageBody;