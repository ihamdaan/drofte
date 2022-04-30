import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import register_img from "../../images/register.svg"
import { loadUser, registerUser } from "../../Redux/Action/userActions";
import { useAlert } from 'react-alert'
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";


//Mobile Screen
const NavSm = ({ state, handleChange, handleSubmit }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="text-black mx-1">
                <div className=" w-full pt-14">
                    <img src={register_img} alt="register_img" />
                </div>
                <div className="mb-12 mt-14">
                    <h1 className="text-bms-400 text-5xl font-semibold">Sign Up!</h1>
                </div>

                <form className="my-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullname" className="text-xl">Full Name</label> <br />
                        <input type="text" placeholder="eg: Katy Ceren" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="name" value={state.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-xl">Official Email</label> <br />
                        <input type="email" placeholder="eg: 00ABC000@cuchd.in" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="email" value={state.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-xl">UID</label> <br />
                        <input type="text" placeholder="eg: ikayc96#" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="UID" value={state.UID} onChange={handleChange} required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-xl">Password</label> <br />
                        <input type="password" placeholder="password" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="password" value={state.password} onChange={handleChange} required />
                        <div className='my-4 text-gray-300 text-sm'>
                            Entered password must contain at least 8 characters (12+ recommended), one uppercase letter, one lowercase letter, at least one number, at least one special character.
                        </div>
                    </div>
                    <button className="text-white bg-bms-400 px-3 py-2 text-lg mx-1 hover:bg-white hover:text-bms-600 rounded-lg focus:bg-bms-100 focus:text-gray-500" type="submit">Register</button>

                </form>
                <div className="mb-2">
                    <span><h3 className="text-gray-400">Already have an account? <span className="cursor-pointer text-bms-400 hover:font-semibold underline underline-offset-4" onClick={() => navigate("/signin")}>Sign In</span></h3></span>
                    <span><h3 className="text-gray-400 hover:text-red-600 cursor-pointer" onClick={() => navigate("/password/forget")}>Forgot Password?</h3></span>
                </div>

            </div>
        </>
    );
};

//Tab Screen
const NavMd = ({ state, handleChange, handleSubmit }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="text-black mx-4 my-2 flex justify-center items-center gap-9">
                <div className="w-full order-2">
                    <div className="mb-12 mt-8">
                        <h1 className="text-bms-400 text-5xl font-bold">Sign Up!</h1>
                    </div>
                    <form className="my-6" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullname" className="text-xl">Full Name</label> <br />
                            <input type="text" placeholder="eg: Katy Ceren" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="name" value={state.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-xl">Official Email</label> <br />
                            <input type="email" placeholder="eg: 00ABC000@cuchd.in" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="email" value={state.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="text-xl">UID</label> <br />
                            <input type="text" placeholder="eg: ikayc96#" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="UID" value={state.UID} onChange={handleChange} required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="text-xl">Password</label> <br />
                            <input type="password" placeholder="password" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" name="password" value={state.password} onChange={handleChange} required />
                            <div className='my-4 text-gray-300 text-sm'>
                                Entered password must contain at least 8 characters (12+ recommended), one uppercase letter, one lowercase letter, at least one number, at least one special character.
                            </div>
                        </div>
                        <div className="flex gap-4 justify-end">
                            <button className="text-white bg-bms-400 px-3 py-2 text-lg hover:bg-white hover:text-bms-600 rounded-lg focus:bg-bms-100 focus:text-gray-500" type="submit">Register</button>
                        </div>
                    </form>
                    <div className="flex justify-end">
                        <div className="mb-2">
                            <span><h3 className="text-gray-400">Already have an account? <span className="cursor-pointer hover:font-semibold underline underline-offset-4" onClick={() => navigate("/signin")}>Sign In</span></h3></span>
                            <span><h3 className="text-gray-400 hover:text-red-600 cursor-pointer" onClick={() => navigate("/password/forget")}>Forgot Password?</h3></span>
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
const NavLg = ({ state, handleChange, handleSubmit }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-bms-400 my-6 rounded-lg drop-shadow-2xl">
                <div className="text-white mx-20 my-2 flex justify-center items-center gap-9">
                    <div className="w-full order-2">
                        <div className="mb-12 mt-8">
                            <h1 className="text-5xl font-semibold">Sign Up!</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="my-6">
                                <div className="mb-4">
                                    <label htmlFor="fullname" className="text-xl">Full Name</label> <br />
                                    <input type="text" name="name" placeholder="eg: Katy Ceren" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" title="enter your full name" required onChange={handleChange} value={state.name} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="text-xl">Email</label> <br />
                                    <input type="email" name="email" placeholder="eg: 00ABC000@cuchd.in" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" title="enter your official email" required onChange={handleChange} value={state.email} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="username" className="text-xl">UID</label> <br />
                                    <input type="text" name="UID" placeholder="eg: ikayc96#" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" title="enter your UID" required onChange={handleChange} value={state.UID} />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="text-xl">Password</label> <br />
                                    <input type="password" name="password" placeholder="password" className=" w-full text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" title="create a strong password" required onChange={handleChange} value={state.password} />
                                    <div className='my-4 text-gray-300 text-sm'>
                                        Entered password must contain at least 6 characters (12+ recommended), one uppercase letter, one lowercase letter, at least one number, at least one special character.
                                    </div>
                                </div>
                                <div className="flex gap-4 justify-end">
                                    <button className="text-bms-400 bg-gray-50 px-3 py-2 text-lg hover:bg-white hover:text-bms-600 rounded-lg focus:bg-bms-100 focus:text-gray-500" type="submit" >Register</button>
                                </div>
                            </div>
                        </form>
                        <div className="flex justify-end">
                            <div className="mb-2">
                                <span><h3 className="text-white">Already have an account? <span className="cursor-pointer hover:font-semibold underline underline-offset-4 transition-all ease-in-out delay-150 " onClick={() => navigate("/signin")}>Sign In</span></h3></span>
                                <span><h3 className="text-white hover:text-red-600 cursor-pointer" onClick={() => navigate("/password/forget")}>Forgot Password?</h3></span>
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

    const alert = useAlert()
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const { user, error, loading } = useSelector(state => state.user)
    const [state, setstate] = useState({
        name: "",
        email: "",
        UID: "",
        password: ""
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setstate({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(state));
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: "CLEAR_ERRORS" })
        }
        if (user) {
            alert.success(`Logged in successfully`);
            loadUser()
            Navigate("/")
        }
    }, [error, user, alert, dispatch, Navigate])


    return (
        <>
            {loading ? <Loader /> :
                <div className="bg-gray-50 px-6 md:px-10">
                    <div className="md:hidden lg:hidden">
                        {/*Small Screen*/}
                        <NavSm state={state} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </div>

                    <div className="sm:hidden lg:hidden md:flex">
                        {/*Medium Screen*/}
                        <NavMd state={state} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </div>

                    <div className="sm:hidden md:hidden lg:flex">
                        {/*Large Screen*/}
                        <NavLg state={state} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </div>
                </div>}
        </>
    );
};


export default SignUpPageBody;