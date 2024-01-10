import React from "react";
import BasicTable from "./BasicTable";


const RealEstateSmallCard = ({img, text}) =>{
    return(
        <div className="w-[240px]  border pb-3 shadow-lg ">
            <div className="px-[31px] py-[20px] text-center text-[10px] " >
               <p className="line-clamp-3">{text}</p>              
            </div>
            <div className="flex justify-center">

                <img src={img} alt="photo" className="w-[150px] h-[90px] " />
            </div>
            <div className="flex justify-center pt-[14px]">
                <BasicTable  />
            </div>
        </div>
    )
}

export default RealEstateSmallCard;

