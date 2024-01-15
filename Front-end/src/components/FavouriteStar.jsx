import React from "react";
import { useState } from "react";

const FavouriteStar = () => {
    const [clicked, setClicked] = useState(false);
    const handleStarClicked = () => {
        setClicked(clicked ? false : true);
    }
    return(
        <div onClick={handleStarClicked}>
            <div className="text-center text-[30px] cursor-pointer">
                <div className={`fa fa-star transition-all text-duration-200 ease-in ${clicked? 'starred text-[#f52755]': 'unstarred text-slate-200'}`}></div>
            </div>
        </div>
    );
}

export default FavouriteStar;