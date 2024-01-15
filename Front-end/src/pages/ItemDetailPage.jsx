import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

import Carousel from '../components/Carousel'
import GoogleMapComponent from '../components/GoogleMapComponent'
import BasicTableBuilding from '../components/BasicTableBuilding'
import FavouriteButton from '../components/FavouriteButton'

export default function ItemDetailPage() {

    const location = useLocation();
    const { state } = location.state;
    const realEstateData = state.realEstateData;
    const {username, basicInfo, briefDescription, fullDescription, address, images} = realEstateData;
    const flag = state.flag;

    const [favouriteButtonClicked, setFavouriteButtonClicked] = useState(false);
    const handleFavouriteButtonClicked = () => {
        setFavouriteButtonClicked(favouriteButtonClicked ? false : true);
    }

  return (
    <div className='pb-[120px]'>
        <div className='flex flex-col justify-center items-center'>
            <div className='pt-[92px]'>
                {flag == 'realEstatePost' && <p className='text-[32px] text-center'>{address.province}{address.city}</p>}
                {flag == 'feedbackBuyer' && <p className='text-[32px] text-center'>売主さんへの手紙</p>}
                {flag == 'feedbackSeller' && <p className='text-[32px] text-center'>売りました体験談</p>}
            </div>
            <div className='w-[1440px] pt-[72px] flex items-center justify-between'>
                {flag == 'feedbackBuyer' && <p className='text-[32px]'>あれから、こんな風に使ってます</p>}
                {flag != 'realEstatePost' && <p className='text-[20px]'>{username}</p>}
            </div>
        </div>

        <div className='pt-[28px]'>
            <Carousel images = {images}/>
        </div>
        <div className='flex flex-col items-center w-[1440px] mx-auto'>
            <div className='flex flex-row items-center w-full justify-between pt-[90px] pb-[84px] px-[40px]'>
                <div>
                    <GoogleMapComponent />
                </div>
                <div>
                    <BasicTableBuilding tableData = {basicInfo} fontSize = {"text-[24px]"} width = {"w-[500px]"}  />
                </div>             
            </div>
            <p className='text-[24px]'>{briefDescription}</p>
            <p className='text-[16px] pt-[56px]'>{fullDescription}</p>
            {
                flag !== 'realEstatePost' &&
                <div className=' flex justify-center'>
                    <button className='bg-[#2A6484] pt-[45px] text-[24px] text-white px-[42px] py-[25px] rounded-xl'>売りたい物件を掲示板に載せる</button>
                </div>
            }
            {
                flag == 'realEstatePost' &&
                <div className='flex justify-center gap-[50px] w-full mt-20'>
                    <div className='flex w-[380px] h-[80px] justify-center items-center bg-[#2A6484] text-white text-[24px] rounded-xl'>メッセージを送信する</div>
                    <FavouriteButton calledComponent='realEstateDetailPage'/>
                </div>
            }
        </div>
    </div>
  )
}
