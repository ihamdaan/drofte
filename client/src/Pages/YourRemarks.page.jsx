import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import UserRemarks from '../components/UserPages/userRemarks.component'
import HomePageTrending from '../components/HomeTrending/homePageTrending.component'
import { Helmet } from 'react-helmet';

const YourRemarks = () => {
    return (
        <div className="YourRemarks max-h-screen flex max-w-7xl mx-auto">
            <Helmet>
                <title>Your Answered Solutions | DROFTE</title>
            </Helmet>
            <HomeSidebar />
            <UserRemarks />
            <HomePageTrending />
        </div>
    )
}

export default YourRemarks;