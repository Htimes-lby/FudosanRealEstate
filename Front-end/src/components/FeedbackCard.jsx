import React from "react";
const photo2 ='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80'

const FeedbackCard = () => {
    return(
        <div className="w-[260px]  border pb-3 shadow-xl rounded-lg">
            <div className="flex justify-center p-4">

            <img src={photo2} alt={photo2} className="w-[220px] " />
            </div>
            <div className="px-4 py-3 text-center text-[12px] line-clamp-3" >
                <p>
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                テキスト テキスト テキスト テキスト
                </p>
               
            </div>
           
        </div>
    )
}

export default FeedbackCard;
