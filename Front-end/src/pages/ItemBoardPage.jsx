import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Category from '../components/Category';
import GoogleMapComponent from '../components/GoogleMapComponent';
import AgentCard from "../components/AgentCard"

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

const agents = [
{
    _id:'',
    posterId:'',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    emailAddress:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
},
{
    _id:'',
    posterId:'',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    emailAddress:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
},
{
    _id:'',
    posterId:'',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    emailAddress:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
},
{
    _id:'',
    posterId:'',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    emailAddress:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
},
{
    _id:'',
    posterId:'',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    emailAddress:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
},
{
    _id:'',
    posterId:'',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    emailAddress:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
},
{
    _id:'',
    posterId:'',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    emailAddress:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
},
{
    _id:'',
    posterId:'',
    companyName :"会社名",
    agentName:"担当者名",
    phoneNumber:"0123456789",
    emailAddress:"abcdef@gmail.com",
    content:`テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
},
]

const ItemBoardPage = () => {

    const history = useHistory();
    const [activeAgentCategory, setActiveAgentCategory] = useState('judicialscrivener')
    const [displayAgents, setDisplayAgents] = useState (false);

    const handleClick = (e, params) => {
        const searchParams = new URLSearchParams();
        searchParams.set('searchStandardContent', e.target.innerText);
        searchParams.set('searchStandard', params);
        history.push(`/item-list?${searchParams.toString()}`)
    }
    const agentCardClicked = (props) => {
        const agentId = props;
        const agentPosterId = agents[agentId].posterId;
        const searchParams = new URLSearchParams();
        searchParams.set('agentId', agentId);
        searchParams.set('agentPosterId', agentPosterId);
        searchParams.set('previous-page', 'itemBoardPage')
        history.push(`/message-detail?${searchParams.toString()}`);
        // history.push('/message-detail', {state: {agentData}});
    }
    const handleDisplayAgentsToggle = (value) => {
        setDisplayAgents(value);
    }

    return (
        <div className={`flex justify-center relative bg-[#F1F1F1] pb-8 ${displayAgents? 'gap-20' : 'gap-40'}`}>
            <div className='w-[480px] pt-[100px]'>
                {Object.keys(myImage).map((key, i) => (
                    <div className='mb-[27px] ml-[45px] inline-block cursor-pointer' key={i}>
                        <Category text={key} img={myImage[key]} onClick={(e) => handleClick(e,'searchByCategory')} alt={i} />
                    </div>    
                ))}
            </div>
            <div className='flex flex-col items-center'>
                <div className='pt-[60px] noto-medium' >
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>北海道</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span>北海道</span>
                        </div>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>東北</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>青森</span>
                            <span className='pr-[5px]'>岩手</span>
                            <span className='pr-[5px]'>秋田</span>
                            <span className='pr-[5px]'>宮城</span>
                            <span className='pr-[5px]'>山形</span>
                            <span className='pr-[5px]'>福島</span>                         
                        </div>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>関東</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>茨城</span>
                            <span className='pr-[5px]'>栃木</span>
                            <span className='pr-[5px]'>群馬</span>
                            <span className='pr-[5px]'>埼玉</span>
                            <span className='pr-[5px]'>千葉</span>
                            <span className='pr-[5px]'>東京</span>
                            <span className='pr-[5px]'>神奈川</span>
                            
                        </div>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>甲信越</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>新潟</span>
                            <span className='pr-[5px]'>長野</span>
                            <span className='pr-[5px]'>山梨</span>
                                                        
                        </div>
                        
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>北陸</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>富山</span>
                            <span className='pr-[5px]'>石川</span>
                            <span className='pr-[5px]'>福井</span>
                                                        
                        </div>
                        
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>東海</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>静岡</span>
                            <span className='pr-[5px]'>愛知</span>
                            <span className='pr-[5px]'>岐阜</span>
                            <span className='pr-[5px]'>三重</span>
                                                        
                        </div>
                        
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>近畿</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>滋賀</span>
                            <span className='pr-[5px]'>京都</span>
                            <span className='pr-[5px]'>大阪</span>
                            <span className='pr-[5px]'>兵庫</span>
                            <span className='pr-[5px]'>奈良</span>
                            <span className='pr-[5px]'>和歌山</span>
                                                        
                        </div>
                        
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>中国</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>岡山</span>
                            <span className='pr-[5px]'>広島</span>
                            <span className='pr-[5px]'>鳥取</span>
                            <span className='pr-[5px]'>島根</span>
                            <span className='pr-[5px]'>山口</span>
                                                                                    
                        </div>
                        
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>四国</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>香川</span>
                            <span className='pr-[5px]'>徳島</span>
                            <span className='pr-[5px]'>愛媛</span>
                            <span className='pr-[5px]'>高知</span>
                                                                                                              
                        </div>
                        
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>九州</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>福岡</span>
                            <span className='pr-[5px]'>佐賀</span>
                            <span className='pr-[5px]'>長崎</span>
                            <span className='pr-[5px]'>大分</span>
                            <span className='pr-[5px]'>熊本</span>
                            <span className='pr-[5px]'>宮崎</span>
                            <span className='pr-[5px]'>鹿児島</span>                                                                                
                        </div>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>沖繩</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>沖繩</span>                                                                                                                                        
                        </div>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] w-[48px] pb-[10px] cursor-pointer" onClick={(e) => handleClick(e, 'searchByProvince')}>海外</span>
                        <div onClick={(e) => handleClick(e, 'searchByCity')} className=' cursor-pointer'>
                            <span className='pr-[5px]'>豪州</span>
                            <span className='pr-[5px]'>北米</span>
                            <span className='pr-[5px]'>欧州</span>
                            <span className='pr-[5px]'>アジア</span>                                                                                           
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
                            <span className=' w-[33%] cursor-pointer pb-3' onClick={() => setActiveAgentCategory('realEstateAgent')}>不動産業者</span>
                            <span className=' w-[34%] cursor-pointer' onClick={() => setActiveAgentCategory('judicialscrivener')}>司法書士</span>
                            <span className=' w-[33%] cursor-pointer' onClick={() => setActiveAgentCategory('invester')}>投資家</span>
                            <div className={`absolute w-[33.3%] h-1 bottom-0 bg-[#f13f13] rounded-md transition-all duration-500 ${activeAgentCategory === 'realEstateAgent' ? 'left-0' : activeAgentCategory === 'judicialscrivener' ? 'left-[33.3%]' : 'left-[66.6%]' }`}></div>
                        </div>
                        {agents.map((agent, index) => (
                            <div className='pt-[25px]' onClick={() => agentCardClicked(index)}> 
                                <AgentCard agent={agent} key={index} />                           
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    )
}

export default ItemBoardPage;
