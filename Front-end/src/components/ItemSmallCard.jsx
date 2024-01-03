import React from "react";
import BasicTable from "./BasicTable";
import ShowContents from "./ShowContents";
import photo from "../assets/img/photo.png"

const ItemSmallCard = () =>{
    return(
        <div className="w-[240px]  border pb-3 shadow-lg ">
            <div className="px-9 py-3 text-center text-[10px]" >
                <ShowContents text=" 
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                " maxLength="60"/>
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

