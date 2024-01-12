import { React } from 'react';
import FeedbackCard from '../../components/FeedbackCard';

const feedbackDataSold = [
    {
        image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        content : `テキスト テキスト テキスト テキスト
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
    },
    {
        image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        content : `テキスト テキスト テキスト テキスト
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
    },
    {
        image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        content : `テキスト テキスト テキスト テキスト
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
    },
    {
        image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        content : `テキスト テキスト テキスト テキスト
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
    },
]
const feedbackDataBought = [
    {
        image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        content : `テキスト テキスト テキスト テキスト
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
    },
    {
        image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        content : `テキスト テキスト テキスト テキスト
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
    },
    {
        image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        content : `テキスト テキスト テキスト テキスト
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
    },
    {
        image : 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        content : `テキスト テキスト テキスト テキスト
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
    },
]
const DashboardFeedbackBoard = () => {
    return (
        <div className='w-full py-20'>
            <div className='text-center text-[32px] font-semibold'>AAAAAAAAAAAA</div>
            <div className='flex flex-col gap-5 mx-auto w-[1250px] mt-7'>
                <div className='flex justify-between text-[16px] font-normal px-[10px]'>
                    <span>AAAAAAAA</span>
                    <span>AAAAAAAAAA</span>
                </div>
                <div className='flex justify-between'>
                    {
                        feedbackDataBought.map((feedback, index) => {
                            return(
                                <FeedbackCard key = {index} feedback = {feedback}/>
                            );
                        })
                    }
                </div>
                <div className='flex justify-between text-[16px] font-normal px-[10px] mt-[30px]'>
                    <span>AAAAAAAAA</span>
                    <span>AAAAAAAAAA</span>
                </div>
                <div className='flex justify-between'>
                    {
                        feedbackDataSold.map((feedback, index) => {
                            return(
                                <FeedbackCard key = {index} feedback = {feedback}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default DashboardFeedbackBoard;