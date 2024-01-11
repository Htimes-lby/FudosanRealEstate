import React from "react";

const BasicTableBuilding = ( props ) => {

    const {tableData, fontSize, width} = props;
    const {budget, layout, landarea, buildingarea, deadline, parking} = tableData;

    return(
        <table className={`border border-[#8d8d8d] ${width} text-center`}>
            <tbody className={`${fontSize}`}>
                <tr className="bg-[#ececec]">
                    <td className=" py-[5px] border-r border-[#8d8d8d]">価格</td>
                    <td className=" py-[5px]">{budget}</td>
                </tr>
                <tr>
                    <td className=" py-[5px] border-r border-[#8d8d8d]">間取り</td>
                    <td className=" py-[5px]">{layout}</td>
                </tr>
                <tr className="bg-[#ececec]">
                    <td className=" py-[5px] border-r border-[#8d8d8d]">土地面積</td>
                    <td className=" py-[5px]">{landarea}</td>
                </tr>
                <tr>
                    <td className=" py-[5px] border-r border-[#8d8d8d]">建物面積</td>
                    <td className=" py-[5px]">{buildingarea}</td>
                </tr>
                <tr className="bg-[#ececec]">
                    <td className=" py-[5px] border-r border-[#8d8d8d]" >入居</td>
                    <td className=" py-[5px]">{deadline}</td>
                </tr>
                <tr>
                    <td className=" py-[5px] border-r border-[#8d8d8d]">駐車場</td>
                    <td className=" py-[5px]">{parking}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default BasicTableBuilding;

