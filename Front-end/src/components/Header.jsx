import React, { useState, useRef, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const myPageRef = useRef(null);
    const postPageRef = useRef(null);
    const adminRef = useRef(null);
    const [myPageActive, setMyPageActive] = useState(false);
    const [postActive, setPostActive] = useState(false);
    const [adminPageActive, setAdminPageActive] = useState(false);
    const handleToggleMyPage = () => {
        setMyPageActive((prevState) => !prevState);
    };
    const handleTogglePost = () => {
        setPostActive((prevState) => !prevState);
    };
    const handleToggleAdminPage = () => {
        setAdminPageActive((prevState) => !prevState);
    };
    const handleDocumentClick = (event) => {
        if(myPageRef.current && !myPageRef.current.contains(event.target)){setMyPageActive(false)}
        if(postPageRef.current && !postPageRef.current.contains(event.target)){setPostActive(false)}
        if(adminRef.current && !adminRef.current.contains(event.target)){setAdminPageActive(false)}
    };
    const handleRealEstatePostClicked = (props) => {
        const postRealEstateFlag = props;
        
        if(postRealEstateFlag === 'post-building') {
            history.push('/post-building');
        }
        if(postRealEstateFlag === 'post-land') {history.push('/post-land')}
        if(postRealEstateFlag === 'post-agent') {history.push('/post-agent')}
    }
    useEffect(() => {
        setMyPageActive(false);
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        }
    }, [])
    return (
        <div className="w-full h-[60px] py-5 bg-[#32769b] box-border sticky top-0 z-[10000] noto-medium">
            <div className="max-w-[1600px] text-center my-0 mx-auto">
                {/* <div className='text-[44px] leading-[10px] float-left text-white font-medium ml-[100px]'><Link to='/dashboard' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>ふどうさん<span className='text-[28px] ml-2 font-medium'>市場</span></Link></div> */}
                <div className='float-right mr-[10px]'>
                    <div className=' inline-block text-[18px] leading-[40px] text-white px-3'><Link to='/faq' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>ふどうさんは</Link></div>
                    <div className='relative inline-block' ref={postPageRef} onClick={handleTogglePost}>
                        <div className=' inline-block text-[17px] leading-[40px] text-white px-3 cursor-pointer'>掲示板に投稿</div>
                        <div className= {`absolute top-[32px] left-[-40px] min-w-[200px] px-auto pt-3 bg-[#32769b] transition-all duration-300 ${postActive ? 'inline-block' : 'hidden'}`}>
                            <div className=' text-[18px] py-3 text-white border-y border-y-white/50 no-underline transition-all duration-75 hover:text-white/40 cursor-pointer' onClick={() => handleRealEstatePostClicked('post-building')}>PostBuilding</div>
                            <div className=' text-[17px] py-3 text-white border-b border-b-white/50 no-underline transition-all duration-75 hover:text-white/40 cursor-pointer' onClick={() => handleRealEstatePostClicked('post-land')}>PostLand</div>
                            <div className=' text-[17px] py-3 text-white border-b border-b-white/50'><Link to='/favourite' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>PostAgent</Link></div>
                        </div>
                    </div>

                    <div className=' inline-block text-[17px] leading-[40px] text-white px-3'><Link to='/item-board' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>掲示板を見る</Link></div>
                    <div className=' relative inline-block' ref={myPageRef} onClick={handleToggleMyPage}>
                        <div className=' text-[18px] leading-[40px] text-white px-3 cursor-pointer'>マイページ</div>
                        <div className= {`absolute top-[32px] left-[-40px] min-w-[200px] px-auto pt-3 bg-[#32769b] transition-all duration-300 ${myPageActive ? 'inline-block' : 'hidden'}`}>
                            <div className=' text-[18px] py-3 text-white border-y border-y-white/50'><Link to='/message-board' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>メッセージ</Link></div>
                            <div className=' text-[17px] py-3 text-white border-b border-b-white/50'><Link to='/my-post' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>私の投稿</Link></div>
                            <div className=' text-[17px] py-3 text-white border-b border-b-white/50'><Link to='/favourite' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>お気に入り</Link></div>
                            <div className=' text-[17px] py-3 text-white'><Link to='/contact-general' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>総合窓口</Link></div>
                        </div>
                    </div>
                    <div className=' inline-block text-[18px] leading-[40px] text-white px-3'><Link to='/login' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>ログイン</Link></div>
                    <div className=' relative inline-block' ref={adminRef} onClick={handleToggleAdminPage}>
                        <div className=' text-[18px] leading-[40px] text-white px-3 cursor-pointer'>管理者</div>
                        <div className= {`absolute top-[32px] left-[-40px] min-w-[200px] px-auto pt-3 bg-[#32769b] transition-all duration-300 ${adminPageActive ? 'inline-block' : 'hidden'}`}>
                            <div className=' text-[18px] py-3 text-white border-y border-y-white/50'><Link to='/admin-view-agent' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>エージェントを投稿</Link></div>
                            <div className=' text-[17px] py-3 text-white border-b border-b-white/50'><Link to='/admin-approve-realestate-list' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>不動産を投稿</Link></div>
                            {/* <div className=' text-[17px] py-3 text-white border-b border-b-white/50'><Link to='/favourite' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>お気に入り</Link></div>
                            <div className=' text-[17px] py-3 text-white'><Link to='/contact-general' className = 'text-current no-underline transition-all duration-75 hover:text-white/40'>総合窓口</Link></div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;