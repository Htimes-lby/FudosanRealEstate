import { React, useState } from "react";
import { useCookies } from "react-cookie";
import moment from 'moment-timezone';

const AccordionItemMessage = (props) => {
    const [cookies, setCookie] = useCookies();
    const myId = cookies.user._id;
    const { message } = props
    const { senderId, receiverId, content, updatedAt} = message;

    const japanTime = moment.utc(updatedAt).tz('Asia/Tokyo');
    const year = japanTime.year();
    const month = japanTime.month();
    const day = japanTime.date();
    const time = japanTime.format('HH:mm:ss');
    //console.log(message)
    const [active, setActive] = useState(false);
    const handleToggle = () => {
        setActive((prevState) => !prevState);
    };

    return(
        <div className={`flex flex-col items-center border-[1px] w-full border-[#2A6484] ${senderId === myId ? '' : 'bg-[#F2ECCD]/70'}`} onClick={() => {handleToggle()}}>
            <div className=" flex flex-row w-full justify-between items-center p-3 noto-regular cursor-pointer" >
                <div className=" text-[20px] ml-2">AAA</div>
                {!active && <div className=" overflow-hidden p-3 whitespace-nowrap w-[85%] max-h-full text-lg text-ellipsis">{content}</div>}
                <div className=" text-[16px] mr-2">{year}年{month}月{day}日{time}</div>
            </div>
            {active && <span className="p-3 w-[800px] noto-regular whitespace-pre-wrap break-words mx-auto">{content}</span>}
        </div>
    );
};

export default AccordionItemMessage;