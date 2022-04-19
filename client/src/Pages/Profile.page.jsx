import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import ProfilePageFeed from '../components/ProfileFeed/profilePageFeed.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import Metadata from '../components/Metadata';

function ProfilePage() {
  return (
    <div className="ProfilePage max-h-screen flex max-w-7xl mx-auto">
      <Metadata title={"Profile | DROFTE"} />
      <HomeSidebar />
      <ProfilePageFeed />
      <HomePageTrending />
    </div>
  );
}

export default ProfilePage;
