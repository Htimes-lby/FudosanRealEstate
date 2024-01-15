import { useState } from "react"
import FavouriteStarInButton from "./FavouriteStarInButton"

const addFavourite = 'お気に入りに追加'
const removeFavourite = 'お気に入りを削除'

const FavouriteButton = (props) => {

    const {calledComponent} = props;
    const [favouriteButtonClicked, setFavouriteButtonClicked] = useState(false);
    const handleFavouriteButtonClicked = () => {
        setFavouriteButtonClicked(favouriteButtonClicked ? false : true);
    }

    return(
        <div className={`flex justify-center gap-[20px] items-center text-[#2A6484] bg-white text-[24px] rounded-xl border-[#2A6484] border-2 font-normal cursor-pointer ${calledComponent == 'realEstateDetailPage'? 'w-[380px] h-[80px]' : 'w-[200px] h-[40px]'}`} onClick={handleFavouriteButtonClicked}>
            <FavouriteStarInButton clicked = {favouriteButtonClicked}/>
            <span>{favouriteButtonClicked ? removeFavourite : addFavourite}</span>
        </div>
    )
}

export default FavouriteButton;