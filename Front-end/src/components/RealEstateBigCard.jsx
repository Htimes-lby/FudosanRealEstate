import React from "react";
import BasicTableBuilding from "./BasicTableBuilding";
import BasicTableLand from "./BasicTableLand";
import FavouriteButton from "./FavouriteButton";


const RealEstateBigCard = (props) =>{
    const {realEstate} = props;
    const {briefDescription, fullDescription, images, basicInfo, realEstateCategory} = realEstate;
    const width = 'w-[180px]'
    const fontSize = 'text-[11px]'

    return(
        <div className="flex items-center w-[1275px] border border-black p-6 rounded-lg shadow-md mb-[50px]" >
            <div>
                <img src={images[1]} alt="photo1" className="w-[250px] h-[160px]" />
                <div className="mt-2 z-10"><FavouriteButton /></div>
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
