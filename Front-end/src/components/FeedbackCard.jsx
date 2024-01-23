import React from "react";

const FeedbackCard = (props) => {

    const {feedback} = props;
    const {images, fullComment} = feedback;
    const image = images[0];

    return(
        <div className="w-[260px]  border pb-3 shadow-xl rounded-lg">
            <div className="flex justify-center p-4">
                <img src={image} alt='photo' className="w-[220px] " />
            </div>
            <div className="px-4 pt-1 text-center text-[11px] overflow-hidden line-clamp-5">
                <p className="noto-regular">{fullComment}</p>
            </div>
        </div>
    )
}

export default FeedbackCard;
