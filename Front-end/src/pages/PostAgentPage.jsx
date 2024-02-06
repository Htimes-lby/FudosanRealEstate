import React ,{useState, useEffect  } from 'react';
import UploadImageForm from "../components/Form/UploadImageForm"
import ConditionForm from '../components/Form/ConditionForm';
import axios from 'axios';
import {useCookies} from 'react-cookie'

const PostAgentPage = () => {

    const [value, setValue] = useState('');
    const [cookies, setCookie] = useCookies();
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [postalNumber, setPostalNumber] = useState([]);
    const [uploadDataArray, setUploadDataArray] = useState([]);
    const [conditionData, setConditionData] = useState("");
    const [companyName, setCompanyName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [firstNameGana, setFirstNameGana] = useState('');
    const [lastNameGana, setLastNameGana] = useState('');
    const [firstNameGanji, setFirstNameGanji] = useState('');
    const [lastNameGanji, setLastNameGanji] = useState('');
    const [content, setContent] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleUploadDataArray = (data) => {
        setUploadDataArray(data);
    };

    const handleconditionDataArray = (data) => {
        setConditionData(data);
    };

    const handleInputPhoneNumber = (index, value) => {
        // Create a new array with the updated value at the specified index
        const updatedPhoneValues = [...phoneNumber];
        updatedPhoneValues[index] = value;   
        // Update the state with the new array
        setPhoneNumber(updatedPhoneValues);
        
    };

    const handleInputPoastalNumber = (index, value) => {
        // Create a new array with the updated value at the specified index
        const updatedPostalNumber = [...postalNumber];
        updatedPostalNumber[index] = value;
        // Update the state with the new array
        setPostalNumber(updatedPostalNumber);
    };
    const newId = cookies.user._id;
    const newphoneNumber = parseInt(
        (phoneNumber[0] ? phoneNumber[0].toString() : '') +
        (phoneNumber[1] ? phoneNumber[1].toString() : '') +
        (phoneNumber[2] ? phoneNumber[2].toString() : '')
    );
    const newpostalNumber = parseInt(
        (postalNumber[0] ? postalNumber[0].toString() : '') +
        (postalNumber[1] ? postalNumber[1].toString() : '') +
        (postalNumber[2] ? postalNumber[2].toString() : '')
    );
    const agentName = {firstNameGana: firstNameGana, lastNameGana: lastNameGana, firstNameGanji: firstNameGanji, lastNameGanji: lastNameGanji};
    const address = {zipCode:newpostalNumber, province:province, city:city, street:street}


    const agentData = {posterId:newId, agentName: agentName, agentEmail: email, address: address, 
        category: role, phoneNumber: newphoneNumber, companyName: companyName, content: content,} 

        const handleSubmit = async (e) => {
            e.preventDefault();
            setValidationMessage("");
            
            if(!email.includes('@'))
                return setValidationMessage("メールアドレスを正しく入力してください。");
            if(Math.abs(phoneNumber[0]).toString().trim().length > 3 || Math.abs(phoneNumber[0]).toString().trim().length < 2
                || Math.abs(phoneNumber[1]).toString().trim().length > 4 || Math.abs(phoneNumber[1]).toString().trim().length < 2
                || Math.abs(phoneNumber[2]).toString().trim().length !== 4 )
                return setValidationMessage("電話番号を正確に入力してください！");
            if(Math.abs(postalNumber[0]).toString().trim().length !== 3 || Math.abs(postalNumber[1]).toString().trim().length !== 4 )
                return setValidationMessage("郵便番号を正しく入力してください!");
            try {
                const formData = new FormData();
                    // Append other form data
                    formData.append('agentInfo', JSON.stringify(agentData));
                    
                    for (const file of uploadDataArray) {
                        formData.append('images', file);
                    }
                    const res = await axios.post(process.env.REACT_APP_API_BASE_URL + '/postAgent', formData)
                    
                } catch (error) {
                console.error('Error sending form data:', error);
                }
            };
            useEffect(() => {
                const func = async () => {
                    
                    const response = await axios.get("/getUser", {
                        params: { _id: newId},
                        });
                        setEmail(response.data[0].email);
                        setFirstNameGana(response.data[0].name.firstNameGana)
                        setLastNameGana(response.data[0].name.lastNameGana)
                        setFirstNameGanji(response.data[0].name.firstNameGanji)
                        setLastNameGanji(response.data[0].name.lastNameGanji)
                }
                func();
                }, []);

    return (
        <div className='bg-[#F1F1F1]  pt-[124px]'>
            <div className='container bg-white'>
                <div>
                    <div>
                        <p className='text-[36px] flex justify-center py-[101px]'>掲載のご依頼</p>
                    </div>
                    <div className='ml-[323px]'>
                        <p className='text-[20px] pb-[49px]'>どうぞ、ご存じの範囲でありのままご記入ください。</p>
                        <p className='text-[20px] pb-[21px]'>※掲載内容は後からでも追記、修正できます。</p>
                        <p className='text-[20px] pb-[21px]'>※掲載の休止、終了はいつでも可能です。</p>
                        <p className='text-[20px] pb-[21px]'>※どう書いたらいいか分からないなどのご相談もお受けします。</p>
                    
                    </div>
                </div>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className=' w-[900px] ml-[310px]  flex gap-[155px]'>
                <div className='w-[190px] flex gap-[35px] '>
                    <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                    <p className='text-[20px]'>担当者名</p>
                </div>
                <div className='flex gap-[55px] '>
                    <div className='w-[196px]'>
                        <div className='flex justify-between '>
                            <span>(姓)</span>
                            <input placeholder="例:下保木" required = {true} name = "lastNameGanji" value = {lastNameGanji} className='w-[130px] border-[1px]  focus:outline-none focus:border-blue-500 p-1 focus:outline-none focus:border-blue-500 p-1 border-black  rounded-md' type="text" onChange={(e) => setLastNameGanji(e.target.value)} />
                        </div>
                        <div className='flex justify-between pt-[16px]'>
                            <span>(せい)</span>
                            <input placeholder="例:しもほき" required = {true} name = "lastNameGana" value={lastNameGana} className='w-[130px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' type="text" onChange={(e) => setLastNameGana(e.target.value)}  />
                        </div>
                    </div> 
                    <div className='w-[196px]'>
                        <div className='flex justify-between'>
                            <span>(名)</span>
                            <input placeholder="例:虎史" required = {true} name = "firstNameGanji" value = {firstNameGanji} className='w-[130px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' type="text" onChange={(e) => setFirstNameGanji(e.target.value)} />
                        </div>
                        <div className='flex justify-between pt-[16px]'>
                            <span>(めい)</span>
                            <input placeholder="例:こし" required = {true} name = "firstNameGana" value={firstNameGana} className='w-[130px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' type="text" onChange={(e) => setFirstNameGana(e.target.value)} />
                        </div>
                    </div>      
                </div>
            </div>
                
                <div className=' w-[900px] ml-[310px]  flex gap-[169px] mt-[40px]'>
                    <div className='w-[177px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>会社名</p>
                    </div>
                    <div className='flex'>                      
                        <input required = {true} type="text"  className='w-[445px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setCompanyName(e.target.value)}/>
                    </div>
                </div>
                <div className=' w-[900px] ml-[310px]  flex gap-[169px] mt-[40px]'>
                    <div className='w-[177px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>メール</p>
                    </div>
                    <div className='flex'>                      
                        <input placeholder="例:hoshi@gmail.com" required = {true} value = {email} type="text"  className='w-[445px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className=' w-[900px] ml-[310px]  flex gap-[169px] pt-[40px] '> 

                    <div className='w-[177px] flex gap-[35px]  '>
                            <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                            <p className="text-[20px] ">役割</p>
                            
                    </div> 
                    <div className=" flex items-center  ">
                            
                        <select
                            className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[445px] "
                            onChange={event => setRole(event.target.value)}
                            required = {true}
                            defaultValue={value}>                       
                            <option className="text-[16px]"  value="" >&nbsp;</option>
                            <option className="text-[16px]"  value="不動産業者" >&nbsp;不動産業者</option>
                            <option className="text-[16px]"  value="司法書士" >&nbsp;司法書士</option>
                            <option className="text-[16px]"  value="投資家" >&nbsp;投資家</option>
                            
                        </select>
                    </div>          
                    
                </div>


                <div className=' w-[900px] ml-[310px]  flex gap-[155px] pt-[40px]'>
                    <div className='w-[190px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>電話番号</p>
                    </div>
                    <div className='flex '>
                        <input placeholder="例:092" required = {true} type="number" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' value={phoneNumber[0] || ''} onChange={(e) => handleInputPhoneNumber(0, e.target.value)}/>
                        <span className='border-t-2 w-[30px] border-black mt-[15px] mx-[22px]'></span>            
                        <input placeholder="例:918" required = {true} type="number" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' value={phoneNumber[1] || ''} onChange={(e) => handleInputPhoneNumber(1, e.target.value)}/>
                        <span className='border-t-2 w-[30px] border-black mt-[15px] mx-[21px]'></span>
                        <input placeholder="例:0234" required = {true} type="number" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' value={phoneNumber[2] || ''} onChange={(e) => handleInputPhoneNumber(2, e.target.value)}/>
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
                            <input placeholder="例:町名番地"  required = {true} type='text' className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[95px]" onChange={(e) => setCity(e.target.value)}/>
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
                    <div className='flex'>                      
                        <textarea type="text"  className='w-[445px] h-[140px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'onChange={(e) => setContent(e.target.value)}/>
                    </div>
                </div>

                <div className=' w-[900px] ml-[310px]  flex gap-[169px] mt-[40px]'>
                <UploadImageForm title="物件写真" button="画像ファイルを選択する" width1={"w-[800px]"} width2={"w-[300px]"} gap={"gap-[35px]"} onDataArrayFromChild={handleUploadDataArray} />
                </div>
                <div className='flex justify-center'>
                    <ConditionForm onDataArrayFromChild={handleconditionDataArray} />
                </div>
                <p className='text-center pt-[20px]'>{validationMessage}</p>
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
    )
}

export default PostAgentPage;