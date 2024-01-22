import React, {useState, useEffect} from 'react'

export default function OverviewHouseForm ( props ) {

    const [budget, setBudget] = useState('');
    const [layout, setLayout] = useState('');
    const [landarea, setLandarea] = useState('');
    const [buildingarea, setBuildingarea] = useState('');
    const [deadline, setDeadline] = useState('');
    const [parking, setParking] = useState('');

    useEffect(()=>{
        const overviewHouseDataArray = [{budget: budget}, {layout: layout}, {landarea: landarea}, {buildingarea: buildingarea}, {deadline: deadline}, {parking: parking}];
        props.onDataArrayFromChild(overviewHouseDataArray);
      },[budget, layout, landarea, buildingarea, deadline, parking])
      

  return (
    <div>
        <div className=' w-[803px]  flex gap-[124px]'>
            <div className='w-[177px] flex gap-[35px]  '>
                <span className='bg-[#63A4D4] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px] text-white'>任意</span>
                <p className='text-[20px]'>物件概要</p>
            </div>
            <div className='flex'>
                <span className='text-[20px] pr-10'>希望価格</span>
                <input type="number" placeholder='万円' className='w-[381px]  border-[1px] outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setBudget(e.target.value)}/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[18px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-[60px]'>間取り</span>
                <input type="number" placeholder='4LDK' className='w-[381px]  border-[1px] outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setLayout(e.target.value)}/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[18px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-10'>土地面積</span>
                <input type="number" placeholder='m²' className='w-[381px]  border-[1px] outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setLandarea(e.target.value)}/>
            </div>
        </div>
        
        <div className=' w-[803px]  flex gap-[124px] pt-[18px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-10'>建物面積</span>
                <input type="number" placeholder='m²' className='w-[381px]  border-[1px] outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setBuildingarea(e.target.value)}/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[18px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-10'>入居日付</span>
                <input type="text"  className='w-[381px]  border-[1px] outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setDeadline(e.target.value)}/>
            </div>
        </div>

        <div className=' w-[803px]  flex gap-[124px] pt-[18px] justify-end'>
           
            <div className='flex'>
                <span className='text-[20px] pr-20'>構造</span>
                <input type="number" placeholder='木造平屋'  className='w-[381px]  border-[1px] outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setParking(e.target.value)}/>
            </div>
        </div>  

        <div className=' w-[803px]  flex gap-[124px] pt-[32px] justify-end'>
           
            <div className='flex'>
                <span className='text-[14px] '>よく分からないところや、サイトに表示させたくない項目は空欄でも構いません</span>
                
            </div>
        </div>   
        
           
    </div>
  )
}
