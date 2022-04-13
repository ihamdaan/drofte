import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import EditProfilePageFeed from '../components/ProfileFeed/editProfilePage.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import { Helmet } from 'react-helmet';

function EditProfilePage() {
  return (
      <div className="EditProfilePage max-h-screen flex max-w-7xl mx-auto">
        <Helmet>
          <title>Edit Profile | DROFTE</title>
        </Helmet>
        <HomeSidebar />
        <EditProfilePageFeed />
        <HomePageTrending />
    </div>
  );
}

export default EditProfilePage;
