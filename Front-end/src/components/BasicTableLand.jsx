import React from "react";

const BasicTableLand = ( props ) => {

    const {budget, landarea, buildingToLandRatio, floorAreaRatio, structure} = props;

    return(
        <table className="border border-[#8d8d8d] w-[180px]">
            <tbody className="text-center text-[10px]">
                <tr className="bg-[#ececec]">
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">希望価格</td>
                    <td className="px-5 py-2">{budget}</td>
                </tr>
                <tr>
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">土地面積</td>
                    <td className="px-5 py-2">{landarea}</td>
                </tr>
                <tr className="bg-[#ececec]">
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">乾閉率</td>
                    <td className="px-5 py-2">{buildingToLandRatio}</td>
                </tr>
                <tr>
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">容積率</td>
                    <td className="px-5 py-2">{floorAreaRatio}</td>
                </tr>
                <tr className="bg-[#ececec]">
                    <td className="px-5 py-2 border-r border-[#8d8d8d]" >構造</td>
                    <td className="px-5 py-2">{structure}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default BasicTableLand;

