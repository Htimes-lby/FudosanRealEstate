import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DashboardEyeCatch from './DashboardEyeCatch';
import DashboardFeedbackBoard from './DashboardFeedbackBoard';
import DashboardFAQPage from './DashboardFAQBoard';
import DashboardRealEstatePostBoard from './DashboardRealEstatePostBoard';

const DashboardPage = () => {

    const [realEstates, setRealEstates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = new URLSearchParams({
                    firstNumber: '1',
                    lastNumber: '16'
                }).toString();
                const res = await axios.get(`/getRealEstates?${params}`);
                setRealEstates(res.data);
                console.log('res---------------------', res);
                console.log('res.data----------------------', res.data)
                console.log("realEstates----------------", realEstates);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);

    if(realEstates.length  == 0) {
        return (
            <div>
                Loading......
            </div>
        )
    }

    return (
        <div className='flex flex-col w-full'>
            <DashboardEyeCatch/>
            <DashboardRealEstatePostBoard realEstates = {realEstates}/>
            <DashboardFAQPage/>
            <DashboardFeedbackBoard/>
        </div>
    )
}

export default DashboardPage;