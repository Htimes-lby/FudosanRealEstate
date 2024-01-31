import {React, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Pagination from '../components/Pagination';
import RealEstateSmallCard from '../components/RealEstateSmallCard';
import axios from 'axios';


const AdminApproveRealEstateList = () => {

    const history = useHistory();
    const [active, setActive] = useState(1);
    const [totalNumber, setTotalNumber] = useState();
    const [unapprovedDataOnly, setUnapprovedDataOnly] = useState(false);
    const [province, setProvince] = useState('No Province');
    const [realEstates, setRealEstates] = useState(null);

    const activeHandler = (clickedPage) => {
        setActive(parseInt(clickedPage));
    };
    const fetchData = async () => {
        const firstNumber = (active - 1) * 16 + 1;
        const lastNumber = active * 16;
        if(unapprovedDataOnly === true) {
            try {
                const params = new URLSearchParams({
                    firstNumber: firstNumber,
                    lastNumber: lastNumber
                }).toString();
                const res = await axios.get(`/getUnapprovedRealEstatesByAdmin?${params}`);
                setRealEstates(res.data.realEstates);
                setTotalNumber(res.data.totalDocumentNumber);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const params = new URLSearchParams({
                    firstNumber: firstNumber,
                    lastNumber: lastNumber,
                    province: province,
                }).toString();
                const res = await axios.get(`/getRealEstatesByAdmin?${params}`);
                setRealEstates(res.data.realEstates);
                setTotalNumber(res.data.totalDocumentNumber);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        fetchData();
    },[active,unapprovedDataOnly, province])

    useEffect(() => {
        setActive(1);
    },[unapprovedDataOnly, province]);

    const handleRealEstateCardClicked = (props) => {
        const searchParams = new URLSearchParams();
        searchParams.set('index', props);
        history.push(`/admin-approve-realestate-detail?${searchParams.toString()}`);
    };
    
    if(realEstates === null) {
        return(
            <div>loading................</div>
        )
    }

    return (
        <div className='flex flex-col items-center pt-20'>
            <div className='flex justify-center items-center gap-10 mt-16'>            
                <Pagination
                    active={active}
                    size={Math.ceil(totalNumber/16)}
                    step={2}
                    onClickHandler={activeHandler}
                />
            </div>
            
            <div className='flex flex-col items-center w-full'>
                <div className=' grid gap-x-8 gap-y-12 grid-cols-4 mt-3 mb-5 mx-auto box-border max-w-[1100px]'>
                    {
                        realEstates.map((realEstate, index) => {
                            return(
                                <div  onClick={() => handleRealEstateCardClicked(index)} className='cursor-pointer'>
                                    <RealEstateSmallCard key = {index} realEstate = {realEstate}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className='flex justify-center items-center gap-10 pb-16'>
                <Pagination
                    active={active}
                    size={Math.ceil(totalNumber/16)}
                    step={2}
                    onClickHandler={activeHandler}
                />
            </div>
        </div>
    )
}

export default AdminApproveRealEstateList;
