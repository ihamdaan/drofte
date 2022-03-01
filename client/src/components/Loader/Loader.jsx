import React from 'react'
import { PulseLoader } from "react-spinners"
import "./Loader.css"

// Custom Loader
const Loader = () => {
    return (
        <div className='Loader'>
            <PulseLoader color={"rgb(56 169 228)"} loading={true} className="d-block" size={25} margin={10} />
        </div>
    )
}

export default Loader