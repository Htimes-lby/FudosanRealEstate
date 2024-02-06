import {React, useState, useEffect} from 'react';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import SearchBoard from "../components/SearchBoard"
import DashboardRealEstatePostBoard from './DashboardPage/DashboardRealEstatePostBoard';
import Pagination from '../components/Pagination';
import RealEstateSmallCard from '../components/RealEstateSmallCard';
import Loading from '../components/Loading';

const ItemListPage = () => {

    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const filterLabel = searchParams.get('filterLabel');
    const filterContent = searchParams.get('filterContent');

    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(1);
    const [realEstates, setRealEstates] = useState(null);
    const [totalNumber, setTotalNumber] = useState();

    const [isSearchMode, setIsSearchMode] = useState(false);

    const [displayOrder, setDisplayOrder] = useState(-1);
    const [displayOrderDependency, setDisplayOrderDependency] = useState('createdAt');
    const [ceilBudget, setCeilBudget] = useState(100000000);
    const [floorBudget, setFloorBudget] = useState(-1);
    const [showRealEstateWithoutBudget, setShowRealEstateWithoutBudget] = useState(true);

    const test = () => {
        if(displayOrderDependency === 'price') {
            const testVariable = true;
        }
    }

    const fetchData = async () => {
        try {
            const firstNumber = (active - 1) * 16 + 1;
            const lastNumber = active * 16;
            const params = new URLSearchParams({
                firstNumber: firstNumber,
                lastNumber: lastNumber,
                filterLabel: filterLabel,
                filterContent: filterContent,
            }).toString();
            const res = await axios.get(`/getRealEstates?${params}`);
            setRealEstates(res.data.realEstates);
            setTotalNumber(res.data.totalDocumentNumber);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchDataInSearchMode = async () => {
        try {
            const firstNumber = (active -1) * 16 + 1;
            const lastNumber = active * 16;
            const params = new URLSearchParams({
                firstNumber: firstNumber,
                lastNumber: lastNumber,
                filterContent: filterContent,
                filterLabel: filterLabel,
                floorBudget: floorBudget,
                ceilBudget: ceilBudget,
                displayOrder: displayOrder,
                displayOrderDependency: displayOrderDependency,
                showRealEstateWithoutBudget: showRealEstateWithoutBudget,
            })
            const res = await axios.get(`/getRealEstatesWithSearchCondition?${params}`);
            setRealEstates(res.data.realEstates);
            setTotalNumber(res.data.totalDocumentNumber);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(isSearchMode === true) {
            fetchDataInSearchMode();
        } else {
            fetchData();
        }
    }, [active, isSearchMode, displayOrder, displayOrderDependency, showRealEstateWithoutBudget, floorBudget, ceilBudget])

    useEffect(() => {
        setActive(1);
    },[isSearchMode, displayOrder, displayOrderDependency, showRealEstateWithoutBudget, floorBudget, ceilBudget])

    const activeHandler = (clickedPage) => {
        setActive(parseInt(clickedPage));
    };
    const magnifierToggleHandler = () => {
        setIsOpen((isOpen) => !isOpen);
    }
    const handleRealEstateCardClicked = (props) => {
        const index = props;
        const realEstateId = realEstates[index]._id;
        const searchParams = new URLSearchParams();
        searchParams.set('realEstateId', realEstateId);
        history.push(`/item-detail?${searchParams.toString()}`);
    };

    if(realEstates === null) {
        return(
            <div>
                <Loading />
            </div>
        );
    }
    
    return (
        <div className='flex flex-col items-center pt-20'>
            <p className='noto-medium text-[36px]' >{filterContent}</p>
            {
                realEstates.length !== 0 &&
                <div className='flex justify-center items-center gap-10 mt-16'>            
                    <Pagination
                        active={active}
                        size={Math.ceil(totalNumber/16)}
                        step={2}
                        onClickHandler={activeHandler}
                    />
                    <i className="fa-solid fa-magnifying-glass text-[40px] cursor-pointer" onClick={magnifierToggleHandler}></i>
                </div>
            }
            
            <div className=' bg-white flex justify-end fixed z-[100] right-10 top-[20%]'>
                {
                    isOpen &&
                    <SearchBoard 
                        fetchDataInSearchMode = {fetchDataInSearchMode}
                        setIsSearchMode = {setIsSearchMode}
                        setCeilBudget = {setCeilBudget}
                        setFloorBudget = {setFloorBudget}
                        setShowRealEstateWithoutBudget = {setShowRealEstateWithoutBudget}
                        setDisplayOrder = {setDisplayOrder}
                        setDisplayOrderDependency = {setDisplayOrderDependency}
                        test = {test}
                    />
                }              
            </div>

            <div className='flex flex-col items-center w-full min-h-[600px]'>
                <div className=' grid gap-x-8 gap-y-12 grid-cols-4 mt-3 mb-5 mx-auto box-border max-w-[1100px]'>
                    {
                        realEstates.map((realEstate, index) => {
                            return(
                                <div key = {index}  onClick={() => handleRealEstateCardClicked(index)} className='cursor-pointer'>
                                    <RealEstateSmallCard  realEstate = {realEstate}/>
                                </div>
                            );
                        })
                    }
                </div>
                {
                    realEstates.length === 0 &&
                    <div className='pt-[100px] text-3xl noto-medium'>{filterContent}の不動産はありません。</div>
                }
            </div>

            {
                realEstates.length !== 0 &&
                <div className='flex justify-center items-center gap-10 pb-16'>
                    <Pagination
                        active={active}
                        size={Math.ceil(totalNumber/16)}
                        step={2}
                        onClickHandler={activeHandler}
                    />
                    <i className="fa-solid fa-magnifying-glass text-[40px] cursor-pointer" onClick={magnifierToggleHandler}></i>
                </div>
            }
        </div>
    )
}

export default ItemListPage;
