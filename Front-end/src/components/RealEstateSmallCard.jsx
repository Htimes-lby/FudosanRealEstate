import React from "react";
import BasicTableBuilding from "./BasicTableBuilding";
import BasicTableLand from "./BasicTableLand";


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
                realEstateCategory === 'building' ? <BasicTableBuilding tableData = {tableData} fontSize = {"text-[10px]"} width = {"w-[180px]"} /> : <BasicTableLand tableData = {tableData} />
                }
            </div>
        </div>
    )
}

export default RealEstateSmallCard;

