import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import ViewQuestionPage from '../components/QuestionHandle/viewQuestionPage.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import Metadata from '../components/Metadata';

const ViewQuestion = () => {
    return (
        <div className="ViewQuestion max-h-screen flex max-w-7xl mx-auto">
            <Metadata title={"View Question | DROFTE"} />
            <HomeSidebar />
            <ViewQuestionPage />
            <HomePageTrending />
        </div>
    )
}

export default ViewQuestion;