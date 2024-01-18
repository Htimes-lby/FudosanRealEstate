import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    const [myPageActive, setMyPageActive] = useState(false);
    const handleToggleMyPage = () => {
        setMyPageActive((prevState) => !prevState);
        console.log("+++++++++++++++++++++",myPageActive)
    }
    return (
        <div className="w-full h-[80px] py-5 bg-[#32769b] box-border sticky top-0 z-50">
            <div className="max-w-[1600px] text-center my-0 mx-auto">
                <div className='text-[44px] leading-[10px] float-left text-white font-medium ml-[100px]'><Link to='/dashboard' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>ふどうさん<span className='text-[28px] ml-2 font-medium'>市場</span></Link></div>
                
                <div className='float-right mr-[10px]'>
                    <div className=' inline-block text-[18px] leading-[40px] text-white font-semibold px-3'><Link to='/faq' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>ふどうさんは</Link></div>
                    <div className=' inline-block text-[17px] leading-[40px] text-white font-semibold px-3'><Link to='/post-real-estate' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>掲示板に投稿</Link></div>
                    <div className=' inline-block text-[17px] leading-[40px] text-white font-semibold px-3'><Link to='/item-board' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>掲示板を見る</Link></div>
                    <div className=' relative inline-block'>
                        <div className=' text-[18px] leading-[40px] text-white font-semibold px-3 cursor-pointer' onClick={handleToggleMyPage}>マイページ</div>
                        <div className= {`absolute top-[32px] left-[-40px] min-w-[200px] px-auto pt-3 bg-[#32769b] transition-all duration-300 ${myPageActive ? 'inline-block opacity-100' : 'hidden opacity-0'}`}>
                            <div className=' text-[18px] font-semibold py-3 text-white border-y border-y-white/50'><Link to='/message-board' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>メッセージ</Link></div>
                            <div className=' text-[17px] font-semibold py-3 text-white border-b border-b-white/50'><Link to='/my-post' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>私の投稿</Link></div>
                            <div className=' text-[17px] font-semibold py-3 text-white border-b border-b-white/50'><Link to='/favourite' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>お気に入り</Link></div>
                            <div className=' text-[17px] font-semibold py-3 text-white'><Link to='/contact-general' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>総合窓口</Link></div>
                        </div>
                    </div>
                    <div className=' inline-block text-[18px] leading-[40px] text-white font-semibold px-3'><Link to='/login' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>ログイン</Link></div>
                </div>

            </div>
        </div>
    )
}

export default Header;