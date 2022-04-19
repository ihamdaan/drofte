import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import AskYourQuery from '../components/QuestionHandle/askYourQuery.component';
import { Helmet } from 'react-helmet';

const AskQuestion = () => {
    return (
        <div className="AskQuestion max-h-screen flex max-w-7xl mx-auto">
            <Helmet>
                <title>Ask Query | DROFTE</title>
            </Helmet>
            <HomeSidebar />
            <AskYourQuery />
        </div>
    )
}

export default AskQuestion;