import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import ChangePassPage from '../components/ChangePassword/changePassPage.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import { Helmet } from 'react-helmet';

function ChangePass() {
  return (
      <div className="ChangePass max-h-screen flex max-w-7xl mx-auto">
        <Helmet>
          <title>Password Change | DROFTE</title>
        </Helmet>
        <HomeSidebar />
        <ChangePassPage />
        <HomePageTrending />
    </div>
  );
}

export default ChangePass;
