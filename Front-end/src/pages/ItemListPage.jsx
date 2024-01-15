import {React, useState} from 'react';
import Payorder from "../components/Pagination"
import SearchBoard from "../components/SearchBoard"
import DashboardRealEstatePostBoard from './DashboardPage/DashboardRealEstatePostBoard';

const ItemListPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen((isOpen) => !isOpen);
      }
    // function opennav(){
        
    //     // document.getElementById("searchBoard").style.display="block"
    // }
    return (
        <div>
            <div className='flex justify-center pt-[59px]'>
                <p className='font-bold text-[36px]' >一戸建て</p>
            </div>

            <div className='flex justify-center items-end'>
                
                <Payorder />
                <i className="fa-solid fa-magnifying-glass text-[50px] pl-[42px]" onClick={toggle}></i>
            </div>
            
            <div className=' bg-white flex justify-end fixed z-[100] right-10 top-[15%]'>
                {isOpen && <SearchBoard />}
                
            </div>

            <div>
                <DashboardRealEstatePostBoard/>
            </div>

            <div className='flex justify-center items-end pb-[20px]'>
                
                <Payorder />
                <i className="fa-solid fa-magnifying-glass text-[50px] pl-[42px]" onClick={toggle}></i>
            </div>
            
            
        </div>
    )
}

export default ItemListPage;
