import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import login__img from "../../images/login.svg";
import { loadUser, loginUser } from "../../Redux/Action/userActions";
import Loader from "../Loader/Loader";

//Mobile Screen
const NavSm = ({ handleSubmit, state, handleChange, navigate }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="text-black mx-1">
        <div className="mb-12 mt-8">
          <h1 className="text-bms-400 text-5xl font-semibold">Sign In!</h1>
        </div>
        <div className="my-8">
          <div className="mb-6">
            <label htmlFor="username" className="text-2xl">Username</label> <br />
            <input type="text" placeholder="eg: dobbeX@19" className="w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="email" value={state.email} onChange={handleChange} required />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="text-2xl">Password</label> <br />
            <input type="password" placeholder="password" className="w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="password" value={state.password} onChange={handleChange} required />
          </div>
          <button className="text-white bg-bms-400 px-3 py-2 text-2xl rounded-lg focus:bg-bms-100 focus:text-gray-500" type="submit">Sign In</button>
        </div>
        <div className="my-6">
          <span><h3 className="text-gray-400 hover:text-red-400" onClick={() => navigate("/password/forget")}>Forgot Password?</h3></span>
          <span><h3 className="text-gray-400">Don't have an account? <span className="text-bms-400 hover:text-bms-500 underline underline-offset-4" onClick={() => navigate("/signup")}>Sign Up</span></h3></span>
        </div>
        <div className=" w-full mt-16">
          <img src={login__img} alt="login__img" />
        </div>
      </form>
    </>
  );
};

//Tab Screen
const NavMd = ({ handleSubmit, state, handleChange, navigate }) => {
  return (
    <>
      <div className="text-black mx-8 my-8 flex justify-center items-center">
        <form method="post" onSubmit={handleSubmit} className="w-full">
          <div className="mb-12 mt-8">
            <h1 className="text-bms-400 text-5xl font-bold">Sign In!</h1>
          </div>
          <div className="my-8">
            <div className="mb-6">
              <label htmlFor="email" className="text-xl">Email</label> <br />
              <input type="text" placeholder="eg: kobey#93" className=" w-5/6 text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" name="email" onChange={handleChange} value={state.email} required />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="text-xl">Password</label> <br />
              <input type="password" placeholder="password" className=" w-5/6 text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" name="password" onChange={handleChange} value={state.password} required />
            </div>
            <button className="text-white bg-bms-400 px-3 py-2 text-lg rounded-lg focus:bg-bms-100 focus:text-gray-500" type="submit">Sign In</button>
          </div>
          <div className="my-6">
            <span><h3 className="text-gray-400 hover:text-red-400 cursor-pointer" onClick={() => navigate("/password/forget")}>Forgot Password?</h3></span>
            <span><h3 className="text-gray-400">Don't have an account? <span className="cursor-pointer hover:text-bms-500 underline underline-offset-4" onClick={() => navigate("/signup")}>Sign Up</span></h3></span>
          </div>
        </form>
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
const NavLg = ({ handleSubmit, state, handleChange, navigate }) => {
  return (
    <>
      <div className="bg-bms-400 mx-12 my-6 rounded-lg drop-shadow-2xl">
        <div className="text-white mx-12 my-2 flex justify-center items-center">
          <div className="w-full">
            <form onSubmit={handleSubmit} method="post">
              <div className="mb-12 mt-8">
                <h1 className="text-5xl font-semibold">Sign In!</h1>
              </div>
              <div className="my-8">
                <div className="mb-6">
                  <label htmlFor="email" className="text-xl">Email</label> <br />
                  <input type="email" placeholder="eg: 00ABC000@cuchd.in" className=" w-3/4 text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" title="enter your official email" required name="email" value={state.email} onChange={handleChange} />
                </div>
                <div className="mb-8">
                  <label htmlFor="password" className="text-xl">Password</label> <br />
                  <input type="password" placeholder="Enter your Password" className=" w-3/4 text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" title="enter password" required name="password" value={state.password} onChange={handleChange} />
                </div>
                <button className="text-bms-400 bg-gray-200 px-3 py-2 text-lg hover:bg-white rounded-lg focus:bg-bms-100 focus:text-gray-500" type="submit">Sign In</button>
              </div>
              <div className="my-6">
                <span><h3 className="text-white hover:text-red-600 cursor-pointer" onClick={() => navigate("/password/forget")}>Forgot Password?</h3></span>
                <span><h3 className="text-white">Don't have an account? <span className="cursor-pointer hover:font-semibold underline underline-offset-4" onClick={() => navigate("/signup")} >Sign Up</span></h3></span>
              </div>
            </form>
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

  const Navigate = useNavigate()
  const alert = useAlert()
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(state => state.user);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(state));
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch({ type: "CLEAR_ERRORS" })
    }
    if (isAuthenticated === true) {
      alert.success(`Logged in successfully`);
      loadUser()
      Navigate("/")
    }
  }, [error, isAuthenticated, alert, dispatch, Navigate])

  return (
    <>
      {
        loading ? <Loader /> :
          <div className="bg-gray-50 p-4">
            <div className="md:hidden ">
              {/*Small Screen*/}
              <NavSm handleSubmit={handleSubmit} state={state} handleChange={handleChange} navigate={Navigate} />
            </div>

            <div className="hidden md:flex lg:hidden">
              {/*Medium Screen*/}
              <NavMd handleSubmit={handleSubmit} state={state} handleChange={handleChange} navigate={Navigate} />
            </div>

            <div className="hidden lg:flex">
              {/*Large Screen*/}
              <NavLg handleSubmit={handleSubmit} state={state} handleChange={handleChange} navigate={Navigate} />
            </div>
          </div>
      }
    </>
  );
};


export default SignInPageBody;