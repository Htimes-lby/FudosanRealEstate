import React, {useState} from "react";

export default function PrivacyForm() {

    const [value, setValue] = useState('');
  return (
    <div>
        <div className=' w-[745px]  flex gap-[124px]'>
            <div className='w-[177px] flex gap-[35px] '>
                <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px]'>必須</span>
                <p className='text-[20px]'>お名前</p>
            </div>
            <div className='flex gap-[50px] '>
                <div className='w-[196px]'>
                    <div className='flex justify-between '>
                        <span>(姓)</span>
                        <input className='w-[130px] border-2 border-black rounded-md' type="text" />
                    </div>
                    <div className='flex justify-between pt-[16px]'>
                        <span>(せい)</span>
                        <input className='w-[130px] border-2 border-black rounded-md' type="text" />
                    </div>
                </div> 
                <div className='w-[196px]'>
                    <div className='flex justify-between'>
                        <span>(名)</span>
                        <input className='w-[130px] border-2 border-black rounded-md' type="text" />
                    </div>
                    <div className='flex justify-between pt-[16px]'>
                        <span>(めい)</span>
                        <input className='w-[130px] border-2 border-black rounded-md' type="text" />
                    </div>
                </div>      
            </div>
        </div>
        <div className=' w-[745px]  flex gap-[124px] pt-[39px]'>
            <div className='w-[177px] flex gap-[35px]  '>
                <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px]'>必須</span>
                <p className='text-[20px]'>年齢</p>
            </div>
            <div>
                <input type="text" className='w-[443px] border-2 border-black rounded-md'/>
            </div>
        </div>
       
        <div className=' w-[745px]  flex gap-[124px] pt-[39px]'>
            <div className='w-[177px] flex gap-[35px] '>
                <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px]'>必須</span>
                <p className='text-[20px]'>メール</p>
            </div>
            <div>
                <input type="text" className='w-[443px] border-2 border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px]'>
            <div className='w-[177px] flex gap-[35px]  '>
                <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px]'>必須</span>
                <p className='text-[20px]'>メール</p>
            </div>
            <div className='flex '>
                <input type="text" className='w-[99px] border-2 border-black rounded-md'/>
                <span className='border-t-2 w-[30px] border-black mt-[15px] mx-[22px]'></span>            
                <input type="text" className='w-[99px] border-2 border-black rounded-md'/>
                <span className='border-t-2 w-[30px] border-black mt-[15px] mx-[21px]'></span>
                <input type="text" className='w-[99px] border-2 border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px]'>
            <div className='w-[177px] flex gap-[35px]  '>
                <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px]'>必須</span>
                <p className='text-[20px]'>電話番号</p>
            </div>
            <div className='flex '>
                <input type="text" className='w-[99px] border-2 border-black rounded-md'/>
                <span className='border-t-2 w-[30px] border-black mt-[15px] mx-[22px]'></span>            
                <input type="text" className='w-[99px] border-2 border-black rounded-md'/>
                <span className='border-t-2 w-[30px] border-black mt-[15px] mx-[21px]'></span>
                <input type="text" className='w-[99px] border-2 border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px]'>
            <div className='w-[177px] flex gap-[35px]  '>
                <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px]'>必須</span>
                <p className='text-[20px]'>物件住所</p>
            </div>
            <div>              
                <span className=' w-[30px] mt-[15px] mr-[50px] text-[20px] '>郵便番号 - 〒</span>          
                <input type="text" className='w-[99px] border-2 border-black rounded-md '/>
                <span className=' inline-block border-t-2 w-[30px] border-black mt-[15px] mx-[21px]  '></span>
                <input type="text" className='w-[99px] border-2 border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px] justify-end'>            
            <div className=" flex items-center justify-between ">
                    <p className="text-[20px] ">表示順番</p>
                    <select
                        className="border-2 rounded-md border-black w-[272px] ml-[95px]"
                        onChange={event => setValue(event.target.value)}
                        defaultValue={value}>                       
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
                    <input type='text' className="border-2 rounded-md border-black w-[272px] ml-[95px]"/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px] justify-end'>            
            <div className=" flex items-center justify-between ">
                    <p className="text-[20px] ">町名番地</p>
                    <input type='text' className="border-2 rounded-md border-black w-[272px] ml-[95px]"/>
            </div>
        </div>

        <div className=' w-[745px]  flex gap-[124px] pt-[24px] justify-end'>            
            <div className=" flex items-center justify-between ">
                    <p className="text-[20px] ">建物名-部屋番号</p>
                    <input type='text' className="border-2 rounded-md border-black w-[272px] ml-[22px]"/>
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
