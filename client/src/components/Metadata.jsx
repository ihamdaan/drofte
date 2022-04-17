import { Helmet } from 'react-helmet-async';
import React from 'react'

const Metadata = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}

export default Metadata
