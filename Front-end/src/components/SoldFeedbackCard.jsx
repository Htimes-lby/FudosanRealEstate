import React from 'react'
import ShowContents from './ShowContents'
export default function SoldFeedbackCard({img, text}) {
  return (
    <div className='bg-[#F2ECCD] w-[635PX] h-[200px] flex items-center rounded-md'>
      <img className='w-[170px] h-[130px] ml-[26px]'  src={img} alt="img" />
      <div className='pl-[35px] pr-[46px]'>
        <ShowContents text={text} maxLength={180} />
      </div>
    </div>
  )
}
