import React from "react";

const FlagTextContainer = ({text}) =>{

    return(
        <div className="mt-2 relative" id="flag">
            <span className="bg-[#0D4868] inline-block w-[300px] h-[60px] text-[20px] leading-[55px] font-normal text-white text-center" >{text}</span>
        </div>
    )

}

export default FlagTextContainer;