import React from 'react'
export default function SoldFeedbackCard({img, text}) {
  return (
    <div className='bg-[#F2ECCD] w-[635PX] h-[200px] flex items-center rounded-md'>
      <img className='w-[190px] h-[150px] ml-[26px]'  src={img} alt="img" />
      <div className='pl-[35px] pr-[46px] line-clamp-5'>
       {text}
      </div>
    </div>
  )
}
