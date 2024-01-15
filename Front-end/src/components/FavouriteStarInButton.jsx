import React from "react";
import { useState } from "react";

const FavouriteStarInButton = (props) => {
    const {clicked} = props;
    console.log("clicked", clicked)
    return(
        <div>
            <div className="text-center text-[30px] cursor-pointer">
                <div className={`fa fa-star transition-all text-duration-200 ease-in ${clicked? 'starred text-[#f52755]': 'unstarred text-slate-200'}`}></div>
            </div>
        </div>
    );
}

export default FavouriteStarInButton;