import React ,{useState, useEffect} from 'react'

export default function ContentForm( props ) {

  const [briefDescription, setBriefDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');

  useEffect(()=>{
    const contentDataArray = [{briefDescription: briefDescription}, {fullDescription: fullDescription}];
    props.onDataArrayFromChild(contentDataArray);
  },[briefDescription, fullDescription ])
  
  return (
    <div>
      <div className=' w-[803px]  flex gap-[110px] '>
          <div className='w-[190px] flex gap-[35px]  '>
              <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
              <p className='text-[20px]'>投稿内容</p>
          </div>
          <div>              
              <p className='text-[20px]'>物件のウリとイマイチなところ</p>
              <div className='pt-[13px]'>
                <textarea name="content" id="" cols="60" rows="6" className='w-[500px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setBriefDescription(e.target.value)}></textarea>
              </div>
          </div>
      </div>
      <div className=' w-[803px]  flex gap-[124px] pt-[24px] justify-end '>            
            <div>              
              <p className='text-[20px]'>これまでの経緯と今の状況</p>
              <div className='pt-[13px]'>
                <textarea name="content" id="" cols="60" rows="12" className='w-[500px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setFullDescription(e.target.value)}></textarea>
              </div>
          </div>  
      </div>
    </div>
  )
}
