import React from 'react'
import { BeatLoader } from 'react-spinners'

const ScrollLoader = () => {
    return (
        <div className='flex justify-center items-center h-4'>
            <BeatLoader color={"rgb(56 169 228)"} loading={true} className="d-block" margin={3} />
        </div>
    )
}

export default ScrollLoader