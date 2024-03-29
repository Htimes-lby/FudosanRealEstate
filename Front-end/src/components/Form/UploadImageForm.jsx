import React, { useState, useEffect } from "react";
import axios from 'axios';
import shortid from "shortid";


const UploadImageForm = ({button, title, width1, width2, gap, status, onDataArrayFromChild}) => {

    const [selectedfiles, SetSelectedfiles] = useState([]);
    const [selectedImage, SetSelectedImage] = useState([]);

    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const InputChange = (e) => {
        // --For Multiple File Input
        SetSelectedImage(e.target.files);
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push((e.target.files[i]));
            
            let reader = new FileReader();
            let file = e.target.files[i];
            
            reader.onloadend = () => {
                SetSelectedfiles((preValue) => {
                    return [
                        ...preValue,
                        {
                            id: shortid.generate(),
                            filename: e.target.files[i].name,
                            filetype: e.target.files[i].type,
                            fileimage: reader.result,
                            datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                            filesize: filesizes(e.target.files[i].size)
                        }
                    ]
                });
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    }
    
    
    const DeleteSelectFile = (id) => {
        if(window.confirm("このファイルを削除してもよろしいですか？")){
            const result = selectedfiles.filter((data) => data.id !== id);
            SetSelectedfiles(result);
        }else{
            // alert('No');
        }
    }
    
        useEffect(()=>{
            let images = []
            for (const image of selectedImage) {
                images.push(image)
            }
            onDataArrayFromChild(images);
    },[selectedImage])


    return(
        
        <div className="fileupload-view ">
            <div className={`${width1} `}>
                <div className="mt-5 pt-0    pb-[30px]  flex flex-1 w-full">
                    <div className={`${width2}  flex ${gap} `}>
                        {
                            status === "必須" ? 
                            <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span> :
                            <span className='bg-[#63A4D4] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>任意</span>
                        }
                        <p className='text-[20px]'>{title}</p>
                    </div>
                    <div className="w-[500px]">
                        <div className="mb-[60px]">
                            <div className="file-upload-box">           
                                <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                                <span className="text-white ml-[50px] py-[6px] px-[40px] rounded-md cursor-pointer bg-[#2A6484]/70">{button}</span>
                            </div>
                            <div><p className="pt-[12px] pl-[60px] text-[15px]">複数のファイルを選択できます。</p></div>
                        </div>
                        <div className="mb-3 ">
                            {
                                selectedfiles.map((data, index) => {
                                const { id, filename, filetype, fileimage, datetime, filesize } = data;
                                return (
                                    <div className="file-atc-box" key={id}>
                                        {
                                        filename.match(/.(jpg|jpeg|png|gif|svg|jfif)$/i) ?
                                        <div className="file-image"> <img src={fileimage} alt="" /></div> :
                                        <div className="file-image"><i className="far fa-file-alt"></i></div>
                                        }
                                        <div className="file-detail flex justify-between">
                                            <div>
                                                <h6>{filename}</h6>
                                                <p>サイズ: {filesize}</p>
                                                <p>変更時刻: {datetime}</p>
                                            </div>
                                            <div className="file-actions ">
                                                <button type="button" className="file-action-btn" onClick={() => DeleteSelectFile(id)}><i className="fa-solid fa-trash text-[40px] pl-[15px]"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default UploadImageForm;