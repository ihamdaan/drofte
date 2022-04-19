import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import UserQueries from '../components/UserPages/userQueries.component'
import HomePageTrending from '../components/HomeTrending/homePageTrending.component'
import { Helmet } from 'react-helmet';

const YourQueries = () => {
    return (
        <div className="YourQueries max-h-screen flex max-w-7xl mx-auto">
            <Helmet>
                <title>Your Asked Questions | DROFTE</title>
            </Helmet>
            <HomeSidebar />
            <UserQueries />
            <HomePageTrending />
        </div>
    )
}

export default YourQueries