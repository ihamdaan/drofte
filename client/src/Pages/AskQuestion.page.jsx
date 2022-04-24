import React from 'react'
import HomeSidebar from '../components/Navbar/homePageSidebar.component'
import AskYourQuery from '../components/QuestionHandle/askYourQuery.component';
import Metadata from '../components/Metadata';

const AskQuestion = () => {
    return (
        <div className="AskQuestion max-h-screen flex max-w-7xl mx-auto">
            <Metadata title={"Ask Query | DROFTE"} />
            <HomeSidebar />
            <AskYourQuery />
        </div>
    )
}

export default AskQuestion;