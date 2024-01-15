import React from 'react';
import MessageItem from '../components/MessageItem';
import PayOrder from "../components/Pagination"

const messageItems = [
    {
        username: "ユーザー 1",
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時43分",
        status:"receive"
    },
    {
        username: "ユーザー 2",
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時40分",
        status:"sender"
    },
    {
        username: "ユーザー 1",
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時38分",
        status:"receive"
    },
    {
        username: "ユーザー 4",
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時32分",
        status:"sender"
    },
    {
        username: "ユーザー 1",
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時23分",
        status:"receive"
    }
]
const MessageBoardPage = () => {
    return (
        <div>
            <div>
                <p className='text-[24px] pt-[133px] pl-[128px]'>メッセージボックス</p>
            </div>
            <div className='flex justify-center mt-[-50px] mb-[15px]'>
                <PayOrder />
            </div>
            <div className='flex justify-center gap-[65px]'>
                <div className='w-[200px] '>
                    <div className=' flex justify-center bg-[#0D4868] text-white p-2'><p>メッセージボックス</p></div>
                    <div className='border-r-[1px] border-l-[1px] border-b-[1px] flex justify-center border-black'><p className='text-[18px]'>すべて表示</p></div>
                    <div className='border-r-[1px] border-l-[1px] border-b-[1px] border-black'>
                        <p className='text-[18px] pt-[9px] pl-[11px]'>受信箱</p>
                        <p className='flex justify-center pt-[18px]'>すべて表示</p>
                        <p className='flex justify-center pt-[18px] pb-[9px]'>未読</p>
                    </div>
                    <div className='border-r-[1px] border-l-[1px] border-b-[1px] border-black '>
                        <p className='text-[18px] pt-[9px] pl-[11px]'>受信箱</p>
                        <p className='flex justify-center pt-[18px] pb-[9px]'>すべて表示</p>
                        
                    </div>
                </div>

                <div className='w-[1200px]'>
                    {messageItems.map((messageItem, index) => {
                        return(
                            <MessageItem key={index} messageItem={messageItem} />
                        )
                    })}
                </div>
            </div>
            <div className='flex justify-center mt-[-30px] mb-[15px]'>
                <PayOrder />
            </div>
        </div>
    )
}

export default MessageBoardPage;