import React, {useState} from "react";
import BasicTableBuilding from "./BasicTableBuilding";
import BasicTableLand from "./BasicTableLand";


const RealEstateBigCard = (props) =>{
    const {realEstate} = props;
    const {shortDescription,longDescription, image, tableData, realEstateCategory} = realEstate;
    const width = 'w-[180px]'
    const fontSize = 'text-[11px]'

    const [style, setStyle] = useState("light");
    const [flag, setFlag] = useState("false");

    const changeStyle = () => {
        
        if (style !== "light"){
            setStyle("light");
            setFlag("true");
            
        }

        else {
            setStyle("dark");
            setFlag("false");
           
        }
    };

  

    return(
        <div className="flex items-center w-[1275px] border border-black p-6 rounded-lg shadow-md mb-[50px]" >
            <div>
                <img src={image} alt="photo1" className="w-[250px] h-[160px]" />
                <div className="w-[200px] border border-[#2A6484] mt-2 rounded-md ">
                <button className="p-1 flex ml-[15px] items-center  text-[#2A6484]  hover:cursor-pointer" onClick={changeStyle}><i className={`fa-regular fa-star text-xl text-black ${style}`} ></i>お気に入り追加済</button>
                </div>
            </div>
            <div className="pt-1 pl-11 pr-11 w-[260px]">
            {
                realEstateCategory === 'building' ? <BasicTableBuilding tableData = {tableData} width= {width} fontSize = {fontSize} /> : <BasicTableLand tableData = {tableData} width= {width} fontSize = {fontSize} />
            }
            </div>
            <div className="pl-5 pt-3">
                <div className="text-[20px] font-bold line-clamp-2">
                    <p>{shortDescription}</p>
                    
                </div>

                <div className="text-[16px] pt-4 line-clamp-3">
                   <p>{longDescription}</p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default RealEstateBigCard;
