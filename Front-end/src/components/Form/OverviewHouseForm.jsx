import React from 'react'

export default function 
() {

  return (
    <div>
        <div className=' w-[803px]  flex gap-[124px]'>
            <div className='w-[177px] flex gap-[35px]  '>
                <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px]'>必須</span>
                <p className='text-[20px]'>物件概要</p>
            </div>
            <div className='flex'>
                <span className='text-[20px] pr-10'>希望価格</span>
                <input type="text" placeholder='万円' className='w-[381px] border-2 border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-[60px]'>間取り</span>
                <input type="text" placeholder='4LDK' className='w-[381px] border-2 border-black rounded-md '/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-10'>土地面積</span>
                <input type="text" placeholder='m²' className='w-[381px] border-2 border-black rounded-md'/>
            </div>
        </div>
        
        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-10'>建物面積</span>
                <input type="text" placeholder='m²' className='w-[381px] border-2 border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-10'>入居日付</span>
                <input type="text"  className='w-[381px] border-2 border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-20'>構造</span>
                <input type="text"  className='w-[381px] border-2 border-black rounded-md'/>
            </div>
        </div>        
    </div>
  )
}
