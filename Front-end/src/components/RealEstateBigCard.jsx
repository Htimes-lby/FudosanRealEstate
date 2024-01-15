import React, {useState} from "react";
import BasicTableBuilding from "./BasicTableBuilding";
import BasicTableLand from "./BasicTableLand";
import FavouriteButton from "./FavouriteButton";


const RealEstateBigCard = (props) =>{
    const {realEstate} = props;
    const {shortDescription,longDescription, image, tableData, realEstateCategory} = realEstate;
    const width = 'w-[180px]'
    const fontSize = 'text-[11px]'

    return(
        <div className="flex items-center w-[1275px] border border-black p-6 rounded-lg shadow-md mb-[50px]" >
            <div>
                <img src={image} alt="photo1" className="w-[250px] h-[160px]" />
                <div className=" mt-2">
                <FavouriteButton />
                </div>
            </div>
            <div className="pt-1 pl-11 pr-11 w-[260px]">
            {
                realEstateCategory === 'building' ? <BasicTableBuilding tableData = {tableData} width= {width} fontSize = {fontSize} /> : <BasicTableLand tableData = {tableData} width= {width} fontSize = {fontSize} />
            }
            </div>
            <div className="pl-5 pt-3">
                <div className="text-[20px] font-bold line-clamp-2">
                    <p>{shortDescription}</p>
                    
                </div>

                <div className="text-[16px] pt-4 line-clamp-3">
                   <p>{longDescription}</p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default RealEstateBigCard;
