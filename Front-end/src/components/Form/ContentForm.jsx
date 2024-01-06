import React from 'react'

export default function ContentForm() {
  return (
    <div>
      <div className=' w-[803px]  flex gap-[124px] '>
          <div className='w-[177px] flex gap-[35px]  '>
              <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px]'>必須</span>
              <p className='text-[20px]'>物件住所</p>
          </div>
          <div>              
              <p className='text-[20px]'>物件のウリとイマイチなところ</p>
              <div className='pt-[13px]'>
                <textarea name="content" id="" cols="60" rows="6" className='border-2 border-black rounded-md'></textarea>
              </div>
          </div>
      </div>
      <div className=' w-[803px]  flex gap-[124px] pt-[24px] justify-end '>            
            <div>              
              <p className='text-[20px]'>これまでの経緯と今の状況</p>
              <div className='pt-[13px]'>
                <textarea name="content" id="" cols="60" rows="12" className='border-2 border-black rounded-md'></textarea>
              </div>
          </div>  
      </div>
    </div>
  )
}
