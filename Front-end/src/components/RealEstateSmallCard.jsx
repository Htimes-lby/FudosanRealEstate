import React from "react";
import BasicTableBuilding from "./BasicTableBuilding";
import BasicTableLand from "./BasicTableLand";


const ItemSmallCard = ( props ) =>{

    const {briefDescription, image, tableData, realEstateCategory} = props;
    return(
        <div className="w-[240px]  border pb-3 shadow-lg ">
            <div className="px-9 py-3 text-center text-[10px] line-clamp-3" >
                <p>{briefDescription}</p>
            </div>
            <div className="flex justify-center p-4">
                <img src={image} alt="photo" className="w-40 " />
            </div>
            <div className="flex justify-center ">
                {
                realEstateCategory == 'building' ? <BasicTableBuilding tableData = { tableData } /> : <BasicTableLand tableData = { tableData }/>
                }
            </div>
        </div>
    )
}

export default ItemSmallCard;

