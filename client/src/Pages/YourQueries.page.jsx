import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import UserQueries from '../components/UserPages/userQueries.component'

const YourQueries = () => {
    return (
        <div className="max-h-screen flex max-w-7xl mx-auto">
            <HomeSidebar />
            <UserQueries />
        </div>
    )
}

export default YourQueries