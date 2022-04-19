import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component';
import ViewQuestionPage from '../components/QuestionHandle/viewQuestionPage.component';
import HomePageTrending from '../components/HomeTrending/homePageTrending.component';
import { Helmet } from 'react-helmet';

const ViewQuestion = () => {
    return (
        <div className="ViewQuestion max-h-screen flex max-w-7xl mx-auto">
            <Helmet>
                <title>Question Title | DROFTE</title>
            </Helmet>
            <HomeSidebar />
            <ViewQuestionPage />
            <HomePageTrending />
        </div>
    )
}

export default ViewQuestion;