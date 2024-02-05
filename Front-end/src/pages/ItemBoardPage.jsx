import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import Category from '../components/Category';
import GoogleMapComponent from '../components/GoogleMapComponent';
import AgentCard from "../components/AgentCard"
import { useCookies } from 'react-cookie';

const myImage = 
{
    "古民家":require("../assets/img/category/1.png"),
    "マンション・ビル":require("../assets/img/category/2.png"),
    "一戸建て":require("../assets/img/category/3.png"),
    "店舗・倉庫・投資用物件":require("../assets/img/category/4.png"),
    "原野":require("../assets/img/category/5.png"),
    "林野":require("../assets/img/category/6.png"),
    "農地":require("../assets/img/category/7.jpg"),
    "住宅地":require("../assets/img/category/8.png"),
}

const legions = {
    '東北': ['青森', '岩手', '秋田', '宮城', '山形', '福島'],
    '関東': ['茨城', '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川'],
    '甲信越': ['新潟', '長野', '山梨'],
    '北陸': ['富山', '石川', '福井'],
    '東海': ['静岡', '愛知', '岐阜', '三重'],
    '近畿': ['滋賀', '京都', '大阪', '兵庫', '奈良', '和歌山'],
    '中国': ['岡山', '広島', '鳥取', '島根', '山口'],
    '四国': ['香川', '徳島', '愛媛', '高知'],
    '九州': ['福岡', '佐賀', '長崎', '大分', '熊本', '宮崎', '鹿児島'],
}
const ItemBoardPage = () => {

    const history = useHistory();
    const [cookies, setCookies] = useCookies();

    const [isAdmin, setIsAdmin] = useState();
    const [myId, setMyId] = useState()
    const [activeAgentCategory, setActiveAgentCategory] = useState('司法書士')
    const [displayAgents, setDisplayAgents] = useState (false);
    const [agents, setAgents] = useState ("");

    useEffect(() => {
        const fetchAgentData = async () => {
            const response = await axios.get("/getAgent");   
            setAgents(response.data);
            console.log(response.data);
        }
        fetchAgentData();
        if(cookies.token){setMyId(cookies.user._id)}
        }, []);

        console.log(agents);
        
    const goToItemListPageWithFilterContent = (e, params) => {
        const searchParams = new URLSearchParams();
        searchParams.set('filterContent', e.target.innerText);
        searchParams.set('filterLabel', params);
        history.push(`/item-list?${searchParams.toString()}`)
    }

    const goToItemListPageWithProvinceAddedFilterContent = (e, params) => {
        const searchParams = new URLSearchParams();
        const filterContent = e.target.innerText + '県';
        searchParams.set('filterLabel', 'filterByProvince');
        searchParams.set('filterContent', filterContent);
        history.push(`/item-list?${searchParams.toString()}`)
    }
    
    const goToItemListPageWithLegion = (e) => {
        const searchParams = new URLSearchParams();
        searchParams.set('filterLabel', 'filterByLegion');
        searchParams.set('filterContent', e.target.innerText);
        history.push(`/item-list?${searchParams.toString()}`)
    }
    const agentCardClicked = (props) => {
        const agentId = props.agentId;
        const posterId = props.posterId;
        console.log(agentId, posterId, myId);
        if(cookies.token) {
            if (isAdmin || posterId === myId) {
                const searchParams = new URLSearchParams({
                    'agentId': agentId,
                    'posterId': posterId,
                }).toString();
                history.push(`/admin-contact-agent?${searchParams}`);
            } else{
                const searchParams = new URLSearchParams({
                    'previous-page': 'itemBoardPage',
                    'agentId': agentId,
                    'opponentId': posterId,
                }).toString();
                history.push(`message-detail?${searchParams}`);
            }
        } else {
            history.push('login')
        }
        
        // const index = props;
        // const opponentId = agents[index].poster;
        // const agentId = agents[index]._id;
        // const searchParams = new URLSearchParams();
        // searchParams.set('opponentId', opponentId);
        // searchParams.set('agentId', agentId);
        // searchParams.set('previous-page', 'itemBoardPage')
        // history.push(`/message-detail?${searchParams.toString()}`);
        // // history.push('/message-detail', {state: {agentData}});
    }
    const handleDisplayAgentsToggle = (value) => {
        setDisplayAgents(value);
    }

    return (
        <div className={`flex justify-center relative bg-[#F1F1F1] pb-8 ${displayAgents? 'gap-20' : 'gap-40'}`}>
            <div className='w-[480px] pt-[100px]'>
                {Object.keys(myImage).map((key, i) => (
                    <div className='mb-[27px] ml-[45px] inline-block cursor-pointer' key={i}>
                        <Category text={key} img={myImage[key]} onClick={(e) => goToItemListPageWithFilterContent(e,'filterByCategory')} alt={i} />
                    </div>    
                ))}
            </div>
            <div className='flex flex-col items-center'>
                <div className='pt-[60px] noto-medium' >
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => goToItemListPageWithFilterContent(e, 'filterByProvince')}>北海道</span>
                        <div onClick={(e) => goToItemListPageWithFilterContent(e, 'filterByProvince')} className=' cursor-pointer'>
                            <span>北海道</span>
                        </div>
                    </div>
                    {
                        Object.keys(legions).map((legion, index) => (
                            <div key={index} className='flex gap-[22px]'>
                                <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => goToItemListPageWithLegion(e)}>{legion}</span>
                                <div onClick={(e) => goToItemListPageWithProvinceAddedFilterContent(e)} className=' cursor-pointer'>
                                    {
                                        legions[legion].map((province, index) => (
                                            <span key={index} className='pr-[5px]'>{province}</span>
                                    ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => goToItemListPageWithProvinceAddedFilterContent(e)}>沖繩</span>
                        <div onClick={(e) => goToItemListPageWithProvinceAddedFilterContent(e)} className=' cursor-pointer'>
                            <span className='pr-[5px]'>沖繩</span>                                                                                                                                        
                        </div>
                    </div>
                </div>
                <div className='pt-[20px]'>
                    <GoogleMapComponent />
                </div>
            </div>
            <div className={`absolute top-32 right-32 text-[16px] noto-medium border-b-2 border-b-emerald-600 py-1 px-3 cursor-pointer ${displayAgents ? 'hidden' : 'block'}`} onClick={() => handleDisplayAgentsToggle(true)}><div className = 'pr-3 fa-solid fa-arrow-left'></div>エージェントを見る</div>
            {
                displayAgents &&
                <div className='relative mt-4 mb-[24px] p-2  bg-white shadow-lg rounded-2xl'>
                    <div className='absolute top-4 right-6 text-sm noto-bold cursor-pointer' onClick={() => handleDisplayAgentsToggle(false)}>隠れる<div className = 'pl-2 fa-solid fa-arrow-right'></div></div>
                    <div className='flex flex-col items-center w-[600px] h-[800px]  pt-[50px] pb-[55px] bg-white text-center  overflow-y-scroll no-scrollbar' >
                        <div className='flex relative border-b-2 pt-[2px] border-black w-[500px] noto-medium transition-all duration-300'>
                            <span className=' w-[33%] cursor-pointer pb-3' onClick={() => setActiveAgentCategory('不動産業者')}>不動産業者</span>
                            <span className=' w-[34%] cursor-pointer' onClick={() => setActiveAgentCategory('司法書士')}>司法書士</span>
                            <span className=' w-[33%] cursor-pointer' onClick={() => setActiveAgentCategory('投資家')}>投資家</span>
                            <div className={`absolute w-[33.3%] h-1 bottom-0 bg-[#f13f13] rounded-md transition-all duration-500 ${activeAgentCategory === '不動産業者' ? 'left-0' : activeAgentCategory === '司法書士' ? 'left-[33.3%]' : 'left-[66.6%]' }`}></div>
                        </div>
                        {agents.map((agent, index) => (
                            agent.category === activeAgentCategory &&
                            <div className='pt-[25px]' onClick={() => agentCardClicked({agentId: agent._id, posterId: agent.posterId})}> 
                                <AgentCard agent={agent} key={index} />                           
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    )
}

export default ItemBoardPage;
