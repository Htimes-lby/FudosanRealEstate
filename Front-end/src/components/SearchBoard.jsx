import React, {useState, useRef} from "react";

const SearchBoard = () =>{

    const [value, setValue] = useState({
        disp: '',
        price: '',
        topprice: '',
        bottomprice: '',
        land: '',
        photo: '',
        receive: '',
        post: ''
    });

    const inputDisp = useRef(null);
    const inputPrice = useRef(null);
    const inputTopPrice = useRef(null);
    const inputBottomPrice = useRef(null);
    const inputLand = useRef(null);
    const inputPhoto = useRef(null);
    const inputReceive = useRef(null);
    const inputPost = useRef(null);

    function closenav(){
        document.getElementById("search").style.display="none"        
    }

    function cancelCourse(){
        inputDisp.current.value = "";
        inputPrice.current.value = "";
        inputDisp.current.value = "";
        inputTopPrice.current.value = "";
        inputBottomPrice.current.value = "";
        inputLand.current.value = "";
        inputPhoto.current.value = "";
        inputReceive.current.value = "";
        inputPost.current.value = "";
        
        
      }
    return(
        <div className="z-10 noto-regular">
            <div className="w-[355px] shadow-2xl border-2 border-black/40 rounded-xl" id="search">
                <div className="flex justify-end">
                    <i class=" fa-solid fa-x text-[30px]  pr-[30px] pt-[24px]" onClick={closenav}></i>
                </div>
                <div className="flex">
                    <i className="fa-solid fa-magnifying-glass text-2xl pl-[42px] pt-[4px]"></i>
                    <p className="text-[24px] pl-[18px] noto-medium flex items-center">マイサーチ</p>
                </div>
                <div className="pt-8 flex items-center justify-between pr-14">
                    <p className="text-sm noto-medium pl-9 ">表示順番</p>
                    <select
                        className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]"
                        onChange={event => setValue(pre => {return {...pre, disp: event.target.value}})}
                        defaultValue={value}
                        ref={inputDisp}>
                        <option className="text-[16px]"  value="" ></option>
                        <option className="text-[18px] font-bold " value="新着順" disabled={true}>新着順</option>
                        <option className="text-[16px]"  value="掲載が新しい順" >&nbsp;掲載が新しい順</option>
                        <option className="text-[16px]"  value="掲載が古い順" >&nbsp;掲載が古い順</option>
                        {/* <option className="text-[18px] font-bold " value="人気順" disabled={true}>人気順</option>
                        <option className="text-[16px]"  value="問合せ多い順" >&nbsp;問合せ多い順</option>
                        <option className="text-[16px]"  value="問合せ少ない順" >&nbsp;問合せ少ない順</option> */}
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
                            onChange={event => setValue(pre => {return {...pre, price: event.target.value}})}
                            defaultValue={value}
                            ref={inputPrice}>
                            <option className="text-[16px]"  value="" ></option>
                            <option className="text-[16px]"  value="表示する" >&nbsp;表示する</option>
                            <option className="text-[16px]"  value="表示しない" >&nbsp;表示しない</option>
                            
                        </select>
                    </div>
                    <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">価格上限</p>
                        <input className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]" ref={inputTopPrice} placeholder="万円" type="text" onChange={event => setValue(pre => {return {...pre, topprice: event.target.value}})} />
                    </div>
                    <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">価格下限</p>
                        <input className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]" ref={inputBottomPrice} placeholder="万円" type="text" onChange={event => setValue(pre => {return {...pre, bottomprice: event.target.value}})} />
                    </div>
                    <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">土地/建物</p>
                        <select
                            className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]"
                            onChange={event => setValue(pre => {return {...pre, land: event.target.value}})}
                            defaultValue={value}
                            ref={inputLand}>
                            <option className="text-[16px]"  value="" ></option>
                            <option className="text-[16px]"  value="指定なし" >&nbsp;指定なし</option>
                            <option className="text-[16px]"  value="建物あり" >&nbsp;建物あり</option>
                            <option className="text-[16px]"  value="土地のみ" >&nbsp;土地のみ</option>
                            
                        </select>
                    </div>
                    <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">写真</p>
                        <select
                            className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]"
                            onChange={event => setValue(pre => {return {...pre, photo: event.target.value}})}
                            defaultValue={value}
                            ref={inputPhoto}>
                            <option className="text-[16px]"  value="" ></option>
                            <option className="text-[16px]"  value="指定なし" >&nbsp;指定なし</option>
                            <option className="text-[16px]"  value="ありのみ" >&nbsp;ありのみ</option>
                            <option className="text-[16px]"  value="なしも表示" >&nbsp;なしも表示</option>
                            
                        </select>
                    </div>
                    {/* <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">受付休止物件</p>
                        <select
                            className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]"
                            onChange={event => setValue(pre => {return {...pre, receive: event.target.value}})}
                            defaultValue={value}
                            ref={inputReceive}>
                            <option className="text-[16px]"  value="" ></option>
                            <option className="text-[16px]"  value="表示する" >&nbsp;表示する</option>
                            <option className="text-[16px]"  value="表示しない" >&nbsp;表示しない</option>
                                                
                        </select>
                    </div>  
                    <div className="pt-[16px] flex items-center justify-between pr-14">
                        <p className="text-sm noto-medium pl-9 ">掲載終了物件</p>
                        <select
                            className="border-[1px] outline-none focus:border-blue-500 p-1 rounded-md border-black w-[145px]"
                            onChange={event => setValue(pre => {return {...pre, post: event.target.value}})}
                            defaultValue={value}
                            ref={inputPost}>
                            <option className="text-[16px]"  value="" ></option>
                            <option className="text-[16px]"  value="表示する" >&nbsp;表示する</option>
                            <option className="text-[16px]"  value="表示しない" >&nbsp;表示しない</option>
                                                
                        </select>
                    </div>  */}
                    <div className="flex justify-center pt-8">
                        <button className="border border-black rounded-md p-2 text-sm noto-medium" onClick={cancelCourse} >入力内容をリセットする</button>
                    </div> 
                    <div className="flex justify-center pt-8 pb-20">
                        <button className=" bg-[#2A6484]  rounded-xl py-[12px] px-[47px] text-[16px] text-white ">設定を保存/表示する</button>
                    </div> 

                </div>
        </div>
    )
}

export default SearchBoard;