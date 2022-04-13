import ReactHtmlParser from 'react-html-parser';
import test__img from "../../images/test_img_2.jpg";
import Moment from 'react-moment';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestion } from '../../Redux/Action/questionActions';


function HomeFeedPost({ question }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const handleClick = (id) => {
        navigate(`/question/${id}`)
    }
    const updateQues = (id) => {
        navigate(`/update-question/${id}`)
    }
    const deleteQues = (id) => {
        dispatch(deleteQuestion(id))
    }

    return (
        <>
            <div className='my-2 px-2 py-4 flex gap-8  cursor-pointer hover:bg-gray-50' onClick={() => handleClick(question?._id)}>
                <div className="object-cover w-14 h-14">
                    <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full" />
                </div>

                <div className='w-full'>
                    <div className='flex items-center gap-2 pt-2 relative'>
                        <div className='font-medium text-gray-700 text-lg'>
                            {question?.user?.name}
                        </div>

                        <div className='font-medium text-gray-500 text-sm'>
                            #{question?.user?.email}
                        </div>

                        <div className='font-medium text-gray-400 text-xs absolute right-0'>
                            <Moment fromNow>{question?.createdAt}</Moment>
                        </div>
                    </div>

                    <div className='pt-4 pb-2'>
                        <h1 className="font-bold">{question.title}</h1>
                    </div>
                    <div className='py-2'>
                        {ReactHtmlParser(question.desc)}
                    </div>
                    <div className='py-2 mb-10'>
                        <div className='mt-2 flex flex-wrap gap-2'>
                            {question.tags.map((tag, index) => (
                                <button key={index} className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600 px-2'>{tag}</button>
                            ))}
                        </div>
                    </div>
                    <div>
                        {
                            question.answers?.map((answer, index) => {

                                if (index === 0) {
                                    return <div className=' bottom__border__line' key={answer?._id}>
                                        <h1 className='font-bold'>Answers</h1>
                                        <div className=" flex my-3">
                                            <img src={test__img} alt="profile_pic" className=" rounded-full w-14 h-14" />
                                            <div className='font-medium text-gray-700 text-lg px-5'>
                                                {answer?.user?.name}
                                                <br />
                                                #{answer?.user?.email}
                                            </div>

                                            <div className='font-medium text-gray-400 text-xs'>
                                                <Moment fromNow>{answer?.createdAt}</Moment>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-2 pt-2'>
                                        </div>
                                        <div>Answer: {ReactHtmlParser(answer?.answer)}</div>
                                        <div className="hover:to-blue-500 py-6 justify-end flex">View more...</div>
                                    </div>

                                }
                                return null;
                            })
                        }
                    </div>
                </div>
            </div>
            {
                question.user._id.toString() === user?._id.toString() ?
                    <div className='w-full px-3 bottom__border__line pb-3' >
                        <div className='flex justify-end text-bms-400'>
                            <div className='w-10 h-10 mx-2 cursor-pointer '>
                                <MdUpdate className='w-full h-full text-green-400 hover:text-green-600' onClick={() => updateQues(question._id)} />
                            </div>

                            <div className='w-10 h-10 mx-2 cursor-pointer '>
                                <MdDelete className='w-full h-full text-red-400 text-lg hover:text-red-600' onClick={() => deleteQues(question._id)} />
                            </div>
                        </div>
                    </div> :
                    <div className='bottom__border__line'></div>

            }
        </>
    )
}

export default HomeFeedPost