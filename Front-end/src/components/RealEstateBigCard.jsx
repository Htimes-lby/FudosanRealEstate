import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import BasicTableBuilding from "./BasicTableBuilding";
import BasicTableLand from "./BasicTableLand";
import FavouriteButton from "./FavouriteButton";
import { useCookies } from "react-cookie";
import axios from "axios";

const RealEstateBigCard = ({realEstate, contactMoveToMyPost, handleFavouriteToggle, handleRealEstateBigCardClicked, parentComponent, index}) => {
    const history = useHistory();
    const [cookies, setCookie] = useCookies();
    const myId = cookies.user._id;
    const favourites = cookies.user.favourites;
    const realEstateId = realEstate._id;
    const isFavourite = favourites.includes(realEstate._id);
    const {briefDescription, fullDescription, images, basicInfoBuilding, basicInfoLand, label, _id} = realEstate;
    const width = 'w-[180px]'
    const fontSize = 'text-[11px]'
    const handleFavouriteButtonClicked = async (e) => {
        handleFavouriteToggle({realEstateId, isFavourite});
        // console.log('--------------------------------');
        e.stopPropagation();
    }
    const handleNavigateToContactPostPage = (e, _id) => {
        const searchParams = new URLSearchParams ();
        searchParams.set('realEstateId', _id);
        history.push(`/contact-post?${searchParams.toString()}`);
        e.stopPropagation();
    }
    return(
        <div className="flex items-center w-[1275px] bg-white border border-black p-6 rounded-lg shadow-md mb-[50px]" onClick={() => handleRealEstateBigCardClicked(index)}>
            <div>
                <div className="w-[200px] h-[160px]"><img src={images[0]} alt="photo1" className="w-full h-full object-cover"/></div>
                {
                    parentComponent === 'FavouritePage' || parentComponent === 'MessageDetailPage' ?
                    (<div className="pt-1" onClick={(e) => handleFavouriteButtonClicked(e)}><FavouriteButton isFavourite={isFavourite} parentComponent={parentComponent}/></div>)
                    : null
                }
                {
                    parentComponent === 'ItemMyPage' &&
                    <div className="mt-2" onClick={(e) => handleNavigateToContactPostPage(e, _id)}><FavouriteButton parentComponent={parentComponent}/></div>
                }
            </div>
            <div className="pt-1 pl-11 pr-11 w-[260px]">
            {
                label === 'building' ? <BasicTableBuilding tableData = {basicInfoBuilding} width = {width} fontSize = {fontSize} /> : <BasicTableLand tableData = {basicInfoLand} width= {width} fontSize = {fontSize} />
            }
            </div>
            <div className="pl-3">
                <div className="text-base noto-medium line-clamp-2">
                    <p>{briefDescription}</p>   
                </div>
                <div className="text-sm noto-regular pt-4 line-clamp-5">
                   <p>{fullDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default RealEstateBigCard;
