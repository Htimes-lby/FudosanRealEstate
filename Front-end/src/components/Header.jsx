import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div className="w-full h-[80px] py-5 px-10 bg-[#0D4868] box-border sticky top-0 z-50">
            <div className="max-w-[1600px] text-center my-0 mx-auto">
                <div className='text-[44px] leading-[40px] float-left text-white font-medium ml-[200px]'><Link to='/dashboard'>ふどうさん<span className='text-[28px] ml-2 font-medium'>市場</span></Link></div>
                <div className='float-right mr-[100px]'>
                    <div className=' inline-block text-[18px] leading-[80px] text-white font-semibold px-5'><Link to='/faqpage'>ふどうさんは</Link></div>
                    <div className=' inline-block text-[17px] leading-[80px] text-white font-semibold px-5'><Link to='/postrepage'>掲示板に投稿</Link></div>
                    <div className=' inline-block text-[17px] leading-[80px] text-white font-semibold px-5'><Link to='/itemboardpage'>掲示板を見る</Link></div>
                    <div className=' relative inline-block' id='dropdown-menu'>
                        <div className=' text-[18px] leading-[80px] text-white font-semibold px-5 cursor-pointer'>マイページ</div>
                        <div className=' hidden absolute top-[60px] min-w-[150px] z-10 bg-[#0D4868]' id='dropdown-content'>
                            <div className=' text-[18px] font-semibold py-1 text-white'><Link to='/messageboardpage'>メッセージ</Link></div>
                            <div className=' text-[17px] font-semibold py-1 text-white'><Link to='/itemmypage'>私の投稿</Link></div>
                            <div className=' text-[17px] font-semibold py-1 text-white'><Link to='/favouritepage'>お気に入り</Link></div>
                            <div className=' text-[17px] font-semibold py-1 text-white'><Link to='/querygeneralpage'>総合窓口</Link></div>
                        </div>
                    </div>
                    <div className=' inline-block text-[18px] leading-[80px] text-white font-semibold px-5'><Link to='/signinpage'>ログイン</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Header;