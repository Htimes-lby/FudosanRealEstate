import { useState } from "react"

const addFavourite = 'お気に入りに追加'
const removeFavourite = 'お気に入りを削除'

const FavouriteButton = ({calledComponent, favouriteButtonActive}) => {
console.log('_--------------------++++++++++++', favouriteButtonActive)
    return(
        <div className={` flex justify-center gap-[20px] items-center text-[#2A6484] bg-white rounded-xl border-[#2A6484] border-2 font-normal cursor-pointer 
            ${calledComponent === 'realEstateDetailPage' ? 'w-[380px] h-[80px] text-[24px]' : 'w-[200px] h-[40px] text-[12px]'}`}>
            <div className={`text-center cursor-pointer ${calledComponent === 'realEstateDetailPage' ? 'text-[30px]' : 'text-[15px]'}`}>
                <div className={`fa fa-star transition-all text-duration-200 ease-in ${favouriteButtonActive? 'starred text-[#f52755]': 'unstarred text-slate-200'}`}></div>
            </div>
            <span>{favouriteButtonActive ? removeFavourite : addFavourite}</span>
        </div>
    )
}

export default FavouriteButton;