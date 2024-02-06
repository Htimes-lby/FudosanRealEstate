import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useCookies } from 'react-cookie';
import RealEstateBigCard from '../components/RealEstateBigCard';
import Loading from '../components/Loading';

const ContactPostPage = () => {
    const location = useLocation();
    const [cookies, setCookie] = useCookies();
    const textareaRef = useRef(null);
    const searchParams = new URLSearchParams(location.search);
    const realEstateId = searchParams.get('realEstateId');
    // const isAdmin = cookies.user.isAdmin;

    const [realEstate, setRealEstate] = useState(null);
    const [contactMessages, setContactMessages] = useState(null);
    const [content, setContent] = useState('')

    const fetchData = async () => {
        const params = new URLSearchParams ({
            realEstateId: realEstateId,
        }).toString();
        try {
            const res = await axios.get(`/fetchPostContactMessages?${params}`);
            setContactMessages(res.data.contactMessages);
            const response = await axios.get(`/getRealEstateById?${params}`);
            setRealEstate(response.data.realEstate);
        } catch (error) {
            console.log(error.message);
        }
    }

    const sendContactMessage = async () => {
        let category;
        // if (isAdmin) {
        //     category = 'reply'
        // } {
        //     category = 'query'
        // }
        category = 'query';
        const payload = {
            realEstateId: realEstateId,
            posterId: realEstate.poster,
            content: content,
            category: category,
        }
        try {
            const res = await axios.post('savePostContactMessage', payload);
            fetchData();
            textareaRef.current.value = '';
            setContent('');
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    if( realEstate === null || contactMessages === null ) {
        return(
            <Loading/>
        )
    }

    return (
        <div className='flex flex-col items-center w-full bg-[#F1F1F1] pt-32'>
            <RealEstateBigCard realEstate={realEstate}></RealEstateBigCard>
            {
                contactMessages.length ===0 &&
                <div className='w-full min-h-[100px] mt-[70px] text-3xl noto-medium text-center'>表示するメッセージがありません</div>
            }
            {
                contactMessages.map((message, index) => (
                    <div key = {index} className={`relative w-[1200px] pt-10 pb-16 pl-12 pr-8 my-4 border-[1px] border-[#2A6484]/60 text-sm noto-regular ${message.category === 'query' ? 'bg-[#F2ECCD]' : 'bg-white'}`}>
                        {
                        message.category === 'query' ?
                        <p className='text-[20px] font-semibold mb-8'>{message.poster.name.firstNameGanji + message.poster.name.lastNameGanji}さん → ふどさんさん</p> :
                        <p className='text-[20px] font-semibold mb-8'>ふどさんさん → {message.poster.name.firstNameGanji + message.poster.name.lastNameGanji}さん</p>
                        }
                        <div className='whitespace-pre-wrap break-words'>{message.content}</div>
                        <div className = 'absolute right-6 bottom-6'>{message.createdAt}</div>
                    </div>
                ))
            }
            <div className='flex justify-center pt-[48px] pb-[45px]'>
                <textarea ref={textareaRef} className="border-[1px] border-black rounded-sm pt-1 pl-2" name="message" id="" cols="100" rows="4" onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <div className='flex justify-center mb-[100px]'>
                <button className='py-[20px] px-[50px] rounded-2xl bg-[#2A6484] noto-medium text-xl text-white ' onClick={sendContactMessage}>メッセージを送信する</button>
            </div> 
        </div>
    )
}

export default ContactPostPage;