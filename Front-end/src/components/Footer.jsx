import React from 'react';
import {Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = () => {
    const history = useHistory();
    const handleFeedbackCategoryClicked = (props) => {
        const searchParams = new URLSearchParams();
        searchParams.set('category', props);
        history.push(`/feedback-board?${searchParams.toString()}`)
    }
    const handleRealEstatePostClicked = (props) => {
        const label = props;
        const searchParams = new URLSearchParams();
        searchParams.set('label', label);
        history.push(`/post-realestate?${searchParams.toString()}`);
    }
    const handleRealEstateCagegoryClicked = (e) => {
        const searchParams = new URLSearchParams();
        searchParams.set('searchStandard', 'searchByCategory');
        searchParams.set('searchStandardContent', e.target.innerText);
        history.push(`/item-list?${searchParams.toString()}`);
    }
    const handleMyPostClicked = () => {
        history.push('/my-post');
    }
    const handleFavouriteClicked = () => {
        history.push('/favourite')
    }
    const handleMyMsgClicked = () => {
        history.push('/message-board')
    }
    const handleContactClicked = () => {
        history.push('/contact-general')
    }
    const handleLoginClicked = () => {
        history.push('/login')
    }
    return (
        <div className='flex flex-col relative w-full h-[340px] bg-[#2A6484] noto-regular'>
            <div className='flex flex-row justify-between items-start w-full h-[220px] pt-6 px-[330px] border-b  border-white'>
                <div className='flex flex-col items-start'>
                    <span className=' text-[#FFC804]'><span className=' text-[24px]'>ふどうさん</span><span className=' text-[18px]'>は</span></span>
                    <span className=' text-white text-[16px] pt-3 cursor-pointer' onClick={() => handleFeedbackCategoryClicked('sold')}>売りました体験談</span>
                    <span className=' text-white text-[16px] pt-1 cursor-pointer' onClick={() => handleFeedbackCategoryClicked('bought')}>こんな風に使ってます</span>
                </div>
                <div className='flex flex-col items-start'>
                    <span className=' text-[#FFC804] text-[20px]'>掲示板に投稿</span>
                    <span className=' text-white text-[16px] pt-3 cursor-pointer' onClick={() => handleRealEstatePostClicked('post-building')}>建物の投稿</span>
                    <span className=' text-white text-[16px] pt-1 cursor-pointer' onClick={() => handleRealEstatePostClicked('post-land')}>土地の投稿</span>
                    <span className=' text-white text-[16px] pt-1 cursor-pointer'><Link to='/post-agent' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>業者の投稿</Link></span>
                </div>
                <div className='flex flex-col items-start'>
                    <span className=' text-[#FFC804] text-[20px]'>掲示板を見る</span>
                    <div className='flex flex-row pt-3 cursor-pointer' onClick={(e) => handleRealEstateCagegoryClicked(e)}>
                        <div className='flex flex-col items-start'>
                            <span className=' text-white text-[16px] pt-1'>古民家</span>
                            <span className=' text-white text-[16px] pt-1'>一戸建て</span>
                            <span className=' text-white text-[16px] pt-1'>マンション</span>
                            <span className=' text-white text-[16px] pt-1'>店舗・倉庫</span>
                        </div>
                        <div className='flex flex-col items-start pl-8'>
                            <span className=' text-white text-[16px] pt-1'>住宅地</span>
                            <span className=' text-white text-[16px] pt-1'>原野</span>
                            <span className=' text-white text-[16px] pt-1'>林野</span>
                            <span className=' text-white text-[16px] pt-1'>農地</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start'>
                    <span className=' text-[#FFC804] text-[22px]'>マイページ</span>
                    <span className=' text-white text-[16px] pt-3 cursor-pointer' onClick={handleMyPostClicked}>私の投稿</span>
                    <span className=' text-white text-[16px] pt-1 cursor-pointer' onClick={handleFavouriteClicked}>お気に入り</span>
                    <span className=' text-white text-[16px] pt-1 cursor-pointer' onClick={handleMyMsgClicked}>メッセージ</span>
                    <span className=' text-white text-[16px] pt-1 cursor-pointer' onClick={handleContactClicked}>総合窓口</span>
                </div>
                <div className='text-[#FFC804] text-[20px] cursor-pointer' onClick={handleLoginClicked}>ログイン</div>
            </div>
            <div className='flex flex-row justify-between w-full pt-3 px-[330px]'>
                <span className=' text-white text-[16px]'><span className='text-[20px]'>ふどうさん</span>市場 株式会社</span>
                <span className=' text-white text-[16px]'>代表取締役 <span className='text-[#FFC804]'>馬場芳朗</span></span>
                <span className=' text-white text-[16px]'>東京都中央区銀座1丁目22番11号  銀座大竹ビジデンス2 F</span>
                <span className=' text-white text-[16px]'>TEL: 03-6685-8407</span>
            </div>
            <div className='text-white text-[16px] absolute right-5 bottom-2'>Fudosan Market Co.,Ltd.</div>
        </div>
    )
}

export default Footer;