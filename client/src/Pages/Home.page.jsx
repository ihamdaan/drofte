import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import HomePageFeed from '../components/HomeFeed/homePageFeed.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';

function HomePage() {
  return (
      <div className="HomePage max-h-screen flex max-w-7xl mx-auto">
      <HomeSidebar />
      <HomePageFeed />
      <HomePageTrending />
    </div>
  );
}

export default HomePage;
