import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div className="w-full h-[80px] py-5 bg-[#32769b] box-border sticky top-0 z-50">
            <div className="max-w-[1600px] text-center my-0 mx-auto">
                <div className='text-[44px] leading-[10px] float-left text-white font-medium ml-[100px]'><Link to='/dashboard'>ふどうさん<span className='text-[28px] ml-2 font-medium'>市場</span></Link></div>
                <div className='float-right mr-[10px]'>
                    <div className=' inline-block text-[18px] leading-[40px] text-white font-semibold px-3'><Link to='/faq'>ふどうさんは</Link></div>
                    <div className=' inline-block text-[17px] leading-[40px] text-white font-semibold px-3'><Link to='/post-real-estate'>掲示板に投稿</Link></div>
                    <div className=' inline-block text-[17px] leading-[40px] text-white font-semibold px-3'><Link to='/item-board'>掲示板を見る</Link></div>
                    <div className=' relative inline-block' id='dropdown-menu'>
                        <div className=' text-[18px] leading-[40px] text-white font-semibold px-3 cursor-pointer'>マイページ</div>
                        <div className=' hidden absolute top-[40px] min-w-[120px] z-10 bg-[#32769b]' id='dropdown-content'>
                            <div className=' text-[18px] font-semibold py-1 text-white'><Link to='/message-board'>メッセージ</Link></div>
                            <div className=' text-[17px] font-semibold py-1 text-white'><Link to='/my-item-page'>私の投稿</Link></div>
                            <div className=' text-[17px] font-semibold py-1 text-white'><Link to='/favourite'>お気に入り</Link></div>
                            <div className=' text-[17px] font-semibold py-1 text-white'><Link to='/query-general'>総合窓口</Link></div>
                        </div>
                    </div>
                    <div className=' inline-block text-[18px] leading-[40px] text-white font-semibold px-3'><Link to='/login'>ログイン</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Header;