import React, { useState } from 'react';
import ApproveAgentModal from '../components/ApproveAgentModal';
const agents = [
    {
    _id:'123',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    email:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
    address:{
        province:'aaaaaaaa',
        city:'bbbbbbbbbb',
        street:'ccccccccc',
    },
    approved:'false',
    },
    {
        _id:'123',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    email:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
    address:{
        province:'aaaaaaaa',
        city:'bbbbbbbbbb',
        street:'ccccccccc',
    },
    approved:'false',
    },
    {
        _id:'123',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    email:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
    address:{
        province:'aaaaaaaa',
        city:'bbbbbbbbbb',
        street:'ccccccccc',
    },
    approved:'false',
    },
    {
        _id:'123',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    email:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
    address:{
        province:'aaaaaaaa',
        city:'bbbbbbbbbb',
        street:'ccccccccc',
    },
    approved:'false',
    },
    {
        _id:'123',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    email:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
    address:{
        province:'aaaaaaaa',
        city:'bbbbbbbbbb',
        street:'ccccccccc',
    },
    approved:'false',
    },
    {
        _id:'123',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    email:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
    address:{
        province:'aaaaaaaa',
        city:'bbbbbbbbbb',
        street:'ccccccccc',
    },
    approved:'false',
    },
    {
        _id:'123',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    email:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
    address:{
        province:'aaaaaaaa',
        city:'bbbbbbbbbb',
        street:'ccccccccc',
    },
    approved:'false',
    },
    {
        _id:'123',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    email:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
    address:{
        province:'aaaaaaaa',
        city:'bbbbbbbbbb',
        street:'ccccccccc',
    },
    approved:'false',
    },
        
]
const AdminViewAgentPage = () => {

    const [activeAgentCategory, setActiveAgentCategory] = useState('judicialscrivener');
    const [showApproveAgentModal, setShowApproveAgentModal] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState();
    const [approved, setApproved] = useState(false);
    const handleAgentClicked = (index) => {
        setSelectedAgent(agents[index]);
        setShowApproveAgentModal(true);
    }
    const handleToggleShowModal = (value) => {
        setShowApproveAgentModal(value);
    }
    const handleApproveToggle = () => {
        console.log('I am here', approved);
        setApproved((prevState) => !prevState);
    }
    return (
        <div className='relative flex flex-col items-center w-full pt-20 bg-[#F1F1F1]'>
            <div className='text-center text-[32px] font-semibold'>エージェントを見る</div>
            <div className='flex relative border-b-2 pt-10 border-black w-[500px] transition-all duration-300'>
                <span className=' w-[33%] cursor-pointer text-center pb-3' onClick={() => setActiveAgentCategory('realEstateAgent')}>不動産業者</span>
                <span className=' w-[34%] cursor-pointer text-center' onClick={() => setActiveAgentCategory('judicialscrivener')}>司法書士</span>
                <span className=' w-[33%] cursor-pointer text-center' onClick={() => setActiveAgentCategory('invester')}>投資家</span>
                <div className={`absolute w-[33.3%] h-1 bottom-0 bg-[#f13f13] rounded-md transition-all duration-500 ${activeAgentCategory === 'realEstateAgent' ? 'left-0' : activeAgentCategory === 'judicialscrivener' ? 'left-[33.3%]' : 'left-[66.6%]' }`}></div>
            </div>
            <div className='grid grid-cols-2 gap-x-16 gap-y-5 max-w-[1250px] pt-10 pb-24'>
            {
                agents.map((agent, index) => (
                    <div key={index} className='flex flex-col items-center w-[500px] px-4 py-3 bg-white rounded-lg border-[1px] border-black/30 cursor-pointer' onClick={() => handleAgentClicked(index)}>
                        <div className='flex items-center justify-between w-full'>
                            <div>{agent.agentName} {agent.companyName}</div>
                            <div className='flex flex-col items-end gap-[1px]'>
                                <span>{agent.phoneNumber}</span>
                                <span>{agent.email}</span>
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