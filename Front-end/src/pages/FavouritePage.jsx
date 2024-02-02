import React from 'react';
import RealEstateBigCard from '../components/RealEstateBigCard';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const FavouritePage = () => {

    const history = useHistory();
    const [cookies, setCookie] = useCookies();
    const user = cookies.user;
    const myId = user._id;
    const favourites = user.favourites;

    const [realEstates, setRealEstates] = useState(null);

    const fetchFavouriteData = async () => {
        try {
            const payload = {
                favourites: favourites
            }
            const res = await axios.post('/getRealEstatesByIds', payload);
            setRealEstates(res.data.realEstates);
        } catch(error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchFavouriteData();
    },[])

    const handleRealEstateBigCardClicked = (props) => {
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        const index = props;
        const realEstateId = realEstates[index]._id;
        const searchParams = new URLSearchParams();
        searchParams.set('realEstateId', realEstateId);
        history.push(`/item-detail?${searchParams.toString()}`)
    }

    const handleFavouriteToggle = async (props) => {
        const realEstateId = props.realEstateId;
        const isFavourite = props.isFavourite;
        console.log('+++++++++++++++++++++++++', realEstateId, isFavourite)
        const params = new URLSearchParams({
            userId: myId,
            realEstateId: realEstateId,
        }).toString();
        if(isFavourite) {
            try {
                const res = await axios.get(`/removeFavourite?${params}`);
                const updatedUser = res.data.updatedUser;
                setCookie('user', updatedUser);
            } catch (error) {
                console.log(error.message);
            }
        } else {
            try {
                const res = await axios.get(`/addFavourite?${params}`);
                const updatedUser = res.data.updatedUser;
                setCookie('user', updatedUser);
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    if(realEstates === null) {
        return(
            <div>loading......................</div>
        )
    }
    return (
        <div>
            <div className='flex text-[40px] justify-center pb-[80px]'>
                <p className='pt-[63px] noto-medium'>お気に入り</p>
            </div>
            <div className='flex flex-col items-center min-h-[600px]'>
                {
                    realEstates.length === 0 &&
                    <div className='text-center text-3xl noto-medium pt-[150px]'>お気に入りに追加された不動産はありません。</div>
                }
                {
                    realEstates.map((realEstate, index) => {
                        return(
                            <RealEstateBigCard key = {index} realEstate = {realEstate} handleFavouriteToggle = {handleFavouriteToggle} handleRealEstateBigCardClicked = {handleRealEstateBigCardClicked} index = {index} parentComponent = 'FavouritePage' />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FavouritePage;