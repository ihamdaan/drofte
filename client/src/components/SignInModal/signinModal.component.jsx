import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import login__img from "../../images/login_modal.svg";
import { loginUser } from "../../Redux/Action/userActions";

export default function SignInModal({ isSignOpen, setIsSignOpen }) {

  function closeModal() {
    setIsSignOpen(false)
  }

  const navigate = useNavigate()

  const Navigate = useNavigate()
  const alert = useAlert()
  const dispatch = useDispatch();
  const { user, error } = useSelector(state => state.user);

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
    if (user) {
      closeModal()
      Navigate("/")
      alert.success(`Logged in successfully`);
    }
    // eslint-disable-next-line
  }, [error, user, alert, dispatch, Navigate])

  return (
    <>
      <Transition appear show={isSignOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto z-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-bms-400 drop-shadow-2xl inline-block w-3/4 mx-10 w-full overflow-hidden text-left align-middle transition-all transform rounded-2xl">
                <div className="">
                  <div className="text-white mx-12 my-2 flex justify-center items-center gap-3">
                    <div className="w-full">
                      <form onSubmit={handleSubmit} method="post">
                        <div className="mb-12 mt-8">
                          <h1 className="text-5xl font-semibold">Sign In!</h1>
                        </div>
                        <div className="my-8">
                          <div className="mb-6">
                            <label htmlFor="username" className="text-xl">Email</label> <br />
                            <input type="email" placeholder="eg: 00ABC000@cuchd.in" className=" w-3/4 text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" title="enter your official email" required name="email" value={state.email} onChange={handleChange} />
                          </div>
                          <div className="mb-8">
                            <label htmlFor="password" className="text-xl">Password</label> <br />
                            <input type="password" placeholder="Enter your Password" className=" w-3/4 text-black text-xl mt-2 py-2 px-3 rounded focus:outline-bms-100" title="enter password" required name="password" value={state.password} onChange={handleChange} />
                          </div>

                          <div className='flex gap-3'>

                            <button
                              type="button"
                              className="bg-gray-100 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 border border-transparent rounded-md hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 mb-1"
                              onClick={closeModal}
                            >
                              Cancel
                            </button>
                            <button
                              className="bg-gray-100 inline-flex justify-center px-4 py-2 text-sm font-medium text-bms-500 border border-transparent rounded-md hover:bg-bms-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bms-500 mb-1"
                              type="submit"
                            >
                              Sign In
                            </button>

                          </div>

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
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}