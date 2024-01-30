import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import Category from "../components/Category"
import FlagTextContainer from "../components/FlagTextContainer"
import SoldFeedbackCard from '../components/SoldFeedbackCard';
import PrivacyForm from "../components/Form/PrivacyForm";
import ContentForm from "../components/Form/ContentForm";
import OverviewHouseForm from "../components/Form/OverviewHouseForm";
import UploadImageForm from "../components/Form/UploadImageForm";
import ConditionForm from "../components/Form/ConditionForm";
import axios from 'axios';

const PostREPage = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const label = searchParams.get('label');
    const user = useSelector((state) => state.auth.user);
    const [privacyDataArray, setPrivacyDataArray] = useState([]);
    const [contentDataArray, setContentDataArray] = useState([]);
    const [overviewHouseDataArray, setOverviewDataArray] = useState([]);
    const [uploadDataArray, setUploadDataArray] = useState([]);
    const [conditionData, setConditionData] = useState("");

const handlePrivacyDataArray = (data) => {
    setPrivacyDataArray(data);
};
const handleContentDataArray = (data) => {
    setContentDataArray(data);
};
const handleOverviewDataArray = (data) => {
    setOverviewDataArray(data);
};
const handleUploadDataArray = (data) => {
    setUploadDataArray(data);
};
const handleconditionDataArray = (data) => {
    setConditionData(data);
};
    
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const newId = localStorage.getItem('id');
        const formData = new FormData();
            // Append other form data
            formData.append('privacyDataArray', JSON.stringify(privacyDataArray));
            formData.append('contentDataArray', JSON.stringify(contentDataArray));
            formData.append('overviewHouseDataArray', JSON.stringify(overviewHouseDataArray));
            formData.append('newId', newId);
            
            // ... Append other form data as needed
            
            // Append image files
            console.log(uploadDataArray);   
            for (const file of uploadDataArray) {
                formData.append('images', file);
            }
            // Make a single axios request for both form data and images
            const res = await axios.post(process.env.REACT_APP_API_BASE_URL + '/postRealEstate', formData)

            
                
          // Handle the response if needed
        console.log('Response from backend:', res.data);
        } catch (error) {
          // Handle errors
        console.error('Error sending form data:', error);
        }
    };

    
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
    `テキスト  テキスト  テキスト  テキスト  テキスト  テキスト 
    テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
    テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
    テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
    テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
    テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
    テキスト  テキスト  テキスト  テキスト  テキスト  テキスト
    テキスト  テキスト  テキスト  テキスト  テキスト  テキスト`

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
                            <p className='text-[32px] text-Architects Daughter text-center'>どんな物件でも大丈夫！ </p>
                        </div>
                        <div>
                            <p className='text-[25px] pt-[54px] pr-[10px]'> ふどうさん活市場では、どんな場所でも、どんなに古くても、
                                掲載条件はありません。自由に載せていいサイトです。</p>
                        </div>
                        <div className='pt-[25px]'>
                            {myFlag.map((text, index) => (
                                <div className='inline-block m-[15px]' key={index}> 
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
                            <div className='inline-block m-[15px]' key={index}> 
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
                    <div className='w-[880px] mx-auto'>
                        <div>
                            <p className='text-[36px] pt-[80px] text-center'>掲載のご依頼</p>
                        </div>
                        <div className='pt-[60px] flex pl-[80px]'>
                            <div>
                                <p className='text-[24px] pb-[30px]'>どうぞ、ご存じの範囲でありのままご記入ください。</p>
                                <p className='pb-[4px]'>※掲載内容は後からでも追記、修正できます。</p>
                                <p className='pb-[4px]'>※掲載の休止、終了はいつでも可能です。</p>
                                <p>※どう書いたらいいか分からないなどのご相談もお受けします。</p>
                            </div>
                            
                            
                        </div>
                        <form onSubmit={handleSubmit} encType='multipart/form-data'>
                            <div className='pt-[120px]'>
                                <PrivacyForm  onDataArrayFromChild={handlePrivacyDataArray} />
                            </div>
                            <div className='pt-[53px]'>
                                <ContentForm onDataArrayFromChild={handleContentDataArray} />
                            </div>
                            <div className='pt-[77px]'>
                                <OverviewHouseForm onDataArrayFromChild={handleOverviewDataArray} />
                            </div>
                            <div>
                                <UploadImageForm title="物件写真" button="画像ファイルを選択する" width1={"w-[800px]"} width2={"w-[300px]"} gap={"gap-[35px]"} onDataArrayFromChild={handleUploadDataArray} />
                            </div>
                            <div className='flex justify-center'>
                                <ConditionForm  onDataArrayFromChild={handleconditionDataArray}/>
                            </div>
                            <div className='flex justify-center pt-[105px] pb-[170px]'>
                                {
                                    conditionData?
                                        <button type='submit' className='bg-[#2A6484] text-white px-[115px] py-[14px] text-[24px] rounded-[20px]' disabled={!conditionData}>提出</button>
                                        :
                                        <button type='submit' className=' bg-gray-300 text-white px-[115px] py-[14px] text-[24px] rounded-[20px]' disabled={!conditionData}>提出</button>
                                }
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PostREPage;