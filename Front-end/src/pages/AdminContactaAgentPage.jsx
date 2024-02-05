import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useCookies } from 'react-cookie';
import { useRef } from 'react';

const AdminContactAgentPage = () => {
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const agentId = searchParams.get('agentId');
    const posterId = searchParams.get('posterId');
    console.log('agentId', agentId)
    const [cookies, setCookie] = useCookies();
    const isAdmin = cookies.user.isAdmin;
    const textareaRef = useRef(null);

    const [contactMessages, setContactMessages] = useState([]);
    const [content, setContent] = useState('');
    const [agent, setAgent] = useState(null);

    const fetchContactMessages = async () => {
        const params = new URLSearchParams({clientId: posterId}).toString();
        try {
            console.log('I am here...............')
            const res = await axios.get(`/fetchGeneralContactMessages?${params}`);
            setContactMessages(res.data.contactMessages);
        } catch (error) {
            console.log(error.message);
        }
    }

    const fetchAgentData = async () => {
        const params = new URLSearchParams({agentId: agentId}).toString();
        try {
            const res = await axios.get(`/getAgentById?${params}`);
            console.log('==================================', res.data.agent);
            setAgent(res.data.agent);
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&', agent)
        } catch (error) {
            console.log(error.message);
        }
    }

    const sendContactMessage = async () => {
        let category;
        // if (isAdmin) {
        //     category = 'reply';
        // } else {
        //     category = 'query';
        // }
        category = 'query';
        const payload = {
            category: category,
            clientId: agent.posterId,
            content: content,
        }
        console.log('payload', payload)
        try {
            const res = await axios.post('/saveGeneralContactMessage', payload);
            fetchContactMessages();
            textareaRef.current.value = '';
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchAgentData();
        fetchContactMessages();
    },[])

    if(contactMessages === null || agent === null) {
        return (
            <div>loading...................</div>
        )
    }

    return(
        <div className='flex flex-col items-center w-full bg-[#F1F1F1] pt-20 noto-regular'>
            <div className='flex flex-col items-center w-[500px] px-4 py-3 mb-16 bg-white rounded-lg border-[1px] border-black/30 cursor-pointer'>
                <div className='flex items-center justify-between w-full'>
                    <div>{agent.agentName.firstNameGanji}さん {agent.companyName}</div>
                    <div className='flex flex-col items-end gap-[1px]'>
                        <span>{agent.phoneNumber}</span>
                        <span>{agent.agentEmail}</span>
                    </div>
                </div>
                <div className='text-xs pt-3 max-h-[100px] overflow-y-auto'>{agent.content}</div>
            </div>
            {
                contactMessages.length ===0 &&
                <div className='w-full min-h-[150px] mt-[120px] text-[32px] noto-medium text-center'>まだメッセージはありません</div>
            }
            {
                contactMessages.map((message, index) => (
                    // <div className={`relative w-[1200px] pt-6 pb-16 pl-12 pr-8 my-4 border-[1px] border-[#2A6484]/60 ${message.category === 'query' ? 'bg-[#F2ECCD]' : 'bg-white'}`}>
                    //     <div>{message.content}</div>
                    //     <div className = 'absolute right-6 bottom-6'>{message.date}</div>
                    // </div>
                    <div key={index} className={`w-[900px] h-auto border-2 border-[#2A6484]/40 p-4 mb-4 ${message.category === 'query' ? 'bg-white' : 'bg-[#F2ECCD]'}`}>
                        {
                            message.category === 'query' ?
                            <p className='text-[20px] font-semibold mb-2'>{message.clientId.name.firstNameGanji + message.clientId.name.lastNameGanji}さん → ふどさんさん</p> :
                            <p className='text-[20px] font-semibold mb-2'>ふどさんさん → {message.clientId.name.firstNameGanji + message.clientId.name.lastNameGanji}さん</p>
                        }
                        <p className='text-[16px] whitespace-pre-wrap break-words'>{message.content}</p>
                    </div>
                ))
            }
            <div className='flex justify-center pt-[48px] pb-[45px]'>
                <textarea ref={textareaRef} className="border-[1px] border-black text-sm rounded-sm pt-1 pl-2" name="message" id="" cols="100" rows="4" onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className='flex justify-center mb-[100px]'>
                <button className='py-[20px] px-[50px] rounded-2xl bg-[#2A6484] text-[20px] text-white noto-medium' onClick={sendContactMessage}>メッセージを送信する</button>
            </div> 
        </div>
    );
}

export default AdminContactAgentPage;