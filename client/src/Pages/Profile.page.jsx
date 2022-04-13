import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import ProfilePageFeed from '../components/ProfileFeed/profilePageFeed.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import { Helmet } from 'react-helmet';

function ProfilePage() {
  return (
      <div className="ProfilePage max-h-screen flex max-w-7xl mx-auto">
        <Helmet>
          <title>Profile | DROFTE</title>
        </Helmet>
        <HomeSidebar />
        <ProfilePageFeed />
        <HomePageTrending />
    </div>
  );
}

export default ProfilePage;
