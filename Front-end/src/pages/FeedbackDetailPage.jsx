import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

import Carousel from '../components/Carousel'
const myArray = [
    require("../assets/img/carousel/2.jpg"),
    require("../assets/img/carousel/1.jpg"),
    require("../assets/img/carousel/3.jpg"),
    require("../assets/img/carousel/4.jpg"),
    require("../assets/img/carousel/5.jpg"),
];
const feedbacks = [
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
        category: 'sold',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
        category: 'sold',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'sold',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'sold',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'bought',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'bought',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'bought',
    },
    {
        name: 'Sasuke',
        address: 'Lasbegas,US',
        images : myArray,
        shortComment : `テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト`,
        fullComment : `テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト
テキスト テキスト テキスト テキスト`,
category: 'bought',
    },
]
const FeedbackDetailPage = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const index = searchParams.get('index')
    const {name, address, images, shortComment, fullComment, category} = feedbacks[index];

  return (
    <div className='flex flex-col items-center mt-[40px] mb-[80px]'>
        <div>
            {category === 'bought' && <p className='text-[32px] text-center'>売主さんへの手紙</p>}
            {category === 'sold' && <p className='text-[32px] text-center'>売りました体験談</p>}
        </div>
        <div className='w-[1300px] pt-[72px] flex items-center justify-between'>
            {category === 'bought' && <p className='text-[32px]'>あれから、こんな風に使ってます</p>}
            <p className='text-[20px]'><pre>{name} さん   {address}</pre></p>
        </div>
        <div className='pt-[28px] w-full'>
            <Carousel images = {images}/>
        </div>
        <div className='flex flex-col items-center w-[1300px] mt-[100px]'>
            <p className='text-[24px]'>{shortComment}</p>
            <p className='text-[16px] pt-[56px]'>{fullComment}</p>
            <button className='bg-[#2A6484] text-[24px] text-white px-[42px] py-[25px] mt-[80px] rounded-xl'>売りたい物件を掲示板に載せる</button>
        </div>
    </div>
  )
}

export default FeedbackDetailPage;