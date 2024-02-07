import React, {useState, useRef} from "react";

const SearchBoard = ( props ) => {

    const setIsSearchMode = props.setIsSearchMode;
    const setDisplayOrder = props.setDisplayOrder;
    const setDisplayOrderDependency = props.setDisplayOrderDependency;
    const setFloorBudget = props.setFloorBudget;
    const setCeilBudget = props.setCeilBudget;
    const setShowRealEstateWithoutBudget = props.setShowRealEstateWithoutBudget;
    const fetchDataInSearchMode = props.fetchDataInSearchMode;
    const test = props.test;

    const displayOrderRef = useRef(null);
    const withoutBudgetRef = useRef(null);
    const floorBudgetRef = useRef(null);
    const ceilBudgetRef = useRef(null);

    const cancelSearchMode = () => {
        displayOrderRef.current.value = '';
        withoutBudgetRef.current.value = '';
        floorBudgetRef.current.value = '';
        ceilBudgetRef.current.value = '';
        setIsSearchMode(false);
        setDisplayOrder(-1);
        setDisplayOrderDependency('createdAt');
        setFloorBudget(-1);
        setCeilBudget(1000000);
        setShowRealEstateWithoutBudget(false);
    }

    const handleSaveAndDisplayBtnClicked = () => {
        const displayOrderContent = displayOrderRef.current.value;
        const withoutBudgetContent = withoutBudgetRef.current.value;
        const floorBudget = floorBudgetRef.current.value;
        const ceilBudget = ceilBudgetRef.current.value;
        setCeilBudget(ceilBudget === ''? 1000000: ceilBudget);
        setFloorBudget(floorBudget === ''? -1: floorBudget);
        if(displayOrderContent === '掲載が新しい順') {
            setDisplayOrderDependency('createdAt');
            setDisplayOrder(-1);
        }
        if(displayOrderContent === '掲載が古い順') {
            setDisplayOrderDependency('createdAt');
            setDisplayOrder(1);
        }
        if(displayOrderContent === '安い順') {
            setDisplayOrderDependency('price');
            setDisplayOrder(1);
        }
        if(displayOrderContent === '高い順') {
            setDisplayOrderDependency('price');
            setDisplayOrder(-1);
        }
        if(withoutBudgetContent === '表示する') {
            setShowRealEstateWithoutBudget(true);
        }
        if(withoutBudgetContent === '表示しない') {
            setShowRealEstateWithoutBudget(false);
        }
        setIsSearchMode(true)
    }

    function closenav(){
        document.getElementById("search").style.display="none"        
    }

    return(
        <div className="z-10 noto-regular">
            <div className="w-[355px] shadow-2xl border-2 border-black/40 rounded-xl" id="search">
                <div className="flex justify-end">
                    <i className=" fa-solid fa-x text-lg pr-[30px] pt-[24px] cursor-pointer" onClick={closenav}></i>
                </div>
                <div className="flex">
                    <i className="fa-solid fa-magnifying-glass text-2xl pl-[42px] pt-[4px]"></i>
                    <p className="text-[24px] pl-[18px] noto-medium flex items-center">マイサーチ</p>
                </div>
                <div className="pt-8 flex items-center justify-between pr-14">
                    <p className="text-sm noto-medium pl-9 ">表示順番</p>
                    <select
                        className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]"
                        
                        ref={displayOrderRef}
                        >
                        <option className="text-[16px]"  value="" ></option>
                        <option className="text-[18px] font-bold " value="新着順" disabled={true}>新着順</option>
                        <option className="text-[16px]"  value="掲載が新しい順" >&nbsp;掲載が新しい順</option>
                        <option className="text-[16px]"  value="掲載が古い順" >&nbsp;掲載が古い順</option>
                        <option className="text-[18px] font-bold " value="価格順" disabled={true}>価格順</option>
                        <option className="text-[16px]"  value="安い順" >&nbsp;安い順</option>
                        <option className="text-[16px]"  value="高い順" >&nbsp;高い順</option>
                    </select>
                </div>
                    <p className=" text-base noto-medium mx-auto pl-[35%] pt-6 pb-3">絞込み検索</p>
                    <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">価格未定物件</p>
                        <select
                            className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]"
                            
                            ref={withoutBudgetRef}>
                            <option className="text-[16px]"  value="" ></option>
                            <option className="text-[16px]"  value="表示する" >&nbsp;表示する</option>
                            <option className="text-[16px]"  value="表示しない" >&nbsp;表示しない</option>
                        </select>
                    </div>
                    <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">価格上限</p>
                        <input className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]" ref={ceilBudgetRef} placeholder="万円" type="text" />
                    </div>
                    <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">価格下限</p>
                        <input className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]" ref={floorBudgetRef} placeholder="万円" type="text" />
                    </div>
                    <div className="flex justify-center pt-8">
                        <button className="border border-black rounded-md p-2 text-sm noto-medium" onClick={cancelSearchMode} >入力内容をリセットする</button>
                    </div>
                    <div className="flex justify-center pt-8 pb-20">
                        <button className=" bg-[#2A6484]  rounded-xl py-[12px] px-[47px] text-[16px] text-white " onClick={handleSaveAndDisplayBtnClicked}>設定を保存/表示する</button>
                    </div>
                </div>
        </div>
    )
}

export default SearchBoard;