import React from 'react';
import Category from "../components/Category"
import FlagTextContainer from "../components/FlagTextContainer"
import SoldFeedbackCard from '../components/SoldFeedbackCard';
import RealEstateSmallCard from '../components/RealEstateSmallCard';
import PrivacyForm from "../components/Form/PrivacyForm";
import ContentForm from "../components/Form/ContentForm";
import OverviewHouseForm from "../components/Form/OverviewHouseForm";
import UploadImageForm from "../components/Form/UploadImageForm";
import ConditionForm from "../components/Form/ConditionForm"

const PostREPage = () => {

   
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

    const myFlag=[
        "とんでもない田舎","雨漏りしている","雑草が生え放題","荷物がまだ片付いてない",
        "値段が決まっていない", "仏壇がそのまま", "とにかく古い", "相続が終わっていない",
        "未登記のまま", "農地、山林もある"
    ] 
    
    const myArray = [
        require("../assets/img/feedback/1.jpg"),
        require("../assets/img/feedback/2.jpg"),
        require("../assets/img/feedback/3.jpg"),
        require("../assets/img/feedback/4.jpg"),
        require("../assets/img/feedback/5.jpg"),
        require("../assets/img/feedback/6.jpg")
    ];

    const text = 
    "テキスト  テキスト  テキスト  テキスト  テキスト  テキスト "+
    "テキスト  テキスト  テキスト  テキスト  テキスト  テキスト"+
    "テキスト  テキスト  テキスト  テキスト  テキスト  テキスト"+
    "テキスト  テキスト  テキスト  テキスト  テキスト  テキスト"+
    "テキスト  テキスト  テキスト  テキスト  テキスト  テキスト"+
    "テキスト  テキスト  テキスト  テキスト  テキスト  テキスト"+
    "テキスト  テキスト  テキスト  テキスト  テキスト  テキスト"+
    "テキスト  テキスト  テキスト  テキスト  テキスト  テキスト"

    const realEstateInfo = 
        {
            
            
           
            images: myArray,
            briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
            fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
            テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
            basicInfo: {
                budget: '1',
                layout: '4LDK',
                landarea: '7777m²',
                buildingarea: '4444m²',
                deadline: '即日',
                parking: '3台',
            },
            realEstateCategory: 'building'
        }

    return (
        <div className='bg-[#F1F1F1]'> 
            <div className='container'>
                <div className='flex items-center justify-center pt-[100px] pb-[132px]'>
                    <span className='text-[48px] pr-[18px]'>ふどうさん</span>
                    <span className='text-[32px]'>活市場</span>
                </div>
                <div className='flex gap-[163px]'>
                    <div className='w-[450px] '>
                        {Object.keys(myImage).map((key, i) => (
                            <div className='m-[15px] inline-block'  key={i}>
                                <Category text={key} img={myImage[key]} alt={i} />
                            </div>
                            
                        ))}
                    </div>
                    <div className='w-[720px] m-[15px]'>
                        <div>
                            <p className='text-[40px] text-Architects Daughter text-center'>どんな物件でも大丈夫！ </p>
                        </div>
                        <div>
                            <p className='text-[25px] pt-[54px] pr-[10px]'> ふどうさん活市場では、どんな場所でも、どんなに古くても、
                                掲載条件はありません。自由に載せていいサイトです。</p>
                        </div>
                        <div className='pt-[25px]'>
                            {myFlag.map((text, index) => (
                                <div className='inline-block m-[15px]'> 
                                    <FlagTextContainer text={text} key={index} />                           
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='pt-[75px] pb-[63px]'>
                        <p className='text-[40px] text-center '>ふどうさん活市場で売れました！</p>
                    </div>
                    <div>
                        {myArray.map((image, index) => (
                            <div className='inline-block m-[15px]'> 
                                <SoldFeedbackCard img={image} text={text} key={index} />                           
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center pt-[70px] pb-[85px]'>
                    <div className='text-center  bg-[#0D4868] w-[1070px] text-white'>
                        <p className='text-[30px] p-[15px] mt-[15px]'>個人情報を明かさずに相手とやりとりできます</p>
                        <p className='text-[30px] p-[15px]'>契約書類はすべて国家資格の宅建士が作成</p>
                        <p className='text-[30px] p-[15px] mb-[15px]'>掲載は一切無料</p>
                    </div>
                </div>
                <div className='bg-white rounded-2xl '>
                    <div className='w-[880px] postContainer'>
                        <div>
                            <p className='text-[36px] pt-[80px] text-center'>掲載のご依頼</p>
                        </div>
                        <div className='pt-[60px] flex'>
                            <div>
                                <p className='text-[24px] pb-[60px]'>どうぞ、ご存じの範囲でありのままご記入ください。</p>
                                <p className='pb-[21px]'>※掲載内容は後からでも追記、修正できます。</p>
                                <p className='pb-[21px]'>※掲載の休止、終了はいつでも可能です。</p>
                                <p>※どう書いたらいいか分からないなどのご相談もお受けします。</p>
                            </div>
                            <div className='pl-[38px]'>
                                <RealEstateSmallCard  realEstate = {realEstateInfo}  />    
                            </div>
                        </div>
                        <div className='pt-[120px]'>
                            <PrivacyForm />
                        </div>
                        <div className='pt-[53px]'>
                            <ContentForm />
                        </div>
                        <div className='pt-[77px]'>
                            <OverviewHouseForm />
                        </div>
                        <div>
                            <UploadImageForm title="物件写真" button="画像ファイルを選択する" width1={"w-[700px]"} width2={"w-[177px]"} gap={"gap-[35px]"} />
                        </div>
                        <div className='flex justify-center'>
                            <ConditionForm />
                        </div>
                        <div className='flex justify-center pt-[105px] pb-[170px]'>
                            <button className='bg-[#2A6484] text-white px-[115px] py-[14px] text-[24px] rounded-[20px]'>提出</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PostREPage;