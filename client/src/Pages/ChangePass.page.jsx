import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import ChangePassPage from '../components/ChangePassword/changePassPage.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import Metadata from '../components/Metadata';

function ChangePass() {
  return (
    <div className="ChangePass max-h-screen flex max-w-7xl mx-auto">
      <Metadata title={"Password Change | DROFTE"} />
      <HomeSidebar />
      <ChangePassPage />
      <HomePageTrending />
    </div>
  );
}

export default ChangePass;
