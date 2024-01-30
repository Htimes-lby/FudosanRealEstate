import React, {useState, useEffect} from 'react'

export default function OverviewLandForm(props) {

const [budget, setBudget] = useState('');
const [landarea, setLandarea] = useState('');
const [buildingCoverageRatio, setBuildingCoverageRatio] = useState('');
const [floorAreaRatio, setFloorAreaRatio] = useState('');
const [structure, setStructure] = useState('');

useEffect(()=>{
    const overviewHouseDataArray = [{budget: budget}, {landarea: landarea}, {buildingCoverageRatio: buildingCoverageRatio}, {floorAreaRatio: floorAreaRatio}, {structure: structure}];
    props.onDataArrayFromChild(overviewHouseDataArray);
    },[budget, landarea, buildingCoverageRatio, floorAreaRatio, structure])
    

return (
<div>
    <div className=' w-[803px]  flex gap-[110px]'>
        <div className='w-[190px] flex gap-[35px]  '>
            <span className='bg-[#63A4D4] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>任意</span>
            <p className='text-[20px]'>物件概要</p>
        </div>
        <div className='flex'>
            <span className='text-[20px] pr-10'>希望価格</span>
            <input type="text" placeholder='万円' className='w-[381px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setBudget(e.target.value)}/>
        </div>
    </div>

    <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
        
        <div className='flex'>
            <span className='text-[20px] pr-10'>土地面積</span>
            <input type="text" placeholder='m²'  className='w-[381px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setLandarea(e.target.value)}/>
        </div>
    </div>

    <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
        
        <div className='flex'>
            <span className='text-[20px] pr-[60px]'>乾閉率</span>
            <input type="text" placeholder='%' className='w-[381px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setBuildingCoverageRatio(e.target.value)}/>
        </div>
    </div>
    
    <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
        
        <div className='flex'>
            <span className='text-[20px] pr-[60px]'>容積率</span>
            <input type="text" placeholder='%' className='w-[381px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setFloorAreaRatio(e.target.value)}/>
        </div>
    </div>

    

    <div className=' w-[803px]  flex gap-[124px] pt-[14px] justify-end'>
        
        <div className='flex'>
            <span className='text-[20px] pr-20'>構造</span>
            <input type="text" placeholder='木造平屋'  className='w-[381px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md' onChange={(e) => setStructure(e.target.value)}/>
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
