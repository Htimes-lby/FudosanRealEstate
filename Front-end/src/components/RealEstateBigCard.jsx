import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import BasicTableBuilding from "./BasicTableBuilding";
import BasicTableLand from "./BasicTableLand";
import FavouriteButton from "./FavouriteButton";


const RealEstateBigCard = ({realEstate, handleRealEstateBigCardClicked, parentComponent, index}) => {
    const history = useHistory();
    const {briefDescription, fullDescription, images, basicInfo, realEstateCategory, _id} = realEstate;
    console.log('+++++++++++++++++++', _id);
    const width = 'w-[180px]'
    const fontSize = 'text-[11px]'
    const [favouriteButtonActive, setFavouriteButtonActive] = useState(false);
    const handleFavouriteButtonClicked = (e) => {
        setFavouriteButtonActive(favouriteButtonActive ? false : true);
        e.stopPropagation();
    }
    const handleNavigateToContactPostPage = (e, _id) => {
        const searchParams = new URLSearchParams ();
        searchParams.set('id', _id);
        history.push(`/contact-post?${searchParams.toString()}`);
        e.stopPropagation();
    }
    return(
        <div className="flex items-center w-[1275px] bg-white border border-black p-6 rounded-lg shadow-md mb-[50px]" onClick={() => handleRealEstateBigCardClicked(index)}>
            <div>
                <div className="w-[200px] h-[160px]"><img src={images[1]} alt="photo1" className="w-full h-full object-cover"/></div>
                {
                    parentComponent === 'FavouritePage' || parentComponent === 'MessageDetailPage' ?
                    (<div className="pt-1" onClick={(e) => handleFavouriteButtonClicked(e)}><FavouriteButton favouriteButtonActive={favouriteButtonActive} parentComponent={parentComponent}/></div>)
                    : null
                }
                {
                    parentComponent === 'ItemMyPage' &&
                    <div className="mt-2" onClick={(e) => handleNavigateToContactPostPage(e, _id)}><FavouriteButton parentComponent={parentComponent}/></div>
                }
            </div>
            <div className="pt-1 pl-11 pr-11 w-[260px]">
            {
                realEstateCategory === 'building' ? <BasicTableBuilding tableData = {basicInfo} width = {width} fontSize = {fontSize} /> : <BasicTableLand tableData = {basicInfo} width= {width} fontSize = {fontSize} />
            }
            </div>
            <div className="pl-5 pt-3">
                <div className="text-[20px] font-bold line-clamp-2">
                    <p>{briefDescription}</p>   
                </div>
                <div className="text-[16px] pt-4 line-clamp-3">
                   <p>{fullDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default RealEstateBigCard;
