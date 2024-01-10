import React from "react";

const BasicTableBuilding = ( props ) => {

    const {budget, layout, landarea, buildingarea, deadline, parking} = props;

    return(
        <table className="border border-[#8d8d8d] w-[180px]">
            <tbody className="text-center text-[10px]">
                <tr className="bg-[#ececec]">
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">希望価格</td>
                    <td className="px-5 py-2">{budget}</td>
                </tr>
                <tr>
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">間取り</td>
                    <td className="px-5 py-2">{layout}</td>
                </tr>
                <tr className="bg-[#ececec]">
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">土地面積</td>
                    <td className="px-5 py-2">{landarea}</td>
                </tr>
                <tr>
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">建物面積</td>
                    <td className="px-5 py-2">{buildingarea}</td>
                </tr>
                <tr className="bg-[#ececec]">
                    <td className="px-5 py-2 border-r border-[#8d8d8d]" >入居</td>
                    <td className="px-5 py-2">{deadline}</td>
                </tr>
                <tr>
                    <td className="px-5 py-2 border-r border-[#8d8d8d]">駐車場</td>
                    <td className="px-5 py-2">{parking}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default BasicTableBuilding;

