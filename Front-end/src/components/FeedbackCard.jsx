import React from "react";

import ShowContents from "./ShowContents";
import photo2 from "../assets/img/photo2.png"

const FeedbackCard = () =>{
    return(
        <div className="w-[260px]  border pb-3 shadow-xl rounded-lg">
            <div className="flex justify-center p-4">

            <img src={photo2} alt="photo2" className="w-[220px] " />
            </div>
            <div className="px-4 py-3 text-center text-[12px]" >
                <ShowContents text=" 
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                " maxLength="113"/>
            </div>
           
        </div>
    )
}

export default FeedbackCard;
