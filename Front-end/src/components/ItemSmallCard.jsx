import React from "react";
import BasicTable from "./BasicTable";
import ShowContents from "./ShowContents";
import photo from "../assets/img/photo.png"

const ItemSmallCard = () =>{
    return(
        <div className="w-96 ">
            <div className="p-4">
            <ShowContents 
            text="テキスト テキスト テキスト テキスト
                  テキスト テキスト テキスト テキスト
                  テキスト テキスト テキスト テキスト
                  テキスト テキスト テキスト テキスト
                  テキスト テキスト テキスト テキスト
                  テキスト テキスト テキスト テキスト"
                  maxLength={100}
                />
            </div>
            <div className="flex justify-center p-4">

            <img src={photo} alt="photo" className="w-80 " />
            </div>
            <div className="pl-[20px]">
            <BasicTable  />
            </div>
        </div>
    )
}

export default ItemSmallCard;

