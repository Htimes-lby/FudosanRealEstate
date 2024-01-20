import React from 'react'

export default function OverviewLandForm() {

  return (
    <div>
        <div className=' w-[803px]  flex gap-[110px]'>
            <div className='w-[190px] flex gap-[35px]  '>
                <span className='bg-[#63A4D4] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>任意</span>
                <p className='text-[20px]'>物件概要</p>
            </div>
            <div className='flex'>
                <span className='text-[20px] pr-10'>希望価格</span>
                <input type="text" placeholder='万円' className='w-[381px] focus:outline-none focus:border-blue-500 px-2 py-[2px] border-[1px] border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-10'>土地面積</span>
                <input type="text" placeholder='m²'  className='w-[381px] focus:outline-none focus:border-blue-500 border-[1px] px-2 py-[2px] border-black rounded-md'/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-[60px]'>乾閉率</span>
                <input type="text" placeholder='%' className='w-[381px] focus:outline-none focus:border-blue-500 border-[1px] px-2 py-[2px] border-black rounded-md'/>
            </div>
        </div>
        
        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-[60px]'>容積率</span>
                <input type="text" placeholder='%' className='w-[381px] focus:outline-none focus:border-blue-500 border-[1px] px-2 py-[2px] border-black rounded-md'/>
            </div>
        </div>

        

        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-20'>構造</span>
                <input type="text" placeholder='木造平屋'  className='w-[381px] focus:outline-none focus:border-blue-500 border-[1px] px-2 py-[2px] border-black rounded-md'/>
            </div>
        </div> 
        
        <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
           
            <div className='flex'>
                <span className='text-[14px] '>よく分からないところや、サイトに表示させたくない項目は空欄でも構いません</span>
                
            </div>
        </div>       
    </div>
  )
}
