import React ,{useState, } from 'react';
import UploadImageForm from "../components/Form/UploadImageForm"
import {useCookies} from 'react-cookie'

import axios from 'axios';

const FeedbackPage = () => {

    const [cookies, setCookie] = useCookies("");
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [postalNumber, setPostalNumber] = useState([]);
    const [uploadDataArray, setUploadDataArray] = useState([]);
    const [firstNameGana, setFirstNameGana] = useState('');
    const [lastNameGana, setLastNameGana] = useState('');
    const [firstNameGanji, setFirstNameGanji] = useState('');
    const [lastNameGanji, setLastNameGanji] = useState('');
    const [briefContent, setBriefContent] = useState('');
    const [fullContent, setFullContent] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleUploadDataArray = (data) => {
        setUploadDataArray(data);
    };

    

    const handleInputPoastalNumber = (index, value) => {
        // Create a new array with the updated value at the specified index
        const updatedPostalNumber = [...postalNumber];
        updatedPostalNumber[index] = value;
        // Update the state with the new array
        setPostalNumber(updatedPostalNumber);
    };
    const newId = cookies.user._id;
    const newpostalNumber = parseInt(
        (postalNumber[0] ? postalNumber[0].toString() : '') +
        (postalNumber[1] ? postalNumber[1].toString() : '') +
        (postalNumber[2] ? postalNumber[2].toString() : '')
    );
    const name = {firstNameGana: firstNameGana, lastNameGana: lastNameGana, firstNameGanji: firstNameGanji, lastNameGanji: lastNameGanji};
    const address = {zipCode:newpostalNumber, province:province, city:city, street:street}
    const feedbackData = {poster: newId, name: name, address: address, briefContent: briefContent, fullContent: fullContent}
        const handleSubmit = async (e) => {
            e.preventDefault();
            if(Math.abs(postalNumber[0]).toString().trim().length !== 3 || Math.abs(postalNumber[1]).toString().trim().length !== 4 )
            return setValidationMessage("電話番号を正確に入力してください！");
            try {
                const formData = new FormData();
                    // Append other form data
                    formData.append('feedbackInfo', JSON.stringify(feedbackData));
                    
                    for (const file of uploadDataArray) {
                        formData.append('images', file);
                    }
                    // Make a single axios request for both form data and images
                    const res = await axios.post(process.env.REACT_APP_API_BASE_URL + '/postFeedBack', formData)
        
                    
                        
                  // Handle the response if needed
                console.log('Response from backend:', res.data);
                } catch (error) {
                  // Handle errors
                console.error('Error sending form data:', error);
                }
            };
        

    
    return (
        <div className='bg-[#F1F1F1]  pt-[124px]'>
            <div className='container bg-white'>
                <div>

                    <div>
                        <p className='text-[36px] flex justify-center py-[101px]'>フィードバック</p>
                    </div>
                    <div className='ml-[323px]'>
                        <p className='text-[20px] pb-[49px]'>どうぞ、ご存じの範囲でありのままご記入ください。</p>
                        <p className='text-[20px] pb-[21px]'>※掲載内容は後からでも追記、修正できます。</p>
                        <p className='text-[20px] pb-[21px]'>※掲載の休止、終了はいつでも可能です。</p>
                        <p className='text-[20px] pb-[21px]'>※どう書いたらいいか分からないなどのご相談もお受けします。</p>
                    
                    </div>
                </div>
            <form className='pt-[35px]' onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className=' w-[900px] ml-[310px]  flex gap-[155px]'>
                <div className='w-[190px] flex gap-[35px] '>
                    <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                    <p className='text-[20px]'>お名前</p>
                </div>
                <div className='flex gap-[55px] '>
                    <div className='w-[196px]'>
                        <div className='flex justify-between '>
                            <span>(姓)</span>
                            <input placeholder="例:下保木" required = {true} value = {lastNameGanji} className='w-[130px] border-[1px] focus:outline-none focus:border-blue-500 p-1 focus:outline-none focus:border-blue-500 p-1 border-black  rounded-md' type="text" onChange={(e) => setLastNameGanji(e.target.value)} />
                        </div>
                        <div className='flex justify-between pt-[16px]'>
                            <span>(せい)</span>
                            <input placeholder="例:しもほき" required = {true} value={lastNameGana} className='w-[130px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' type="text" onChange={(e) => setLastNameGana(e.target.value)}  />
                        </div>
                    </div> 
                    <div className='w-[196px]'>
                        <div className='flex justify-between'>
                            <span>(名)</span>
                            <input placeholder="例:虎史" required = {true} value = {firstNameGanji} className='w-[130px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' type="text" onChange={(e) => setFirstNameGanji(e.target.value)} />
                        </div>
                        <div className='flex justify-between pt-[16px]'>
                            <span>(めい)</span>
                            <input placeholder="例:こし" required = {true} value={firstNameGana} className='w-[130px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' type="text" onChange={(e) => setFirstNameGana(e.target.value)} />
                        </div>
                    </div>      
                </div>
            </div>

                <div className=' w-[900px] ml-[310px]  flex gap-[155px] pt-[40px]'>
                    <div className='w-[190px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>住所</p>
                    </div>
                    <div>              
                        <span className=' w-[30px] mt-[15px] mr-[50px] text-[20px] '>郵便番号 - 〒</span>          
                        <input placeholder="例:818" required = {true} type="number" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' value={postalNumber[0] || ''} onChange={(e) => handleInputPoastalNumber(0, e.target.value)}/>
                        <span className=' inline-block border-t-2 w-[30px] border-black mt-[15px] mx-[21px]  '></span>
                        <input placeholder="例:0124" required = {true} type="number" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' value={postalNumber[1] || ''} onChange={(e) => handleInputPoastalNumber(1, e.target.value)}/>
                    </div>
                </div>

                <div className=' w-[900px] ml-[200px]  flex gap-[169px] pt-[40px] justify-end'>            
                    <div className=" flex items-center justify-between ">
                            <p className="text-[20px] ">都道府県</p>
                            <select
                                className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[95px]"
                                onChange={event => setProvince(event.target.value)}
                                required = {true}
                                defaultValue={province}>                       
                                <option className="text-[16px]"  value="" >&nbsp;</option>
                                <option className="text-[16px]"  value="北海道" >&nbsp;北海道</option>
                                <option className="text-[16px]"  value="青森県" >&nbsp;青森県</option>
                                <option className="text-[16px]"  value="岩手県" >&nbsp;岩手県</option>
                                <option className="text-[16px]"  value="秋田県" >&nbsp;秋田県</option>                
                                <option className="text-[16px]"  value="宮城県" >&nbsp;宮城県</option>
                                <option className="text-[16px]"  value="山形県" >&nbsp;山形県</option>
                                <option className="text-[16px]"  value="福島県" >&nbsp;福島県</option>
                                <option className="text-[16px]"  value="茨城県" >&nbsp;茨城県</option>
                                <option className="text-[16px]"  value="栃木県" >&nbsp;栃木県</option>
                                <option className="text-[16px]"  value="群馬県" >&nbsp;群馬県</option>
                                <option className="text-[16px]"  value="埼玉県" >&nbsp;埼玉県</option>
                                <option className="text-[16px]"  value="千葉県" >&nbsp;千葉県</option>
                                <option className="text-[16px]"  value="東京都" >&nbsp;東京都</option>
                                <option className="text-[16px]"  value="神奈川県" >&nbsp;神奈川県</option>
                                <option className="text-[16px]"  value="新潟県" >&nbsp;新潟県</option>
                                <option className="text-[16px]"  value="長野県" >&nbsp;長野県</option>
                                <option className="text-[16px]"  value="山梨県" >&nbsp;山梨県</option>
                                <option className="text-[16px]"  value="富山県" >&nbsp;富山県</option>
                                <option className="text-[16px]"  value="石川県" >&nbsp;石川県</option>
                                <option className="text-[16px]"  value="静岡県" >&nbsp;静岡県</option>
                                <option className="text-[16px]"  value="愛知県" >&nbsp;愛知県</option>
                                <option className="text-[16px]"  value="岐阜県" >&nbsp;岐阜県</option>
                                <option className="text-[16px]"  value="三重県" >&nbsp;三重県</option>
                                <option className="text-[16px]"  value="滋賀県" >&nbsp;滋賀県</option>
                                <option className="text-[16px]"  value="京都府" >&nbsp;京都府</option>
                                <option className="text-[16px]"  value="大阪府" >&nbsp;大阪府</option>
                                <option className="text-[16px]"  value="兵庫県" >&nbsp;兵庫県</option>
                                <option className="text-[16px]"  value="奈良県" >&nbsp;奈良県</option>
                                <option className="text-[16px]"  value="和歌山県" >&nbsp;和歌山県</option>
                                <option className="text-[16px]"  value="岡山県" >&nbsp;岡山県</option>
                                <option className="text-[16px]"  value="広島県" >&nbsp;広島県</option>
                                <option className="text-[16px]"  value="鳥取県" >&nbsp;鳥取県</option>
                                <option className="text-[16px]"  value="島根県" >&nbsp;島根県</option>
                                <option className="text-[16px]"  value="山口県" >&nbsp;山口県</option>
                                <option className="text-[16px]"  value="香川県" >&nbsp;香川県</option>
                                <option className="text-[16px]"  value="徳島県" >&nbsp;徳島県</option>
                                <option className="text-[16px]"  value="愛媛県" >&nbsp;愛媛県</option>
                                <option className="text-[16px]"  value="高知県" >&nbsp;高知県</option>
                                <option className="text-[16px]"  value="福岡県" >&nbsp;福岡県</option>
                                <option className="text-[16px]"  value="佐賀県" >&nbsp;佐賀県</option>
                                <option className="text-[16px]"  value="長崎県" >&nbsp;長崎県</option>
                                <option className="text-[16px]"  value="大分県" >&nbsp;大分県</option>
                                <option className="text-[16px]"  value="熊本県" >&nbsp;熊本県</option>
                                <option className="text-[16px]"  value="宮崎県" >&nbsp;宮崎県</option>
                                <option className="text-[16px]"  value="鹿児島県" >&nbsp;鹿児島県</option>
                                <option className="text-[16px]"  value="沖縄県" >&nbsp;沖縄県</option>
                                <option className="text-[16px]"  value="豪州" >&nbsp;豪州</option>
                                <option className="text-[16px]"  value="北米" >&nbsp;北米</option>
                                <option className="text-[16px]"  value="欧州" >&nbsp;欧州</option>
                                <option className="text-[16px]"  value="アジア" >&nbsp;アジア</option>

                            </select>
                    </div>
                </div>

                <div className=' w-[900px] ml-[200px]  flex gap-[169px] pt-[40px] justify-end '>            
                    <div className=" flex items-center justify-between ">
                            <p className="text-[20px] ">市区町村</p>
                            <input placeholder="例:町名番地" required = {true} type='text' className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[95px]" onChange={(e) => setCity(e.target.value)}/>
                    </div>
                </div>

                <div className=' w-[900px] ml-[200px]  flex gap-[169px] pt-[40px] justify-end'>            
                    <div className=" flex items-center justify-between ">
                            <p className="text-[20px] ">町名番地</p>
                            <input placeholder="例:6 Chome-19-19 Futsukaichikita" required = {true} type='text' className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[95px]" onChange={(e) => setStreet(e.target.value)}/>
                    </div>
                </div>

                
                <div className=' w-[900px] ml-[310px]  flex gap-[157px] mt-[40px]'>
                    <div className='w-[190px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>投稿内容</p>
                    </div>
                    <div>
                        <p className='text-[20px] pb-[10px]'>物件のウリとイマイチなところ</p>
                        <div className='flex pb-[50px]'>                      
                            <textarea type="text"  className='w-[445px] h-[140px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'onChange={(e) => setBriefContent(e.target.value)}/>
                        </div>
                        <p className='text-[20px] pb-[10px]'>これまでの経緯と今の状況</p>
                        <div className='flex'>                      
                            <textarea type="text"  className='w-[445px] h-[200px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'onChange={(e) => setFullContent(e.target.value)}/>
                        </div>
                    </div>
                </div>

                

                <div className=' w-[900px] ml-[310px]  flex gap-[169px] mt-[40px]'>
                <UploadImageForm title="画像" button="画像ファイルを選択する" width1={"w-[800px]"} width2={"w-[300px]"} gap={"gap-[35px]"} onDataArrayFromChild={handleUploadDataArray} />
                </div>
                
                <div className='flex justify-center pb-[170px]'>
                <p className='text-center pt-[20px]'>{validationMessage}</p>
                <button type='submit' className='bg-[#2A6484] text-white px-[115px] py-[14px] text-[24px] rounded-[20px]' >提出</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default FeedbackPage;