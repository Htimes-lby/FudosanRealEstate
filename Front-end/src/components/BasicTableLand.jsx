import React from "react";

const BasicTableLand = ( props ) => {

    const {tableData, fontSize, width} = props
    const {budget, landarea, buildingCoverageRatio, floorAreaRatio, structure} = tableData;

    return(
        <table className={`border border-[#8d8d8d] ${width}`}>
            <tbody className={`text-center ${fontSize}`}>
                <tr className="bg-[#ececec]">
                    <td className=" py-[7px] border-r border-[#8d8d8d]">希望価格</td>
                    <td className=" py-[7px]">{budget}万円</td>
                </tr>
                <tr>
                    <td className=" py-[7px] border-r border-[#8d8d8d]">土地面積</td>
                    <td className=" py-[7px]">{landarea}m²</td>
                </tr>
                <tr className="bg-[#ececec]">
                    <td className=" py-[7px] border-r border-[#8d8d8d]">乾閉率</td>
                    <td className=" py-[7px]">{buildingCoverageRatio}%</td>
                </tr>
                <tr>
                    <td className=" py-[7px] border-r border-[#8d8d8d]">容積率</td>
                    <td className=" py-[7px]">{floorAreaRatio}%</td>
                </tr>
                <tr className="bg-[#ececec]">
                    <td className=" py-[7px] border-r border-[#8d8d8d]" >構造</td>
                    <td className=" py-[7px]">{structure}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default BasicTableLand;

