import { React } from 'react';
import { useHistory } from 'react-router-dom'

import FeedbackCard from '../../components/FeedbackCard';

const myArray = [
    require("../../assets/img/carousel/2.jpg"),
    require("../../assets/img/carousel/1.jpg"),
    require("../../assets/img/carousel/3.jpg"),
    require("../../assets/img/carousel/4.jpg"),
    require("../../assets/img/carousel/5.jpg"),
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

const DashboardFeedbackBoard = () => {

    const history = useHistory();
    const handleCardClicked = (props) => {
        const queryParams = new URLSearchParams();
        queryParams.set('index', props);
        const index = props;
        history.push(`/feedback-detail?${queryParams.toString()}`);
    }
    const handleViewMoreClicked = (props) => {
        const queryParams = new URLSearchParams();
        queryParams.set('category',props);
        history.push(`/feedback-board?${queryParams.toString()}`);
    }
    return (
        <div className='w-full py-20'>
            <div className='text-center text-[32px] noto-semibold'>みんなの感想文</div>
            <div className='flex flex-col gap-5 mx-auto w-[1250px] mt-7'>
                <div className='flex justify-between text-[16px] font-normal px-[10px]'>
                    <span className='noto-medium'>売りました体験談</span>
                    <span className='text-[20px] noto-medium cursor-pointer border-b-2 border-b-black' onClick={() => handleViewMoreClicked('sold')}>もっと見る<div className = 'pl-2 fa-solid fa-arrow-right'></div></span>
                </div>
                <div className='flex justify-between'>
                    {
                        feedbacks.map((feedback, index) => {
                            return(
                                feedback.category === 'bought' &&
                                <div className='cursor-pointer' key={index}  onClick={() => handleCardClicked(index)}>
                                    <FeedbackCard feedback = {feedback}/>
                                </div>  
                            );
                        })
                    }
                </div>
                <div className='flex justify-between text-[16px] font-normal px-[10px] mt-[30px]'>
                    <span className='noto-medium'>こんな風に使ってます</span>
                    <span className='text-[20px] noto-medium cursor-pointer border-b-2 border-b-black' onClick={() => handleViewMoreClicked('bought')}>もっと見る<div className = 'pl-2 fa-solid fa-arrow-right'></div></span>
                </div>
                <div className='flex justify-between'>
                    {
                        feedbacks.map((feedback, index) => {
                            return(
                                feedback.category === 'sold' &&
                                <div className='cursor-pointer' key={index} onClick={() => handleCardClicked(index)}>
                                    <FeedbackCard feedback = {feedback}/>
                                </div> 
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default DashboardFeedbackBoard;