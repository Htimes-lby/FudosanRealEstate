import { React, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const SignUpPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const handleSignup = () => {

    }
    return (
        <>
            <div className= ' w-full h-[900px] bg-image-blur bg-cover'></div>
            <div className= ' absolute flex flex-col items-center top-[18%] left-[35%] w-[550px] h-[680px] bg-black/50 z-10 border-white border-2 rounded-lg'>
                <h1 className='text-[28px] text-white font-semibold pt-[24px]'>サインアップ</h1>
                <form className='flex flex-col items-center flex-wrap w-[70%]' onSubmit={handleSignup()} >
                    <div className=' flex flex-col w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-2 text-[20px]'>メール</label>
                        <input
                            className='h-[35px] rounded-md' 
                            type="text"
                            id="email"
                            name="emailname"
                        />
                    </div>
                    <div className=' flex flex-col relative w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-6 text-[20px]'>パスワード<br /><span className=' block text-[11px] leading-[2px] mt-3'>以下に新しくパスワードを記入してください。</span><span className='text-[11px] leading-[2px]'>(忘れないようにメモをとっておきましょう)</span></label>
                        <input
                            className='h-[35px] rounded-md'
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            name="password"
                        />
                        <i className=' absolute bottom-1 right-3 cursor-pointer' onClick={togglePasswordVisibility}>{eye}</i>
                    </div>
                    <div className=' flex flex-col w-full mt-6'>
                        <p className='font-normal text-[18px] text-white'>お名前</p>
                        <div className='flex flex-row justify-between items-center mt-3'>
                            <label htmlFor="" className='font-normal text-[16px] text-white ml-2'>(姓)</label>
                            <input
                                className='h-[35px] w-[35%] rounded-md' 
                                type="text"
                                id="lastnameganji"
                                name="lastnameganji"
                            />
                            <label htmlFor="" className='font-normal text-[16px] text-white'>(名)</label>
                            <input
                                className='h-[35px] w-[35%] rounded-md' 
                                type="text"
                                id="firstnameganji"
                                name="firstnameganji"
                            />
                        </div>
                        <div className='flex flex-row justify-between items-center mt-3'>
                            <label htmlFor="" className='font-normal text-[16px] text-white'>(せい)</label>
                            <input
                                className='h-[35px] w-[35%] rounded-md' 
                                type="text"
                                id="lastnamegana"
                                name="lastnamegana"
                            />
                            <label htmlFor="" className='font-normal text-[16px] text-white'>(めい)</label>
                            <input
                                className='h-[35px] w-[35%] rounded-md' 
                                type="text"
                                id="firstnamegana"
                                name="firstnamegana"
                            />
                        </div>
                    </div>
                    <p className='text-white mt-10 text-[14px]'>氏名は正確に（住民票など記載のもの）ご入力ください。</p> 
                    <button className='mt-10 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[22px]'>ログイン </button>
                    <button className='mt-3 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[19px]'>サインアップページに移動 </button>
                </form>
            </div>
        </>
    )
}

export default SignUpPage;