import profile__bg__test__img from "../../images/drofte_logo_blue.svg";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { FaLinkedin, FaTwitter, FaInstagram, FaBriefcase } from 'react-icons/fa';
import AddIcon from '@mui/icons-material/Add';
import { TiEdit } from 'react-icons/ti';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { loadUser, updateProfile } from "../../Redux/Action/userActions";


function ProfilePageFeed() {

  const { user } = useSelector(state => state.user)
  const { isUpdated, error, loading } = useSelector(state => state.profile)
  const alert = useAlert()
  const Navigate = useNavigate();
  const dispatch = useDispatch()

  const inputFile = useRef()
  const coverFile = useRef()

  const [Avatar, setAvatar] = useState("")
  const [AvatarPreview, setAvatarPreview] = useState("")
  const [cover, setCover] = useState("")
  const [coverPreview, setCoverPreview] = useState("")
  const [state, setState] = useState({
    name: "",
    bio: "",
    branch: "",
  })
  const [links, setLinks] = useState({
    LinkedIn: "",
    Twitter: "",
    Instagram: ""
  })

  const handleChange = (e, state, setState) => {
    let name = e.target.name
    let value = e.target.value

    if (name === "photo" || name === "cphoto") {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        if (reader.readyState === 2) {
          if (name === "photo") {
            setAvatar(reader.result)
            setAvatarPreview(reader.result)
          } else {
            setCover(reader.result)
            setCoverPreview(reader.result)
          }
        }
      }
    }
    else {
      setState({ ...state, [name]: value })
    }
  }
  const onButtonClick = (file) => {
    file.current.click();
  };



  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateProfile({ ...state, profilePhoto: Avatar, coverPhoto: cover, links }))
  }

  useEffect(() => {
    if (isUpdated) {
      alert.success("Profile Updated Successfully")
      dispatch({ type: "UPDATE_PROFILE_RESET" })
      dispatch(loadUser())
      Navigate("/profile")
    }
    if (error) {
      alert.error(error)
      dispatch({ type: "CLEAR_ERRORS" })
    }

  }, [isUpdated, alert, error, dispatch])

  useEffect(() => {
    setState({
      name: user?.name || "",
      bio: user?.bio || "",
      branch: user?.branch || ""
    })
    setLinks({
      LinkedIn: user?.links?.LinkedIn || "",
      Twitter: user?.links?.Twitter || "",
      Instagram: user?.links?.Instagram || ""
    })
    setAvatarPreview(user?.profilePhoto?.url || "")
    setCoverPreview(user?.coverPhoto?.url || "")
  }, [user])

  return (
    <>

      <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full bg-gray-50' >
        {
          loading ? <Loader /> :
            <>
              <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center cursor-pointer' onClick={() => Navigate(-1)}>
                  <div className="w-8 h-8">
                    <IoIosArrowBack className="w-full h-full" />
                  </div>
                  <div className='text-2xl font-medium'>{user?.name}</div>
                </div>

                <div className='text-gray-600 text-xl font-medium'>
                  Edit Profile
                </div>
              </div>

              <div className='profile_header relative h-80 mt-2'>
                <div className='object-cover h-60 w-full relative'>
                  <img
                    src={coverPreview || profile__bg__test__img}
                    alt="background"
                    className='w-full h-full border-b'
                  />
                  <div className='absolute bottom-1 right-1 cursor-pointer flex items-center gap-1 hover:bg-white p-2 rounded-xl hover:font-semibold' onClick={() => onButtonClick(coverFile)}>
                    <AddIcon className='cursor-pointer' />
                    Add Image
                  </div>
                </div>
                <div className='absolute bottom-0 left-10 w-40 h-40 '>
                  <div className='relative w-full h-full'>
                    <img
                      src={AvatarPreview}
                      alt="profile "
                      className='w-full h-full rounded-full border object-cover'
                    />
                    <TiEdit
                      title='Edit Your Profile Image'
                      className='cursor-pointer absolute right-2 bottom-2 w-10 h-10'
                      onClick={() => onButtonClick(inputFile)}
                    />
                  </div>
                  <input className="hidden" ref={inputFile} type="file" name="photo" id="photo" accept="image/*" onChange={handleChange} />
                  <input className="hidden" ref={coverFile} type="file" name="cphoto" id="cphoto" accept="image/*" onChange={handleChange} />
                </div>

                <div
                  onClick={() => Navigate("/password/change")}
                  className='py-1 rounded-2xl px-3 absolute bottom-10 right-0 ring-1 ring-red-500 font-medium hover:bg-red-100 cursor-pointer text-red-500'
                >
                  Change Password
                </div>
              </div>

              <div className='mt-8'>

                <form className='my-6 mx-3' onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="text-lg font-medium">Change Profile Name</label> <br />
                    <input type="text" className="bg-bms-50 focus:bg-white w-3/4 text-md mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" placeholder="Enter Your Name" name="name" value={state.name} required onChange={(e) => handleChange(e, state, setState)} />

                  </div>
                  <div className="mb-4">
                    <label htmlFor="username" className="text-lg font-medium">Update Bio</label> <br />
                    <textarea
                      name="bio"
                      rows="4"
                      value={state.bio}
                      onChange={(e) => handleChange(e, state, setState)}
                      className="bg-bms-50 w-3/4 text-md mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black"
                      placeholder="A DROFTE bio is a small public summary about yourself displayed under your profile picture. In the bio, you can include limited characters of text, hashtags, emojis, and handles of profiles you're affiliated with."
                    />
                  </div>

                  <div className='social_handles mt-4 text-gray-500 w-3/4  '>
                    <div className='flex gap-1 cursor-pointer items-center justify-around my-3'>
                      <FaBriefcase className='w-6 h-6' />
                      <div className='text-xl'>Branch</div>
                      <input
                        type="text"
                        name="branch"
                        className="bg-bms-50 w-full text-md ml-2 py-1 px-2 rounded focus:outline-bms-100 text-black"
                        value={state.branch}
                        onChange={(e) => handleChange(e, state, setState)}
                        placeholder="Example: AIT CSE"
                      />
                    </div>
                    <div className='flex gap-1 cursor-pointer justify-between items-center'>
                      <FaLinkedin className='w-6 h-6' />
                      <div className='text-xl'>LinkedIn</div>
                      <input
                        type="text"
                        name="LinkedIn"
                        className="bg-bms-50 w-full text-md ml-2 py-1 px-2 rounded focus:outline-bms-100 text-black"
                        value={links.LinkedIn}
                        onChange={(e) => handleChange(e, links, setLinks)}
                        placeholder="Paste your link here"
                      />
                    </div>

                    <div className='flex gap-1 mt-2 cursor-pointer items-center'>
                      <FaTwitter className='w-6 h-6' />
                      <div className='text-xl'>Twitter</div>
                      <input
                        type="text"
                        name="Twitter"
                        className="bg-bms-50 w-full text-md ml-2 py-1 px-2 rounded focus:outline-bms-100 text-black"
                        value={links.Twitter}
                        onChange={(e) => handleChange(e, links, setLinks)}
                        placeholder="Paste your link here"
                      />
                    </div>

                    <div className='flex gap-1 mt-2 cursor-pointer items-center'>
                      <FaInstagram className='w-6 h-6' />
                      <div className='text-xl'>Instagram</div>
                      <input
                        type="text"
                        name="Instagram"
                        className="bg-bms-50 w-full text-md ml-2 py-1 px-2 rounded focus:outline-bms-100 text-black"
                        value={links.Instagram}
                        onChange={(e) => handleChange(e, links, setLinks)}
                        placeholder="Paste your link here" />
                    </div>
                  </div>

                  <div className='flex gap-3 mt-6 flex-row-reverse w-3/4'>

                    <button
                      className="bg-bms-400 inline-flex justify-center px-4 py-2 text-sm font-medium text-white hover:text-bms-400 border border-transparent rounded-md hover:bg-bms-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bms-500 mb-1"
                      type="submit"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => Navigate(-1)}
                      type="button"
                      className="bg-red-100 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 border border-transparent rounded-md hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 mb-1"
                    >
                      Cancel
                    </button>

                  </div>
                </form>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default ProfilePageFeed;