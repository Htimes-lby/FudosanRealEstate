import React, { useEffect, useState } from 'react';
import RealEstateBigCard from '../components/RealEstateBigCard';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Loading from '../components/Loading';

const ItemMyPage = () => {

    const [cookies, setCookie] = useCookies();
    const user = cookies.user;
    const myId = user._id;
    const [realEstates, setRealEstates] = useState(null);

    const fetchData = async () => {
        const params = new URLSearchParams({posterId: myId}).toString();
        try {
            const res = await axios.get(`/getRealEstatesByPosterId?${params}`);
            setRealEstates(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const moveToContactMyPost = () => {

    }

    useEffect(() => {
        fetchData();
    },[])

    if(realEstates === null) {
        return (
            <div>
                <Loading />
            </div>
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
                            <RealEstateBigCard key = {index} contactToContactMyPost = {moveToContactMyPost} realEstate = {realEstate} parentComponent = 'ItemMyPage' />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ItemMyPage;
