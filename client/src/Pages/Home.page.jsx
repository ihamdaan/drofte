import React from 'react';
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import HomePageFeed from '../components/HomeFeed/homePageFeed.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import Metadata from '../components/Metadata';

function HomePage() {
  return (
    <div className="HomePage max-h-screen flex max-w-7xl mx-auto">
      <Metadata title={"Home Page | DROFTE"} />
      <HomeSidebar />
      <HomePageFeed />
      <HomePageTrending />
    </div>
  );
}

export default HomePage;
