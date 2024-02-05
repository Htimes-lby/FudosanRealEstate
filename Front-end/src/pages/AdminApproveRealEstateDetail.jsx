import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect } from 'react'
import axios from 'axios'

import Carousel from '../components/Carousel'
import GoogleMapComponent from '../components/GoogleMapComponent'
import BasicTableBuilding from '../components/BasicTableBuilding'
import BasicTableLand from '../components/BasicTableLand'
import CategorySetModal from '../components/CategorySetModal'
import Loading  from "../components/Loading"


const approveText = '掲示板に投稿する';
const unapproveText = '掲示板から削除する';
const AdminApproveRealEstateDetail = () => {
    
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const realEstateId = searchParams.get('realEstateId');

    const [realEstate, setRealEstate] = useState(null);
    const [approveBtnContent, setApproveBtnContent] = useState('');
    const [category, setCategory] = useState('')
    const [showCategorySetModal, setShowCategorySetModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = new URLSearchParams ({
                    realEstateId: realEstateId,
                }).toString();
                const res = await axios.get(`/getRealEstateById?${params}`);
                setRealEstate(res.data.realEstate);
                if(res.data.realEstate.approved === true) {
                    setApproveBtnContent(unapproveText)
                } else {
                    setApproveBtnContent(approveText)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])

    const handleApproveToggleBtnClicked = async () => {
        if(realEstate.approved === true) {
            try {
                const res = await axios.post('/disapproveRealEstate', {realEstateId});
                setRealEstate(res.data.updatedRealEstate);
                setApproveBtnContent(approveText)
            } catch (error) {
                console.log(error);
            }
        }
        if(realEstate.approved === false) {
            //console.log('I am here in handleApproveToggleBtnClickedApprovedFalse', showCategorySetModal);
            setShowCategorySetModal(true);
        }
    }

    const makeApproveRequest = async () => {
        try {
            const payload = {realEstateId, category}
            const res = await axios.post('/approveRealEstate', payload);
            //console.log('approvedrealEstate---------------', res)
            setRealEstate(res.data.updatedRealEstate);
            setShowCategorySetModal(false);
            setApproveBtnContent(unapproveText)
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleContactPosterButtonClicked = () => {
    }

    if(realEstate === null){
        return(
            <div>
                <Loading />
            </div>
        )
    }
  return (
    <div className=' flex flex-col items-center pb-[120px] pt-[92px] w-full'>
        <p className='text-[32px] text-center'>{realEstate.address.province}{realEstate.address.city}</p>

        <div className='mt-[28px] w-full'>
            <Carousel images = {realEstate.images}/>
        </div>

        <div className='w-[1300px] mx-auto'>
            <div className='flex items-center w-full justify-between pt-[90px] pb-[84px]'>
                <div>
                    <GoogleMapComponent />
                </div>
                {
                    realEstate.label === 'building' && <BasicTableBuilding tableData = {realEstate.basicInfoBuilding} fontSize = {"text-[24px]"} width = {"w-[500px]"}  />
                }
                {
                    realEstate.label === 'land' && <BasicTableLand tableData = {realEstate.basicInfoLand} fontSize = {"text-[24px]"} width = {"w-[500px]"}  />
                }             
            </div>
            <p className='w-[90%] mx-auto noto-medium text-xl'>{realEstate.briefDescription}</p>
            <div className='border-2 border-[#2A6484]/40 text-base noto-medium mt-10 py-3 px-2'>{realEstate.fullDescription}</div>

            <div className='flex justify-center gap-[50px] w-full mt-20'>
                <div className='flex w-[380px] h-[80px] justify-center items-center bg-[#2A6484] text-white text-[24px] noto-medium rounded-xl cursor-pointer' onClick={handleContactPosterButtonClicked}>投稿者への連絡</div>
                <div className='flex w-[380px] h-[80px] justify-center items-center text-[#2A6484] bg-white text-[24px] noto-medium rounded-xl cursor-pointer border-[2px] border-[#2A6484]' onClick={handleApproveToggleBtnClicked}>{approveBtnContent}</div>
            </div>
        </div>
        {
            showCategorySetModal && 
            <CategorySetModal setCategory = {setCategory} makeApproveRequest = {makeApproveRequest} setShowCategorySetModal = {setShowCategorySetModal}/>
        }
    </div>
  )
}

export default AdminApproveRealEstateDetail;