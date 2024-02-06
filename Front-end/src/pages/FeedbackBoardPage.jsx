import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import Pagination from '../components/Pagination';
import FeedbackCard from '../components/FeedbackCard';

const myArray = [
    require("../assets/img/carousel/2.jpg"),
    require("../assets/img/carousel/1.jpg"),
    require("../assets/img/carousel/3.jpg"),
    require("../assets/img/carousel/4.jpg"),
    require("../assets/img/carousel/5.jpg"),
];
const feedbacks = [
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
        category: 'sold',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
        category: 'sold',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'sold',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'sold',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'bought',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'bought',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'bought',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'bought',
    },
]

const FeedbackBoardPage = () => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const [active, setActive] = useState(1);
    const activeHandler = (clickedPage) => {
        setActive(parseInt(clickedPage));
    };
    const handleFeedbackCardClicked = (props) => {
        const searchParams = new URLSearchParams();
        searchParams.set('index', props);
        history.push(`/feedback-detail?${searchParams.toString()}`)
    }
    return (
        <div className='w-full mt-[70px] mb-[100px]'>
            <p className='text-center text-[32px] font-medium'>{category === 'sold' ? '売りました体験談' : 'こんな風に使ってます'}</p>
            <div className='flex flex-col items-start max-w-[1200px] mt-5 mx-auto'>
                <Pagination
                    active={active}
                    size={15}
                    step={2}
                    onClickHandler={activeHandler}
                />
                <div className={`grid gap-x-8 gap-y-12 mt-2 mx-auto box-border
                ${feedbacks.length === 1 ? 'grid-cols-1' : feedbacks.length === 2 ? 'grid-cols-2' : feedbacks.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                {
                    feedbacks.map((feedback, index) => {
                        return(
                            <div  onClick={() => handleFeedbackCardClicked(index)} className='cursor-pointer'>
                                <FeedbackCard key = {index} feedback = {feedback}/>
                            </div>
                        );
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default FeedbackBoardPage;