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
              <span className='bg-[#F69191] h-[28px]  p-2 flex justify-center items-center rounded-md text-[15px] mx-[12px] text-white'>必須</span>
              <p className='text-[20px]'>投稿内容</p>
          </div>
          <div>              
              <p className='text-[20px]'>物件のウリとイマイチなところ</p>
              <div className='pt-[13px]'>
                <textarea name="content" id="" cols="60" rows="6" className='border-[1px] outline-none focus:border-blue-500 p-2 w-[500px] border-black rounded-md' onChange={(e) => setBriefDescription(e.target.value)}></textarea>
              </div>
          </div>
      </div> 
      <div className=' w-[803px]  flex gap-[124px] pt-[24px] justify-end '>            
            <div>              
              <p className='text-[20px]'>これまでの経緯と今の状況</p>
              <div className='pt-[13px]'>
                <textarea name="content" id="" cols="60" rows="12" className='border-[1px] outline-none focus:border-blue-500 p-2 w-[500px] border-black rounded-md' onChange={(e) => setFullDescription(e.target.value)}></textarea>
              </div>
          </div>  
      </div>
    </div>
  )
}
