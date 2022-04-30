import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import UserRemarks from '../components/UserPages/userRemarks.component'
import HomePageTrending from '../components/HomeTrending/homePageTrending.component'
import Metadata from '../components/Metadata';

const YourRemarks = () => {
    return (
        <div className="YourRemarks max-h-screen flex max-w-7xl mx-auto">
            <Metadata title={"Your Answered Solutions | DROFTE"} />
            <HomeSidebar />
            <UserRemarks />
            <HomePageTrending />
        </div>
    )
}

export default YourRemarks;