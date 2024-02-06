import {React, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Pagination from '../components/Pagination';
import RealEstateSmallCard from '../components/RealEstateSmallCard';
import axios from 'axios';
import Loading from '../components/Loading';


const AdminApproveRealEstateList = () => {

    const history = useHistory();
    const [active, setActive] = useState(1);
    const [totalNumber, setTotalNumber] = useState();
    const [unapprovedDataOnly, setUnapprovedDataOnly] = useState(false);
    const [province, setProvince] = useState('Not Selected');
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
                    lastNumber: lastNumber,
                    province: province,
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
        const index = props;
        const realEstateId = realEstates[index]._id;
        const searchParams = new URLSearchParams();
        searchParams.set('realEstateId', realEstateId);
        history.push(`/admin-approve-realestate-detail?${searchParams.toString()}`);
    };

    const handleToggleChange = (event) => {
        setUnapprovedDataOnly(event.target.checked);
    };
    
    if(realEstates === null) {
        return(
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center pt-20'>
            <div className=' flex gap-[50px] justify-center items-center pt-[24px] '>            
                <div className=" flex items-center justify-center ">
                        <p className="text-[20px] ">都道府県</p>
                        <select
                            className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px] ml-[95px]"
                            onChange={event => setProvince(event.target.value)}
                            defaultValue={province}>                       
                            <option className="text-[16px]"  value="Not Selected" >&nbsp;</option>
                            <option className="text-[16px]"  value="北海道" >&nbsp;北海道</option>
                            <option className="text-[16px]"  value="青森県" >&nbsp;青森県</option>
                            <option className="text-[16px]"  value="岩手県" >&nbsp;岩手県</option>
                            <option className="text-[16px]"  value="秋田県" >&nbsp;秋田県</option>                
                            <option className="text-[16px]"  value="宮城県" >&nbsp;宮城県</option>
                            <option className="text-[16px]"  value="山形県" >&nbsp;山形県</option>
                            <option className="text-[16px]"  value="福島県" >&nbsp;福島県</option>
                            <option className="text-[16px]"  value="茨城県" >&nbsp;茨城県</option>
                            <option className="text-[16px]"  value="栃木県" >&nbsp;栃木県</option>
                            <option className="text-[16px]"  value="群馬県" >&nbsp;群馬県</option>
                            <option className="text-[16px]"  value="埼玉県" >&nbsp;埼玉県</option>
                            <option className="text-[16px]"  value="千葉県" >&nbsp;千葉県</option>
                            <option className="text-[16px]"  value="東京都" >&nbsp;東京都</option>
                            <option className="text-[16px]"  value="神奈川県" >&nbsp;神奈川県</option>
                            <option className="text-[16px]"  value="新潟県" >&nbsp;新潟県</option>
                            <option className="text-[16px]"  value="長野県" >&nbsp;長野県</option>
                            <option className="text-[16px]"  value="山梨県" >&nbsp;山梨県</option>
                            <option className="text-[16px]"  value="富山県" >&nbsp;富山県</option>
                            <option className="text-[16px]"  value="石川県" >&nbsp;石川県</option>
                            <option className="text-[16px]"  value="静岡県" >&nbsp;静岡県</option>
                            <option className="text-[16px]"  value="愛知県" >&nbsp;愛知県</option>
                            <option className="text-[16px]"  value="岐阜県" >&nbsp;岐阜県</option>
                            <option className="text-[16px]"  value="三重県" >&nbsp;三重県</option>
                            <option className="text-[16px]"  value="滋賀県" >&nbsp;滋賀県</option>
                            <option className="text-[16px]"  value="京都府" >&nbsp;京都府</option>
                            <option className="text-[16px]"  value="大阪府" >&nbsp;大阪府</option>
                            <option className="text-[16px]"  value="兵庫県" >&nbsp;兵庫県</option>
                            <option className="text-[16px]"  value="奈良県" >&nbsp;奈良県</option>
                            <option className="text-[16px]"  value="和歌山県" >&nbsp;和歌山県</option>
                            <option className="text-[16px]"  value="岡山県" >&nbsp;岡山県</option>
                            <option className="text-[16px]"  value="広島県" >&nbsp;広島県</option>
                            <option className="text-[16px]"  value="鳥取県" >&nbsp;鳥取県</option>
                            <option className="text-[16px]"  value="島根県" >&nbsp;島根県</option>
                            <option className="text-[16px]"  value="山口県" >&nbsp;山口県</option>
                            <option className="text-[16px]"  value="香川県" >&nbsp;香川県</option>
                            <option className="text-[16px]"  value="徳島県" >&nbsp;徳島県</option>
                            <option className="text-[16px]"  value="愛媛県" >&nbsp;愛媛県</option>
                            <option className="text-[16px]"  value="高知県" >&nbsp;高知県</option>
                            <option className="text-[16px]"  value="福岡県" >&nbsp;福岡県</option>
                            <option className="text-[16px]"  value="佐賀県" >&nbsp;佐賀県</option>
                            <option className="text-[16px]"  value="長崎県" >&nbsp;長崎県</option>
                            <option className="text-[16px]"  value="大分県" >&nbsp;大分県</option>
                            <option className="text-[16px]"  value="熊本県" >&nbsp;熊本県</option>
                            <option className="text-[16px]"  value="宮崎県" >&nbsp;宮崎県</option>
                            <option className="text-[16px]"  value="鹿児島県" >&nbsp;鹿児島県</option>
                            <option className="text-[16px]"  value="沖縄県" >&nbsp;沖縄県</option>
                            <option className="text-[16px]"  value="豪州" >&nbsp;豪州</option>
                            <option className="text-[16px]"  value="北米" >&nbsp;北米</option>
                            <option className="text-[16px]"  value="欧州" >&nbsp;欧州</option>
                            <option className="text-[16px]"  value="アジア" >&nbsp;アジア</option>

                        </select>
                </div>
                <div className='flex justify-center items-center'>
  
                <label className="flex items-center relative w-max cursor-pointer select-none m-0">
                    <span className="text-lg text-[20px] mr-3">全不動産表示</span>
                    <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-16 h-8 rounded-full focus:outline-none  bg-[#306382]" onChange={handleToggleChange} />
                    <span className="w-8 h-8 right-8 absolute rounded-full transform transition-transform bg-gray-200" />
                </label>
                <span className="text-lg text-[20px] ml-[15px]">掲載する不動産の表示</span>
                </div>
            </div>
            {
                realEstates.length !== 0 &&
                <div className='flex justify-center items-center gap-10 mt-16'>            
                <Pagination
                    active={active}
                    size={Math.ceil(totalNumber/16)}
                    step={2}
                    onClickHandler={activeHandler}
                />
            </div>
            }
            <div className='flex flex-col items-center w-full min-h-[500px]'>
                {
                    realEstates.length === 0 &&
                    <div className='pt-[200px] noto-medium text-3xl text-center'>ここに掲載された不動産はありません。</div>
                }
                <div className=' grid gap-x-8 gap-y-12 grid-cols-4 mt-3 mb-5 mx-auto box-border max-w-[1100px]'>
                    {
                        realEstates.map((realEstate, index) => {
                            return(
                                <div key = {index} onClick={() => handleRealEstateCardClicked(index)} className='cursor-pointer'>
                                    <RealEstateSmallCard  realEstate = {realEstate}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className='flex justify-center items-center gap-10 pb-16'>
                {
                    realEstates.length !== 0 &&
                    <Pagination
                    active={active}
                    size={Math.ceil(totalNumber/16)}
                    step={2}
                    onClickHandler={activeHandler}
                />
                }      
            </div>
        </div>
    )
}

export default AdminApproveRealEstateList;
