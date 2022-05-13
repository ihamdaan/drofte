import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import UserProfilePageFeed from '../components/ProfileFeed/userProfilePageFeed.component';

function UserProfilePage() {
    return (
        <div className="ProfilePage max-h-screen flex max-w-7xl mx-auto">
            <HomeSidebar />
            <UserProfilePageFeed />
            <HomePageTrending />
        </div>
    );
}

export default UserProfilePage;
