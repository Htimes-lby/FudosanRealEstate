import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import MessageItem from '../components/MessageItem';
import Pagination from '../components/Pagination'
import AccordionItemMessage from '../components/AccordionItemMessage';

const messages = [
    {
        sender: 'sasuke',
        receiver: 'haruto',
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
        status: 'read',
    },
    {
        sender: 'sasuke',
        receiver: 'sakura',
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時40分",
        status:"read"
    },
    {
        sender: 'akimoto',
        receiver: 'sasuke',
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時38分",
        status:"unread"
    },
    {
        sender: 'nara',
        receiver: 'sasuke',
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時32分",
        status:"read"
    },
    {
        sender: 'sasuke',
        receiver: 'hero',
        content: `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
        テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`,
        date: "2023年10月23日09時23分",
        status:"unread"
    },
]
const MessageBoardPage = () => {

    const history = useHistory();
    const [active, setActive] = useState(1);
    const [activeCategory, setActiveCategory] = useState('all')
    const activeHandler = (clickedPage) => {
        setActive(parseInt(clickedPage));
    };
    const handleMessageItemClicked = (props) => {
        const index = props;
        const load = messages[index];
        const calledComponent = 'message-board'
        history.push('/message-detail', {state: {calledComponent, load}});
    }
    const handleActiveCategorySelected = (props) => {
        setActiveCategory(props);
    }
    return (
        <div className='flex flex-col items-center w-full py-20'>
            <p className='text-[24px] mb-10'>メッセージボックス</p>
            <div>
                <Pagination
                    active={active}
                    size={99}
                    step={2}
                    onClickHandler={activeHandler}
                />
            </div>
            <div className='flex justify-center gap-16 items-start'>
                <div className='w-[200px] border-[1px] border-black'>
                    <div className='bg-[#0D4868]/60 text-center text-white font-semibold p-2'>メッセージボックス</div>
                    <div className={`text-center text-[16px] border-b-[1px] border-l-4  border-black p-2 cursor-pointer ${activeCategory === 'all' ? 'border-l-[#0D4868]' : 'border-l-[#0D4868]/30'}`} onClick={() => handleActiveCategorySelected('all')}>すべて表示</div>
                    <div className='text-[18px] py-2 pl-3 border-b-[1px] border-b-black/30 bg-[#F2ECCD]/40'>受信箱</div>
                    <div className={`text-center text-[16px] p-2 border-b-[1px] border-b-black/30 border-l-4 cursor-pointer ${activeCategory === 'received-all' ? 'border-l-[#0D4868]' : 'border-l-[#0D4868]/30'}`} onClick={() => handleActiveCategorySelected('received-all')}>すべて表示</div>
                    <div className={`text-center text-[16px] p-2 border-b-[1px] border-black border-l-4 cursor-pointer ${activeCategory === 'received-unread' ? 'border-l-[#0D4868]' : 'border-l-[#0D4868]/30'}`} onClick={() => handleActiveCategorySelected('received-unread')}>未読</div>
                    <div className='text-[18px] py-2 pl-3 border-b-[1px] border-b-black/30 bg-[#F2ECCD]/40'>送信箱</div>
                    <div className={`text-center text-[16px] p-2 border-l-4 cursor-pointer ${activeCategory === 'sent' ? 'border-l-[#0D4868]' : 'border-l-[#0D4868]/30'}`} onClick={() => handleActiveCategorySelected('sent')}>すべて表示</div>
                </div>

                <div className='w-[1000px]'>
                    {messages.map((msg, index) => {
                        return(
                            <div onClick={() => handleMessageItemClicked(index)}><AccordionItemMessage key={index} message={msg} /></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MessageBoardPage;