import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

import Carousel from '../components/Carousel'
import GoogleMapComponent from '../components/GoogleMapComponent'
import BasicTableBuilding from '../components/BasicTableBuilding'
import BasicTableLand from '../components/BasicTableLand'
import FavouriteButton from '../components/FavouriteButton'

const ItemDetailPage = () => {

    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const realEstateId = searchParams.get('realEstateId');
    const [favouriteButtonActive, setFavouriteButtonActive] = useState(false);
    const [realEstate, setRealEstate] = useState(null);
    // const {address, basicInfoBuilding, basicInfoLand, images, briefDescription, fullDescription, label} = realEstate;

    const handleFavouriteButtonClicked = () => {
        setFavouriteButtonActive(favouriteButtonActive ? false : true);
    }
    const sendMsgButtonClicked = () => {
        const posterId = realEstate.poster;
        const searchParams = new URLSearchParams();
        searchParams.set('previous-page','itemDetailPage')
        searchParams.set('realEstateId', realEstateId);
        searchParams.set('opponentId', posterId);
        history.push(`/message-detail?${searchParams.toString()}`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = new URLSearchParams ({
                    realEstateId: realEstateId,
                }).toString();
                const res = await axios.get(`/getRealEstateById?${params}`)
                setRealEstate(res.data.realEstate);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])

    if(realEstate === null) {
        return (
            <div>loading.............</div>
        )
    }

  return (
    <div className=' flex flex-col items-center pb-[120px] pt-[92px] w-full'>
        <p className='pb-10 text-3xl text-center noto-medium'>{realEstate.address.province}{realEstate.address.city}</p>

        <div className='mt-[28px] w-full'>
            <Carousel images = {realEstate.images}/>
        </div>

        <div className='w-[1300px] mx-auto'>
            <div className='flex items-center w-full justify-between pt-[90px] pb-[84px]'>
                <div>
                    <GoogleMapComponent />
                </div>
                {
                    realEstate.label === 'building' && <BasicTableBuilding tableData = {realEstate.basicInfoBuilding} fontSize = {"text-[24px]"} width = {"w-[500px]"}  />
                }
                {
                    realEstate.label === 'land' && <BasicTableLand tableData = {realEstate.basicInfoLand} fontSize = {"text-[24px]"} width = {"w-[500px]"}  />
                }             
            </div>
            <div className='w-[90%] mx-auto text-xl noto-regular'>{realEstate.briefDescription}</div>
            <div className=' border-2 border/60-black p-3 text-base noto-regular mt-14'>{realEstate.fullDescription}</div>

            <div className='flex justify-center gap-[50px] w-full mt-20'>
                <div className='flex justify-center items-center w-[380px] h-[80px] bg-[#2A6484] rounded-xl noto-medium text-white text-[24px] cursor-pointer' onClick={sendMsgButtonClicked}>メッセージを送信する</div>
                <div onClick={handleFavouriteButtonClicked}><FavouriteButton parentComponent='realEstateDetailPage' favouriteButtonActive={favouriteButtonActive}/></div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetailPage;
