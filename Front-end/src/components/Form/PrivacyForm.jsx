import React, {useState ,useEffect} from "react";
import axios from 'axios';

export default function PrivacyForm( props ) {
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [buildingName, setBuildingName] = useState('');
    const [street, setStreet] = useState('');
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [postalNumber, setPostalNumber] = useState([]);
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [firstNameGana, setFirstNameGana] = useState('');
    const [lastNameGana, setLastNameGana] = useState('');
    const [firstNameGanji, setFirstNameGanji] = useState('');
    const [lastNameGanji, setLastNameGanji] = useState('');
    
    useEffect(() => {
        
                
        const privacyDataArray = {province:province, city: city, buildingName: buildingName, street: street, phoneNumber: phoneNumber, 
                                    postalNumber: postalNumber, email: email, age: age, firstNameGana: firstNameGana, lastNameGana: lastNameGana, 
                                    firstNameGanji: firstNameGanji, lastNameGanji: lastNameGanji} 

        props.onDataArrayFromChild(privacyDataArray);
    }, [province, city, buildingName, street, phoneNumber, postalNumber, email, age, firstNameGana, firstNameGanji, lastNameGana, lastNameGanji]);

    useEffect(() => {
        const func = async () => {
            const newId = localStorage.getItem("id");
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


return (
    <div>
        <div className=' w-[745px]  flex gap-[124px]'>
            <div className='w-[177px] flex gap-[35px] '>
                <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                <p className='text-[20px]'>お名前</p>
            </div>
            <div className='flex gap-[50px] '>
                <div className='w-[196px]'>
                    <div className='flex justify-between '>
                        <span>(姓)</span>
                        <input placeholder="例:下保木" required = {true} value = {lastNameGanji} className='w-[130px] border-[1px]  focus:outline-none focus:border-blue-500 p-1 focus:outline-none focus:border-blue-500 p-1 border-black  rounded-md' type="text" onChange={(e) => setLastNameGanji(e.target.value)} />
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
        <div className=' w-[745px]  flex gap-[124px] pt-[24px]'>
            <div className='w-[177px] flex gap-[35px]  '>
                <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                <p className='text-[20px]'>年齢</p>
            </div>
            <div>
                <input placeholder="例:35"  required = {true} type="number" className='w-[443px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setAge(e.target.value)}/>
            </div>
        </div>
    
        <div className=' w-[745px]  flex gap-[124px] pt-[24px]'>
            <div className='w-[177px] flex gap-[35px] '>
                <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                <p className='text-[20px]'>メール</p>
            </div>
            <div>
                <input placeholder="例:hoshi@gmail.com" required = {true} type="text" value={email} className='w-[443px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>

        

        <div className=' w-[745px]  flex gap-[110px] pt-[24px]'>
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

        <div className=' w-[745px]  flex gap-[110px] pt-[24px]'>
            <div className='w-[190px] flex gap-[35px]  '>
                <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                <p className='text-[20px]'>物件住所</p>
            </div>
            <div>              
                <span className=' w-[30px] mt-[15px] mr-[50px] text-[20px] '>郵便番号 - 〒</span>          
                <input placeholder="例:818" required = {true} type="number" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' value={postalNumber[0] || ''} onChange={(e) => handleInputPoastalNumber(0, e.target.value)}/>
                <span className=' inline-block border-t-2 w-[30px] border-black mt-[15px] mx-[21px]  '></span>
                <input placeholder="例:0124" required = {true} type="number" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' value={postalNumber[1] || ''} onChange={(e) => handleInputPoastalNumber(1, e.target.value)}/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px] justify-end'>            
            <div className=" flex items-center justify-between ">
                    <p className="text-[20px] ">都道府県</p>
                    <select
                        required = {true}
                        className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[95px]"
                        onChange={event => setProvince(event.target.value)}
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

        <div className=' w-[745px]  flex gap-[124px] pt-[24px] justify-end'>            
            <div className=" flex items-center justify-between ">
                    <p className="text-[20px] ">市区町村</p>
                    <input placeholder="例:町名番地" required = {true} type='text' className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[95px]" onChange={(e) => setCity(e.target.value)}/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px] justify-end'>            
            <div className=" flex items-center justify-between ">
                    <p className="text-[20px] ">町名番地</p>
                    <input placeholder="例:6 Chome-19-19 Futsukaichikita" required = {true} type='text' className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[95px]" onChange={(e) => setStreet(e.target.value)}/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px] justify-end'>            
            <div className=" flex items-center justify-between ">
                    <p className="text-[20px] ">建物名-部屋番号</p>
                    <input type='text' className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[22px]" onChange={(e) => setBuildingName(e.target.value)}/>
            </div>
        </div>

        <div className=' w-[745px] flex flex-col  pt-[24px] items-start pl-[300px] text-[13px]'>            
            <p>物件の住所を記入してください。</p>
            <p>※ ご自分の住所の記入欄ではありません</p>
            <p>※ この住所がそのままサイトに掲載されてしまうことはありません </p>
        </div>
        
    </div>
    
  )
}
