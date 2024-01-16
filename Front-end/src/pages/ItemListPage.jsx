import {React, useState} from 'react';
import SearchBoard from "../components/SearchBoard"
import DashboardRealEstatePostBoard from './DashboardPage/DashboardRealEstatePostBoard';
import Pagination from '../components/Pagination';

const ItemListPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(1);
  
    const activeHandler = (clickedActive) => {
      setActive(parseInt(clickedActive));
    };

    const magnifierToggleHandler = () => {
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
                <Pagination
                    active={active}
                    size={99}
                    step={2}
                    onClickHandler={activeHandler}
                />
                <i className="fa-solid fa-magnifying-glass text-[50px] pl-[42px] cursor-pointer" onClick={magnifierToggleHandler}></i>
            </div>
            
            <div className=' bg-white flex justify-end fixed z-[100] right-10 top-[15%]'>
                {isOpen && <SearchBoard />}              
            </div>

            <div>
                <DashboardRealEstatePostBoard/>
            </div>

            <div className='flex justify-center items-end pb-[20px]'>
                <Pagination
                    active={active}
                    size={99}
                    step={2}
                    onClickHandler={activeHandler}
                />
                <i className="fa-solid fa-magnifying-glass text-[50px] pl-[42px] cursor-pointer" onClick={magnifierToggleHandler}></i>
            </div>
            
            
        </div>
    )
}

export default ItemListPage;
