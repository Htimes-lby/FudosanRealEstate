import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import RealEstateBigCard from '../components/RealEstateBigCard';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const ItemMyPage = () => {

    const [cookies, setCookie] = useCookies();
    const user = cookies.user;
    const myId = user._id;
    const [realEstates, setRealEstates] = useState(null);

    const fetchData = async () => {
        console.log('I am here at fetchData')
        const params = new URLSearchParams({posterId: myId}).toString();
        try {
            const res = await axios.get(`/getRealEstatesByPosterId?${params}`);
            console.log('I am here at fetchDataTry', res)
            setRealEstates(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    if(realEstates === null) {
        return (
            <div>loading.............</div>
        )
    }

    return (
        <div>
            <div className='flex text-[40px] justify-center pb-[80px]'>
                <p className='pt-[63px]'>私の投稿</p>
            </div>
            <div className='flex flex-col items-center min-h-[400px]'>
                {
                    realEstates.length === 0 &&
                    <div className='noto-medium text-3xl mt-[50px]'>まだ投稿がありません</div>
                }
                {
                    realEstates.map((realEstate, index) => {
                        return(
                            <RealEstateBigCard key = {index} realEstate = {realEstate} parentComponent = 'ItemMyPage' />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ItemMyPage;
