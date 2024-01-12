import React from 'react';
import Category from '../components/Category';
import GoogleMapComponent from '../components/GoogleMapComponent';
import AgentCard from "../components/AgentCard"

const ItemBoardPage = () => {

    function click(e){
        const categoryId = e.target.innerHTML
        alert(e.target.innerHTML)
    }

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

    const myAgent = [
        {companyName :"会社名",
        agentName:"担当者名",
        phoneNumber:"0123456789",
        emailAddress:"abcdef@gmail.com",
        content:"テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"},
                {companyName :"会社名",
        agentName:"担当者名",
        phoneNumber:"0123456789",
        emailAddress:"abcdef@gmail.com",
        content:"テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"},
                {companyName :"会社名",
        agentName:"担当者名",
        phoneNumber:"0123456789",
        emailAddress:"abcdef@gmail.com",
        content:"テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"},
                {companyName :"会社名",
        agentName:"担当者名",
        phoneNumber:"0123456789",
        emailAddress:"abcdef@gmail.com",
        content:"テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"+
                "テキスト テキスト テキスト テキスト テキスト テキスト テキスト"},
            
            ]

    return (
        <div className='bg-[#F1F1F1] flex'>
            <div className='w-[450px] ml-[137px] pt-[130px]   '>
                {Object.keys(myImage).map((key, i) => (
                    <div className='mb-[27px] ml-[45px] inline-block'  key={i}>
                        <Category text={key} img={myImage[key]} onClick={click} alt={i} />
                    </div>
                    
                ))}
            </div>
            <div>
                <div className='pt-[80px] pl-[105px]'>

                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">北海道</span>
                        <span>北海道</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">東北</span>
                        <span>青森 岩手 秋田 宮城 山形 福島</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">関東</span>
                        <span>茨城 栃木 群馬 埼玉 千葉 東京 神奈川</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">甲信越</span>
                        <span>新潟 長野 山梨</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">北陸</span>
                        <span>富山 石川 福井</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">東海</span>
                        <span>静岡 愛知 岐阜 三重</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">近畿</span>
                        <span>滋賀 京都 大阪 兵庫 奈良 和歌山</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">中国</span>
                        <span>岡山 広島 鳥取 島根 山口</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">四国</span>
                        <span>香川 徳島 愛媛 高知</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">九州</span>
                        <span>福岡 佐賀 長崎 大分 熊本 宮崎 鹿児島</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">沖繩</span>
                        <span>沖繩</span>
                    </div>
                    <div className='flex gap-[22px]'>
                        <span className="text-[#02540A] text-[16px] w-[48px] pb-[10px]">海外</span>
                        <span>豪州 北米 欧州 アジア</span>
                    </div>
                </div>
                <div className='pt-[20px] pl-[70px]'>
                    <GoogleMapComponent />
                </div>
                
            </div>
            <div className='pt-[40px] pl-[200px] pb-[24px] '>
                
                <div className='pt-[65px] w-[600px] bg-white text-center flex flex-col items-center justify-center pb-[55px] shadow-lg rounded-2xl' >
                <div className=' border-b-2 pt-[2px] border-black w-[500px]'>
                    <ul className='flex  justify-center text-[14px] relative'>
                        <li  onClick={click} className=' w-[100px] absolute hover:box-content hover:border-b-4 left-[20px] top-[-23px]  hover:border-red-700'>不動産業者</li>
                        <li  onClick={click} className=' w-[100px] absolute hover:box-content hover:border-b-4 top-[-23px]  hover:border-red-700'>司法書士</li>
                        <li  onClick={click} className=' w-[100px] absolute hover:box-content hover:border-b-4 right-[20px] top-[-23px] hover:border-red-700'>投資家</li>
                    </ul>
                </div>
                    {myAgent.map((agent, index) => (
                        <div className='pt-[45px]'> 
                            <AgentCard agentInfo={agent} key={index} />                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemBoardPage;
