import { useEffect,React } from "react";


const MessageItem = (props) => {
    const {messageItem} = props;
    const { username, content, date ,status} = messageItem;

    return(
            <div className="w-full flex justify-between items-center px-[20px]">
                {status === "receive" ? 
                <div className="flex gap-[80px] bg-[#F2ECCD]/60">
                    <div className=" text-[16px]">{username}</div>
                    <div className="line-clamp-3  w-[60%] max-h-[80px] text-[14px]">{content}</div>
                    <div className=" flex items-end text-[16px]">{date}</div>
                </div>:
                <div className="flex gap-[80px]">
                    <div className=" text-[16px]">{username}</div>
                    <div className="line-clamp-3  w-[60%] max-h-[80px] text-[14px]">{content}</div>
                    <div className=" flex items-end text-[16px]">{date}</div>
                </div>
                }
            </div>
    )
}

export default MessageItem;