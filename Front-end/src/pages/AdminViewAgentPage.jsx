import React, { useEffect, useState } from 'react';
import ApproveAgentModal from '../components/ApproveAgentModal';
import axios from 'axios';
import Loading from '../components/Loading';

const AdminViewAgentPage = () => {

    const [activeAgentCategory, setActiveAgentCategory] = useState('司法書士');
    const [showApproveAgentModal, setShowApproveAgentModal] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState();
    const [agents, setAgents] = useState(null);
    const [approved, setApproved] = useState(false);
    const handleAgentClicked = (index) => {
        setSelectedAgent(agents[index]);
        setShowApproveAgentModal(true);
    }
    const handleToggleShowModal = (value) => {
        setShowApproveAgentModal(value);
    }
    const handleApproveToggle = () => {
        setApproved((prevState) => !prevState);
    }
    const fetchAgentData = async () => {
        const res = await axios.get('/getAgentByAdmin');
        setAgents(res.data);
    }

    useEffect (() => {
        if(showApproveAgentModal === false) {
            fetchAgentData();
        }
    },[showApproveAgentModal])

    if(agents === null) {
        return (
            <div><Loading /></div>
        )
    }
    return (
        <div className='relative flex flex-col items-center w-full pt-20 bg-[#F1F1F1]'>
            <div className='text-center text-[32px] font-semibold'>エージェントを見る</div>
            <div className='flex relative border-b-2 pt-10 border-black w-[500px] transition-all duration-300'>
                <span className=' w-[33%] cursor-pointer text-center pb-3' onClick={() => setActiveAgentCategory('不動産業者')}>不動産業者</span>
                <span className=' w-[34%] cursor-pointer text-center' onClick={() => setActiveAgentCategory('司法書士')}>司法書士</span>
                <span className=' w-[33%] cursor-pointer text-center' onClick={() => setActiveAgentCategory('投資家')}>投資家</span>
                <div className={`absolute w-[33.3%] h-1 bottom-0 bg-[#f13f13] rounded-md transition-all duration-500 ${activeAgentCategory === '不動産業者' ? 'left-0' : activeAgentCategory === '司法書士' ? 'left-[33.3%]' : 'left-[66.6%]' }`}></div>
            </div>
            <div className='grid grid-cols-2 gap-x-16 gap-y-5 max-w-[1250px] min-h-[600px] pt-10 pb-24'>
                {
                    agents.length === 0 &&
                    <div className='pt-[200px] text-3xl noto-medium'>ここに掲載されたエージェントはありません。</div>
                }
                {
                    agents.map((agent, index) => (
                        agent.category === activeAgentCategory &&
                        <div key={index} className='flex flex-col items-center w-[500px] px-4 py-3 bg-white rounded-lg border-[1px] border-black/30 cursor-pointer' onClick={() => handleAgentClicked(index)}>
                            <div className='flex items-center justify-between w-full'>
                                <div> {agent.agentName.firstNameGanji} {agent.companyName}</div>
                                <div className='flex flex-col items-end gap-[1px]'>
                                    <span>{agent.phoneNumber}</span>
                                    <span className='text-sm'>{agent.agentEmail}</span>
                                </div>
                            </div>
                            <div className='text-xs pt-3 line-clamp-3'>{agent.content}</div>
                        </div>
                    ))
                }
            </div>
            {
                showApproveAgentModal &&
                <ApproveAgentModal agent = { selectedAgent } handleToggleShowModal={handleToggleShowModal} approved={approved} handleApproveToggle={handleApproveToggle}/>
            }
        </div>
    );
}

export default AdminViewAgentPage;