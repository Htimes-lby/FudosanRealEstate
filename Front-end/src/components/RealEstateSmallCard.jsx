import React from "react";
import BasicTableBuilding from "./BasicTableBuilding";
import BasicTableLand from "./BasicTableLand";

const width = 'w-[180px]'
const fontSize = 'text-[11px]'

const RealEstateSmallCard = ( props ) =>{
    const {realEstate} = props;
    const {briefDescription, image, tableData, realEstateCategory} = realEstate;
    return(
        <div className="w-[240px]  border pb-3 shadow-lg ">
            <div className="px-4 pt-3 pb-1 text-center text-[10px] line-clamp-3" >
                <p>{briefDescription}</p>
            </div>
            <div className="flex justify-center mt-2 mb-3 w-[170px] h-[100px] mx-auto">
                <img src={image} alt="photo" className="w-40 " />
            </div>
            <div className="flex justify-center ">
                {
                realEstateCategory === 'building' ? <BasicTableBuilding tableData = {tableData} width= {width} fontSize = {fontSize} /> : <BasicTableLand tableData = {tableData} width= {width} fontSize = {fontSize} />
                }
            </div>
        </div>
    )
}

export default RealEstateSmallCard;

