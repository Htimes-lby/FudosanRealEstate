import React from 'react';
import DashboardEyeCatch from './DashboardEyeCatch';
import DashboardFeedbackBoard from './DashboardFeedbackBoard';
import DashboardFAQPage from './DashboardFAQBoard';
import DashboardRealEstatePostBoard from './DashboardRealEstatePostBoard';
const DashboardPage = () => {

    return (
        <div className='flex flex-col w-full'>
            <DashboardEyeCatch/>
            <DashboardRealEstatePostBoard/>
            <DashboardFAQPage/>
            <DashboardRealEstatePostBoard/>
        </div>
    )
}

export default DashboardPage;