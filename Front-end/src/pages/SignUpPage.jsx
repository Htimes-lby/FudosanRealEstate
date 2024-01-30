import { React, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const SignUpPage = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const firstGanaRef = useRef(null);
    const firstGanjiRef = useRef(null);
    const lastGanaRef = useRef(null);
    const lastGanjiRef = useRef(null);
    const history = useHistory();
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwords, setPasswords] = useState('');
    const [email, setEmail] = useState('');
    const [firstNameGana, setFirstNameGana] = useState('');
    const [lastNameGana, setLastNameGana] = useState('');
    const [firstNameGanji, setFirstNameGanji] = useState('');
    const [lastNameGanji, setLastNameGanji] = useState('');
    const [errorMsg, setErrorMsg] = useState('アカウント作成と同時に、当サイト');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {email, passwords, firstNameGanji, lastNameGanji, firstNameGana, lastNameGana};
            const res = await axios.post('/signup', payload);
            history.push('/input-code')

            emailRef.current.value = '';
            passwordRef.current.value = '';
            firstGanaRef.current.value = '';
            lastGanjiRef.current.value = '';
            firstGanjiRef.current.value = '';
            lastGanaRef.current.value = '';
        } catch (error) {
            if(error.response && error.response.status === 500) {
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg('An Error Occured');
            }
        }
    }
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const handleNavigateToLogIn = () => {
        history.push('/login')
    }

    return (
        <>
        <Toaster position="top-right" reverseOrder={false} />
            <div className= ' w-full h-[900px] bg-image-blur bg-cover'></div>
            <div className= ' absolute flex flex-col items-center top-[18%] left-[35%] w-[550px] bg-black/50 z-10 border-white border-2 rounded-lg'>
                <h1 className='text-[28px] text-white font-semibold pt-8'>サインアップ</h1>
                <form className='flex flex-col items-center flex-wrap w-[70%]' onSubmit={(e) => handleSubmit(e)}>
                    <div className=' flex flex-col w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-2 text-[20px]'>メール</label>
                        <input
                            className='h-[35px] rounded-md pl-2' 
                            type="text"
                            id="email"
                            ref={emailRef}
                            name="emailname"
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className=' flex flex-col relative w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-6 text-[20px]'>パスワード<br /><span className=' block text-[11px] leading-[2px] mt-3'>以下に新しくパスワードを記入してください。</span><span className='text-[11px] leading-[2px]'>(忘れないようにメモをとっておきましょう)</span></label>
                        <input
                            className='h-[35px] rounded-md pl-2'
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            name="password"
                            ref={passwordRef}
                            required={true}
                            onChange={(e) => setPasswords(e.target.value)}
                        />
                        <i className=' absolute bottom-1 right-3 cursor-pointer' onClick={togglePasswordVisibility}>{eye}</i>
                    </div>
                    <div className=' flex flex-col w-full mt-6 mb-10'>
                        <p className='font-normal text-[18px] text-white'>お名前</p>
                        <div className='flex flex-row justify-between items-center mt-3'>
                            <label htmlFor="" className='font-normal text-[16px] text-white ml-2'>(姓)</label>
                            <input
                                className='h-[35px] w-[35%] rounded-md pl-2' 
                                type="text"
                                id="lastnameganji"
                                name="lastnameganji"
                                ref={lastGanjiRef}
                                required={true}
                                onChange={(e) => setLastNameGanji(e.target.value)}
                            />
                            <label htmlFor="" className='font-normal text-[16px] text-white'>(名)</label>
                            <input
                                className='h-[35px] w-[35%] rounded-md pl-2' 
                                type="text"
                                id="firstnameganji"
                                name="firstnameganji"
                                ref={firstGanjiRef}
                                required={true}
                                onChange={(e) => setFirstNameGanji(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-row justify-between items-center mt-3'>
                            <label htmlFor="" className='font-normal text-[16px] text-white'>(せい)</label>
                            <input
                                className='h-[35px] w-[35%] rounded-md pl-2' 
                                type="text"
                                id="lastnamegana"
                                name="lastnamegana"
                                ref={lastGanaRef}
                                required={true}
                                onChange={(e) => setLastNameGana(e.target.value)}
                            />
                            <label htmlFor="" className='font-normal text-[16px] text-white'>(めい)</label>
                            <input
                                className='h-[35px] w-[35%] rounded-md pl-2' 
                                type="text"
                                id="firstnamegana"
                                name="firstnamegana"
                                ref={firstGanaRef}
                                required={true} 
                                onChange={(e) => setFirstNameGana(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* <p className='text-white mt-10 text-[14px]'>氏名は正確に（住民票など記載のもの）ご入力ください。</p>  */}
                    {
                        errorMsg !== '' && 
                        <p className='text-white'>{errorMsg}</p>
                    }
                    <button className='mt-4 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[22px]' type='submit'>アカウント作成 </button>
                    <button className='mt-3 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[19px] mb-12' onClick={handleNavigateToLogIn}>サインアップページに移動 </button>
                </form>
            
            </div>
        </>
    )
}

export default SignUpPage;