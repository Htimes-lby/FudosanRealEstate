import { React, useState } from "react";
const username = 'sasuke'
const AccordionItemMessage = (props) => {

    const { message } = props
    const { sender, receiver, content, date, } = message;

    const [active, setActive] = useState(false);
    const handleToggle = () => {
        setActive((prevState) => !prevState);
    };

    return(
        <div className={`border-[1px] border-[#2A6484] ${sender === username ? '' : 'bg-[#F2ECCD]/70'}`}>
            <div className=" flex flex-row justify-between items-center p-3 cursor-pointer" onClick={() => {handleToggle()}}>
                <div className=" text-[20px] ml-4">{sender}</div>
                {!active && <div className=" overflow-hidden p-3 whitespace-nowrap w-[65%] max-h-full text-ellipsis">{content}</div>}
                <div className=" text-[16px] mr-4">{date}</div>
            </div>
            {active && <div className="p-3 w-[90%] h-auto mx-auto">{content}</div>}
        </div>
    );
};

export default AccordionItemMessage;