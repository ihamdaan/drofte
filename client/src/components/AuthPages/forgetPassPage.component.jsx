import React, { useEffect, useState } from 'react';
import forget_pass_img from "../../images/forgot_password.svg";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from "../../Redux/Action/userActions"
import { useAlert } from 'react-alert';
import Loader from "../Loader/Loader"

const ForgetPassPage = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const { message, error, loading } = useSelector(state => state.user)

    const alert = useAlert();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(forgotPassword(email))
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "CLEAR_ERRORS" })
        }
        if (message) {
            alert.success("Email sent successfully");
            Navigate("/signin")
            dispatch({ type: "FORGOT_RESET" })
        }
    }, [error, message, alert, dispatch, Navigate])

    return (
        <>
            {
                loading ? <Loader /> :
                    <div className='bg-gray-50 px-8 py-12 md:px-48 lg:flex lg:gap-14 lg:py-24 lg:justify-between'>
                        <div className='w-full lg:order-2'>
                            <img src={forget_pass_img} alt="forget__pass__img" />
                        </div>

                        <div className='lg:order-1'>
                            <div className='mt-8'>
                                <h1 className='font-bold text-4xl text-bms-400'>
                                    Trouble Logging In?
                                </h1>
                                <h3 className='mt-8 text-xl'>
                                    Enter your registered email address, we'll send you a link to get back into your account.
                                </h3>
                            </div>

                            <div>
                                <form className="my-2" onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <input type="email" placeholder="eg: 00ABC00@cuchd.in" className=" w-full text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <button type='submit' className="text-white bg-bms-400 px-3 font-semibold py-2 text-xl rounded-lg focus:bg-bms-100 focus:text-gray-500">Verify</button>
                                </form>
                                <div className="my-8">
                                    <span><h3 className="text-gray-400">Remember your credentials? <span className="cursor-pointer hover:font-semibold underline underline-offset-4 transition-all ease-in-out delay-150 text-bms-400" onClick={() => Navigate("/signin")}>Sign In</span></h3></span>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ForgetPassPage;