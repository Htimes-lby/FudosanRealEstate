import React from "react";
import ShowContents from './ShowContents'

 const AgentCard =({companyName, agentName, phoneNumber, emailAddress, content}) =>{

    return(
        <div className="w-[500px] pt-[20px] border border-[#0D4868]">
            <div className="flex justify-between items-center">
                <div className="pl-[23px]">
                    <span className=" text-[12px] font-Abhaya Libre SemiBold font-bold pr-2  ">{agentName}</span>
                    <span className="text-[15px] font-Arial">{companyName}</span>
                </div>
                <div className="flex flex-col items-end pr-[30px] ">
                    <p>{phoneNumber}</p>
                    <p>{emailAddress}</p>
                </div>
            </div>
            <div className="pt-[20px] px-[45px]">
                <ShowContents text={content} maxLength={121}/>
            </div>
        </div>
    )
    
 }

 export default AgentCard;