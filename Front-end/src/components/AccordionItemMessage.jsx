import { useEffect, React, useState } from "react";

const AccordionItemMessage = (props) => {

    const { message } = props
    const { id, username, content, date, status  } = message;

    const [active, setActive] = useState(false);
    const handleToggle = () => {
        if(active) setActive(false);
        else setActive(true);
    };

    return(
        <div>
            {status === "receive"? 
            <div className=" border border-gray-300 overflow-hidden bg-[#F2ECCD]/60">
                <div className=" flex flex-row justify-between items-center p-3 cursor-pointer" onClick={() => {handleToggle()}}>
                    <div className=" text-[20px] ml-4">{username}</div>
                    {!active && <div className=" overflow-hidden p-3 whitespace-nowrap w-[65%] max-h-full text-ellipsis">{content}</div>}
                    <div className=" text-[16px] mr-4">{date}</div>
                </div>
                {active&&<div className="p-3 w-[90%] h-auto mx-auto">{content}</div>}
            </div>:
            <div className=" border border-gray-300 overflow-hidden">
            <div className=" flex flex-row justify-between items-center p-3 cursor-pointer" onClick={() => {handleToggle()}}>
                <div className=" text-[20px] ml-4">{username}</div>
                {!active && <div className=" overflow-hidden p-3 whitespace-nowrap w-[65%] max-h-full text-ellipsis">{content}</div>}
                <div className=" text-[16px] mr-4">{date}</div>
            </div>
            {active&&<div className="p-3 w-[90%] h-auto mx-auto">{content}</div>}
        </div>
            }
            

            
        
        </div>
    );
};

export default AccordionItemMessage;