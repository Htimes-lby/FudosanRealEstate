import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios';
import AccordionItemMessage from '../components/AccordionItemMessage';
import RealEstateBigCard from '../components/RealEstateBigCard';
import AgentCard from '../components/AgentCard';
import {useCookies} from 'react-cookie'
import Loading from '../components/Loading';
import { useRef } from 'react';

const MessageDetailPage = () => {

    const location = useLocation();
    const [cookies, setCookie] = useCookies();
    const textareaRef = useRef(null);
    const searchParams = new URLSearchParams(location.search);
    const previousPage = searchParams.get('previous-page');
    const opponentId = searchParams.get('opponentId');
    const myId = cookies.user._id;
    
    const [realEstate, setRealEstate] = useState(null);
    const [agent, setAgent] = useState(null);
    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState();

    const handleSendMessageBtnClicked = async () => {
        try {
            const payload = {senderId: myId, receiverId: opponentId, content: content};
            await axios.post('/setMessage', payload);
            fetchData();
            textareaRef.current.value = '';
        } catch (error) {
            console.log(error);
        }
    }

    const fetchData = async () => {
        if(previousPage === 'itemDetailPage') {
            const realEstateId = searchParams.get('realEstateId');
            try {
                const params = new URLSearchParams({realEstateId: realEstateId}).toString();
                const res = await axios.get(`/getRealEstateById?${params}`);
                setRealEstate(res.data.realEstate);
            } catch (error) {
                console.log(error);
            }
        }
        if(previousPage === 'itemBoardPage') {
            const agentId = searchParams.get('agentId');
            try {
                const params = new URLSearchParams({agentId: agentId}).toString();
                const res = await axios.get(`/getAgentById?${params}`);
                console.log('success', res.data);
                setAgent(res.data.agent);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const params = new URLSearchParams({
                myId: myId,
                opponentId: opponentId,
            }).toString();
            console.log('I am here--------------', params)
            const res = await axios.get(`/getMessages?${params}`);
            console.log('I am here', res.data.messages)
            setMessages(res.data.messages);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(previousPage === 'itemDetailPage' && realEstate === null) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    if(previousPage === 'itemBoardPage' && agent === null) {
        return (
            <div>
                <Loading/>
            </div>
        )
    }

    if(messages === null) {
        return (
            <div>
                <Loading/>
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center w-full'> 
            <p className='text-[32px] noto-regular text-center pt-20'>サスケさんとのメッセージ</p>
            <div className='flex flex-col items-center w-full min-h-[300px] mt-20'>
                {
                    previousPage === 'itemDetailPage' &&
                    <RealEstateBigCard realEstate = {realEstate} parentComponent = 'MessageDetailPage' />
                }
                {
                    previousPage === 'itemBoardPage' &&
                    <AgentCard agent = {agent}/>
                }
                <div className='flex flex-col w-[900px] pt-5 gap-4'>
                    {
                    messages.map((msg, index) => {
                        return(
                        <AccordionItemMessage key={index} message={msg} />
                        )
                    })
                    }
                </div>
                {
                    messages.length === 0 &&
                    <p className='text-center text-3xl noto-regular'>表示するメッセージがありません</p>
                }
            </div>
            <div className='flex justify-center pt-[48px] pb-[45px]'>
                <textarea ref={textareaRef} className="border-[1px] border-black pt-1 pl-2 rounded-sm" name="message" id="" cols="100" rows="4" onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className='flex justify-center mb-[100px]'>
                {
                    myId === opponentId ?<button className='py-[20px] px-[50px] rounded-2xl bg-gray-500 noto-medium text-xl text-white' disabled = {true} onClick={handleSendMessageBtnClicked}>メッセージを送信する</button>:
                    <button className='py-[20px] px-[50px] rounded-2xl bg-[#2A6484] noto-medium text-xl text-white' onClick={handleSendMessageBtnClicked}>メッセージを送信する</button>
                }
                
            </div> 
        </div>
    )
}

export default MessageDetailPage;