import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import EditProfilePageFeed from '../components/ProfileFeed/editProfilePage.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import Metadata from '../components/Metadata';

function EditProfilePage() {
  return (
    <div className="EditProfilePage max-h-screen flex max-w-7xl mx-auto">
      <Metadata title={"Edit Profile | DROFTE"} />
      <HomeSidebar />
      <EditProfilePageFeed />
      <HomePageTrending />
    </div>
  );
}

export default EditProfilePage;
