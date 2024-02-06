import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Pagination from '../components/Pagination'
import AccordionItemMessage from '../components/AccordionItemMessage';
import Loading from '../components/Loading';
import { useCookies } from 'react-cookie';

const MessageBoardPage = () => {

    const history = useHistory();
    const [cookies, setCookie] = useCookies();
    const myId = cookies.user._id;

    const [active, setActive] = useState(1);
    const [activeCategory, setActiveCategory] = useState('all')
    const [messages, setMessages] = useState(null);
    
    const [totalNumber, setTotalNumber] = useState();

    const activeHandler = (clickedPage) => {
        setActive(parseInt(clickedPage));
    };
    const handleMessageItemClicked = (props) => {
        const index = props;
        let opponentId;
        if(messages[index].senderId !== myId) {
            opponentId = messages[index].senderId;
        } else {
            opponentId = messages[index].receiverId;
        }
        const searchParams = new URLSearchParams();
        searchParams.set('previous-page', 'messageBoard');
        searchParams.set('myId', myId);
        searchParams.set('opponentId', opponentId);
        history.push(`/message-detail?${searchParams.toString()}`);
    }
    const handleActiveCategorySelected = (props) => {
        setActiveCategory(props);
    }
    const fetchData = async () => {
        const firstNumber = ( active -1 ) * 12 + 1;
        const lastNumber = active * 12;
        try {
            const params = new URLSearchParams({
                'myId': myId,
                'firstNumber': firstNumber,
                'lastNumber': lastNumber,
                'activeCategory': activeCategory,
            }).toString();
            const res = await axios.get(`/getMessages?${params}`);
            setMessages(res.data.messages);
            setTotalNumber(res.data.totalDocumentNumber);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[active, activeCategory])

    useEffect(() => {
        setActive(1);
    },[activeCategory])

    if(messages === null) {
        return (
            <Loading/>
        )
    }

    return (
        <div className='flex flex-col items-center w-full py-20'>
            <p className='mb-10 noto-medium text-[24px] '>メッセージボックス</p>
            <div>
                <Pagination
                    active={active}
                    size={Math.ceil(totalNumber/12)}
                    step={2}
                    onClickHandler={activeHandler}
                />
            </div>
            <div className='flex justify-center gap-16 items-start'>
                <div className='w-[200px] border-[1px] border-black noto-regular'>
                    <div className='p-2 bg-[#0D4868]/80 text-center text-white noto-bold'>メッセージボックス</div>
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