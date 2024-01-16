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
    const {basicInfo, briefDescription, fullDescription, address, images} = realEstateData;

    const [favouriteButtonClicked, setFavouriteButtonClicked] = useState(false);
    const handleFavouriteButtonClicked = () => {
        setFavouriteButtonClicked(favouriteButtonClicked ? false : true);
    }

  return (
    <div className=' flex flex-col items-center pb-[120px] pt-[92px] w-full'>
        <p className='text-[32px] text-center'>{address.province}{address.city}</p>

        <div className='mt-[28px] w-full'>
            <Carousel images = {images}/>
        </div>

        <div className='w-[1300px] mx-auto'>
            <div className='flex items-center w-full justify-between pt-[90px] pb-[84px]'>
                <div>
                    <GoogleMapComponent />
                </div>
                <div>
                    <BasicTableBuilding tableData = {basicInfo} fontSize = {"text-[24px]"} width = {"w-[500px]"}  />
                </div>             
            </div>
            <p className='text-[24px]'>{briefDescription}</p>
            <p className='text-[16px] pt-[56px]'>{fullDescription}</p>

            <div className='flex justify-center gap-[50px] w-full mt-20'>
                <div className='flex w-[380px] h-[80px] justify-center items-center bg-[#2A6484] text-white text-[24px] rounded-xl'>メッセージを送信する</div>
                <FavouriteButton calledComponent='realEstateDetailPage'/>
            </div>
        </div>
    </div>
  )
}
