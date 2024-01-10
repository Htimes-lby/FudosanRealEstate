import React from "react";
import BasicTable from "./BasicTable";
import photo1 from "../assets/img/photo1.jpeg"

const RealEstateBigCard = () =>{
    return(
        <div className="flex w-[1275px] border p-6 rounded-lg shadow-md">
            <div>
                <img src={photo1} alt="photo1" className="w-[250px] h-[160px]" />
                <div className="w-[200px] border border-[#2A6484] mt-2 rounded-md ">
                <p className="p-1 text-center text-[#2A6484] "><i className="fa-regular fa-star text-xl text-black"></i>お気に入り追加済</p>
                </div>
            </div>
            <div className="pt-1 pl-11 pr-11 w-[260px]">
                <BasicTable />
            </div>
            <div className="pl-5 pt-3">
                <div className="text-[20px] font-bold line-clamp-3">
                    <p>

                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    </p>
                    
                </div>

                <div className="text-[16px] pt-4 line-clamp-3">
                   <p>

                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                   </p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default RealEstateBigCard;
