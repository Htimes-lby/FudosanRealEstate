import { React, useState, useEffect } from 'react';
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
const DashboardEyeCatch = () => {
    
    const maxLength = eyecatches.length;
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => setIndex((prevIndex) => (prevIndex + 1) % maxLength), 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [index]);


    return (
        <div className="overflow-hidden w-full h-[900px]">
          <div
            className="whitespace-nowrap transition ease duration-500"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {eyecatches.map((eyecatch, index) => (
              <div
                className=" inline-block w-full h-[900px]"
                key={index}
              ><img src={eyecatch} alt="" className=' w-full h-full bg-center bg-cover' /></div>
            ))}
          </div>

        </div>
      );
}
export default DashboardEyeCatch;
