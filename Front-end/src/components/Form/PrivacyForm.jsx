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
                        <option className="text-[18px] font-bold " value="新着順" disabled={true}>新着順</option>
                        <option className="text-[16px]"  value="掲載が新しい順" >&nbsp;掲載が新しい順</option>
                        <option className="text-[16px]"  value="掲載が古い順" >&nbsp;掲載が古い順</option>
                        <option className="text-[18px] font-bold " value="人気順" disabled={true}>人気順</option>
                        <option className="text-[16px]"  value="問合せ多い順" >&nbsp;問合せ多い順</option>
                        <option className="text-[16px]"  value="問合せ少ない順" >&nbsp;問合せ少ない順</option>
                        <option className="text-[18px] font-bold " value="価格順" disabled={true}>価格順</option>
                        <option className="text-[16px]"  value="安い順" >&nbsp;安い順</option>
                        <option className="text-[16px]"  value="高い順" >&nbsp;高い順</option>

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
