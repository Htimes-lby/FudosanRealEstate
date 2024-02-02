import axios from 'axios';
import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ApproveAgentModal = (props) => {

    const modalRef = useRef(null);
    const history = useHistory();

    const agent = props.agent;
    const [approved, setApproved] = useState(agent.approved)
    const handleToggleShowModal = props.handleToggleShowModal;
    console.log('-------------------------------', approved)
    const handleApproveToggle = props.handleApproveToggle;
    const approveToggleButtonContent = approved ? '掲示板に投稿する' : '掲示板に投稿する';

    const handleContactPosterButtonClicked = (props) => {
        const agentId = props;
        const searchParams = new URLSearchParams();
        searchParams.set('agentId', agentId);
        history.push(`/admin-contact-agent?${searchParams.toString()}`)
    }

    const handleDocumentClick = (event) => {
        if(modalRef.current && !modalRef.current.contains(event.target)){handleToggleShowModal(false)}
    }

    const handleApproveToggleBtnClicked = async () => {
        if(approved) {
            try {
                const agentId = agent._id;
                const res = await axios.post('/disapproveAgent', {agentId});
                setApproved((prevState) => !prevState);
                
            } catch (error) {
                console.log({error: error.message});
            }
        } else {
            try {
                const agentId = agent._id;
                const res = await axios.post('/approveAgent', {agentId});
                setApproved((prevState) => !prevState);
                
            } catch (error) {
                console.log({ error: error.message });
            }
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        }
    }, [])

    return(
        <>
        <div ref={modalRef} className='fixed bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 flex flex-col items-center w-[450px] pt-16 bg-white rounded-xl noto-regular z-50'>
            <div className='flex justify-center gap-6'>
                <span className='text-xl'>{agent.agentName.lastNameGanji} {agent.agentName.firstNameGanji}</span>
                <span className=' text-xl'>{agent.companyName}</span>
            </div>

            <div className='flex justify-center gap-5 mt-3'>
                <span>{agent.address.province}</span>
                <span>{agent.address.city}</span>
                <span>{agent.address.street}</span>
            </div>

            <div className='flex justify-center mt-1 gap-7'>
                <span>{agent.phoneNumber}</span>
                <span>{agent.agentEmail}</span>
            </div>
            
            <span className='w-[420px] max-h-[400px] overflow-y-auto mx-auto p-3 text-sm mt-4'>{agent.content}</span>
            <div className='flex w-[250px] h-[40px] justify-center items-center bg-[#2A6484] text-white text-lg noto-medium rounded-xl cursor-pointer mt-4 mb-2' onClick={() => handleContactPosterButtonClicked(agent._id)}>投稿者への連絡</div>
            {/* <div className='flex w-[250px] h-[40px] justify-center items-center bg-[#2A6484] text-white text-[24px] rounded-xl cursor-pointer' onClick={() => handleContactPosterButtonClicked(agent._id)}>Contact to Poster</div> */}
            {/* <div className='flex w-[250px] h-[40px] justify-center items-center bg-[#2A6484] text-white text-[24px] rounded-xl cursor-pointer' onClick={() => handleApproveToggle}>{approveToggleButtonContent}</div> */}
            <div className='flex w-[250px] h-[40px] justify-center items-center text-[#2A6484] bg-white text-lg noto-medium rounded-xl cursor-pointer mb-5 border-[2px] border-[#2A6484]' onClick={handleApproveToggleBtnClicked}>{approved ? '掲示板に削除する' : '掲示板に投稿する'}</div>
            <div></div>
        </div>
        <div className='opacity-75 bg-black fixed inset-0 z-40'></div>
        </>
    )
}

export default ApproveAgentModal;