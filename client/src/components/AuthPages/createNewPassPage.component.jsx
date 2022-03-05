import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import create_new_pass_img from "../../images/authentication.svg";
import create_pass_img from "../../images/secure_login.svg";
import { resetPassword } from '../../Redux/Action/userActions';
import Loader from '../Loader/Loader';

const CreateNewPassPage = () => {
    const { loading, error, message } = useSelector(state => state.user)
    const alert = useAlert()
    const dispatch = useDispatch();
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { token } = useParams()
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(token, { password, confirmPassword }))
    }

    useEffect(() => {
        if (message) {
            alert.success(message)
            Navigate("/")
        }
        if (error) {
            alert.error(error)
            dispatch({ type: "CLEAR_ERRORS" })
        }
    }, [alert, error, message, dispatch, Navigate])

    return (
        <>
            {loading ? <Loader /> :
                <div className='bg-gray-50 px-8 py-8 md:px-48 lg:flex lg:gap-14'>

                    <div className='lg:hidden md:px-24 w-full lg:flex items-center lg:justify-end'>
                        <img src={create_pass_img} alt="create__pass__img" className='md:w-80 lg:w-80' />
                    </div>

                    <div className='lg:w-full'>
                        <div className='mt-8'>
                            <h1 className='font-bold text-4xl text-bms-500'>
                                Create New Password
                            </h1>
                            <h3 className='my-4 text-gray-400 text-xl'>
                                Must contain at least 8 characters (12+ recommended), one uppercase letter, one lowercase letter, at least one number, at least one special character.
                            </h3>
                        </div>

                        <div>
                            <form className="my-2" onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="password" className="text-xl">New Password</label> <br />
                                    <input type="password" placeholder="Password" className=" w-3/4 text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" required name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="confirmPassword" className="text-xl">Re-enter New Password</label> <br />
                                    <input type="password" placeholder="Confrim Password" className=" w-3/4 text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" required name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>

                                <button className="text-white mb-8 bg-bms-400 px-3 font-semibold py-2 text-xl rounded-lg focus:bg-bms-100 focus:text-gray-500 hover:bg-bms-500 " type='submit'>Reset Password</button>
                            </form>
                        </div>
                    </div>

                    <div className=' hidden md:px-24 w-full lg:flex items-center lg:justify-end'>
                        <img src={create_new_pass_img} alt="create__new__pass__img" className='md:w-80 lg:w-80' />
                    </div>
                </div>}
        </>
    )
}

export default CreateNewPassPage;