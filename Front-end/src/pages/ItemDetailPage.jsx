import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

import Carousel from '../components/Carousel'
import GoogleMapComponent from '../components/GoogleMapComponent'
import BasicTableBuilding from '../components/BasicTableBuilding'

export default function ItemDetailPage() {
    const location = useLocation();
    const { state } = location.state;
    const realEstateData = state.realEstateData;
    const {username, tableData, briefDescription, fullDescription} = realEstateData;

  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <div className='pt-[92px]'>
                <p className='text-[32px] text-center'>売主さんへの手紙</p>
            </div>
            <div className='w-[1440px] pt-[72px] flex items-center justify-between'>
                <p className='text-[32px]'>あれから、こんな風に使ってます</p>
                <p className='text-[20px]'>{username}</p>
            </div>
        </div>

        <div className='pt-[28px]'>
            <Carousel />
        </div>
        <div className='w-[1440px] bottom-part'>
            <div className=' flex items-center justify-between bottom-part pt-[90px] pb-[84px] '>
                <div>
                    <GoogleMapComponent />
                </div>
                <div className='mr-[50px]'>
                    <BasicTableBuilding tableData = {tableData} fontSize = {"text-[26px]"} width = {"w-[500px]"}  />
                </div>             
            </div>
            <div>
                <p className='text-[24px] flex justify-center'>{briefDescription}</p>
                <p className='text-[16px] pt-[56px]'>{fullDescription}</p>
            </div>
            <div className='pt-[45px] pb-[120px] flex justify-center'>
                <button className='bg-[#2A6484] text-[24px] text-white px-[42px] py-[25px] rounded-xl'>売りたい物件を掲示板に載せる</button>
            </div>
        </div>

    </div>
  )
}
