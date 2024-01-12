import { React, useState, useEffect } from 'react';





const DashboardEyeCatch = () => {

    const eyecatches = [
        // 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        // 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        // 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        // 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        // 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        require("../../assets/kawaguchiko-city.jpg"),
        require("../../assets/traditional-water-house-ine-cho_328191-7286-transformed 1.jpg"),
        require("../../assets/city-water 1.jpg"),
    ];

    // const images = [
    //      "../../assets/kawaguchiko-city.jpg",
    //      "../../assets/traditional-water-house-ine-cho_328191-7286-transformed 1.jpg",
    //      "../../assets/city-water 1.jpg",
    // ];
    
    // const eyecatches = images.map((element) => {
    //     return require(element);
    // });

    // console.log("eyecatches", eyecatches);
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = eyecatches.length;

    useEffect (() => {
        const timeoutId = setTimeout(() => {
            setCurrentIndex((currentIndex) => (currentIndex+1) % maxIndex);
            console.log("currentIndex", currentIndex)
            return () => {
                clearTimeout(timeoutId);
            };
        },2000);
    },[currentIndex, maxIndex]);

    return (
        <div className='w-full h-[900px]'>
            <img src={eyecatches[currentIndex]} alt="" className='w-full h-full bg-center bg-cover'/>
            {/* <div
                style={{ backgroundImage: `url(${eyecatches[currentIndex]})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div> */}
        </div>
    );
}

export default DashboardEyeCatch;