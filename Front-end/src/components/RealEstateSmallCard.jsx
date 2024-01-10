import React from "react";
import BasicTable from "./BasicTable";
import photo from "../assets/img/photo.png"

const ItemSmallCard = () =>{
    return(
        <div className="w-[240px]  border pb-3 shadow-lg ">
            <div className="px-9 py-3 text-center text-[10px] line-clamp-3" >
               <p>

                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
               </p>
               
            </div>
            <div className="flex justify-center p-4">

            <img src={photo} alt="photo" className="w-40 " />
            </div>
            <div className="flex justify-center ">
            <BasicTable  />
            </div>
        </div>
    )
}

export default ItemSmallCard;

