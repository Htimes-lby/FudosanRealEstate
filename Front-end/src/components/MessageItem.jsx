import { useEffect,React } from "react";

const MessageItem = (props) => {
    const {messageItem} = props;
    const { username, content, date} = messageItem;

    return(
        <div className="w-full h-[80px] flex justify-between items-center px-[20px]">
            <div className=" text-[16px]">{username}</div>
            <div className="line-clamp-3  w-[60%] max-h-[80px] text-[14px]">{content}</div>
            <div className=" text-[16px]">{date}</div>
        </div>
    )
}

export default MessageItem;