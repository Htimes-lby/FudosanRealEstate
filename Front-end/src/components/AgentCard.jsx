import React from "react";
import { useState } from "react";

const AgentCard = (props) => {
    const {agent} = props;
    //console.log(agent);

    const {companyName, agentName, phoneNumber, agentEmail, content} = agent;
    const name = `${agentName.lastNameGanji} ${agentName.firstNameGana}`;
    const [active, setActive] = useState(false);
    const handleAgentCardClick = () => {
        setActive((prevState) => !prevState);
    }
    return(
        <div className="w-[500px] pt-[20px] pb-2 border border-[#0D4868] noto-regular cursor-pointer" onClick={handleAgentCardClick}>
            <div className="flex justify-between items-center">
                <div className="pl-[23px] noto-medium">
                    <span className=" text-[12px] pr-2 noto-bold">{name}</span>
                    <span className="text-[15px]">{companyName}</span>
                </div>
                <div className="flex flex-col items-end pr-[30px] text-[12px] noto-medium">
                    <p>{phoneNumber}</p>
                    <p>{agentEmail}</p>
                </div>
            </div>
            <div className={`pt-2 px-4 text-[13px] text-left noto-regular ${active ? '' : 'line-clamp-3'}`}>
                {content}
            </div>
        </div>
    )
}

export default AgentCard;