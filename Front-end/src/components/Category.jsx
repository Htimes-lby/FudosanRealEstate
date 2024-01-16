import React from 'react';

const Category = ({ text, img, onClick }) => {
  
    return (
        <div className=" flex items-center bg-cover bg-center hover:opacity-70  " onClick={onClick} style={{ backgroundImage:`url(${img})`,height:150,width:180}}>
            <div className='bg-[#2A6484]/90 w-full text-center py-[5px]'>
                <p className='text-white font-medium text-[14px] text-center'>{text}</p>
            </div>
        </div>
    )
};

export default Category;