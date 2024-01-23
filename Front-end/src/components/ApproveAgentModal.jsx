import React from 'react';
import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ApproveAgentModal = (props) => {

    const modalRef = useRef(null);
    const history = useHistory();

    const agent = props.agent;
    const handleToggleShowModal = props.handleToggleShowModal;
    const approved = props.approved;
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

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        }
    }, [])

    return(
        <>
        <div ref={modalRef} className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/3 flex flex-col items-center w-[450px] pt-16 bg-white rounded-xl noto-regular z-50'>
            <span className='text-2xl'>{`${agent.agentName}   ${agent.companyName}`}</span>
            <div className='flex justify-center pt-8 gap-7'>
                <span>{agent.phoneNumber}</span>
                <span>{agent.email}</span>
            </div>
            <div className='flex justify-center gap-5'>
                <span>{agent.address.province}</span>
                <span>{agent.address.city}</span>
                <span>{agent.address.street}</span>
            </div>
            <span className='w-[420px] mx-auto p-3 text-sm'>{agent.content}</span>
            <div className='flex w-[250px] h-[40px] justify-center items-center bg-[#2A6484] text-white text-lg noto-medium rounded-xl cursor-pointer mt-4 mb-2' onClick={() => handleContactPosterButtonClicked(agent._id)}>投稿者への連絡</div>
            {/* <div className='flex w-[250px] h-[40px] justify-center items-center bg-[#2A6484] text-white text-[24px] rounded-xl cursor-pointer' onClick={() => handleContactPosterButtonClicked(agent._id)}>Contact to Poster</div> */}
            {/* <div className='flex w-[250px] h-[40px] justify-center items-center bg-[#2A6484] text-white text-[24px] rounded-xl cursor-pointer' onClick={() => handleApproveToggle}>{approveToggleButtonContent}</div> */}
            <div className='flex w-[250px] h-[40px] justify-center items-center text-[#2A6484] bg-white text-lg noto-medium rounded-xl cursor-pointer mb-5 border-[2px] border-[#2A6484]' onClick={handleApproveToggle}>{approveToggleButtonContent}</div>
            <div></div>
        </div>
        <div className='opacity-75 bg-black fixed inset-0 z-40'></div>
        </>
    )
}

export default ApproveAgentModal;