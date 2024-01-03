import React from "react";

const BasicTable =  () =>{
    return(
        <table className="border border-[#8d8d8d] w-[180px]">

        <tbody className="text-center text-[10px] ">
            <tr className="bg-[#ececec] ">
                <td className="px-5 py-2 border-r border-[#8d8d8d]">価格</td>
                <td className="px-5 py-2">4,430万円</td>
            </tr>
            <tr>
                <td className="px-5 py-2 border-r border-[#8d8d8d]">間取り</td>
                <td className="px-5 py-2">4LDK</td>
            </tr>
            <tr className="bg-[#ececec]"> 
                <td className="px-5 py-2 border-r border-[#8d8d8d]">土地面積</td>
                <td className="px-5 py-2">153.33m²</td>
            </tr>
            <tr>
                <td className="px-5 py-2 border-r border-[#8d8d8d]">建物面積</td>
                <td className="px-5 py-2">92.75m²</td>
            </tr>
            <tr className="bg-[#ececec]">
                <td className="px-5 py-2 border-r border-[#8d8d8d]" >入居</td>
                <td className="px-5 py-2">即日</td>
            </tr>
            <tr>
                <td className="px-5 py-2 border-r border-[#8d8d8d]">駐車場</td>
                <td className="px-5 py-2">3台</td>
            </tr>
            
        </tbody>
        </table>
    )
}

export default BasicTable;

