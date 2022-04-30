import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import AskYourQuery from '../components/QuestionHandle/askYourQuery.component';
import Metadata from '../components/Metadata';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';

const AskQuestion = () => {
    return (
        <div className="AskQuestion max-h-screen flex max-w-7xl mx-auto">
            <Metadata title={"Ask Query | DROFTE"} />
            <HomeSidebar />
            <AskYourQuery />
            <HomePageTrending />
        </div>
    )
}

export default AskQuestion;