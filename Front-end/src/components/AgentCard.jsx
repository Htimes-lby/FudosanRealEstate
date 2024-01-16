import React from "react";
import { useState } from "react";

const AgentCard =(props) =>{
    const {agentInfo} = props;
    const {companyName, agentName, phoneNumber, emailAddress, content} = agentInfo;
    const [active, setActive] = useState(false);
    const handleAgentCardClick = () => {
        setActive((prevState) => !prevState);
    }
    return(
        <div className="w-[500px] pt-[20px] pb-2 border border-[#0D4868] cursor-pointer" onClick={handleAgentCardClick}>
            <div className="flex justify-between items-center">
                <div className="pl-[23px]">
                    <span className=" text-[12px] font-Abhaya Libre SemiBold font-bold pr-2  ">{agentName}</span>
                    <span className="text-[15px] font-Arial">{companyName}</span>
                </div>
                <div className="flex flex-col items-end pr-[30px] text-[12px] ">
                    <p>{phoneNumber}</p>
                    <p>{emailAddress}</p>
                </div>
            </div>
            <div className={`pt-2 px-4 text-[13px] text-left ${active ? '' : 'line-clamp-3'}`}>
               {content}
            </div>
        </div>
    )
}

export default AgentCard;