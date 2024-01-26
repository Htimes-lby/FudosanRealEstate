import  React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const eye = <FontAwesomeIcon icon={faEye} />;

const SignInPage = () => {
    const history = useHistory();
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const payload = {email, password}
            const res = await axios.get(process.env.REACT_APP_API_BASE_URL +"/signin", {
                params: { email: payload.email, password: payload.password },
                });
            console.log(res)
            if(res.data.message === 'Email is not exist!'){
                toast.error('Correct input mail!')
                }
                else{
                    if(res.data.message === 'Password in incorrect!'){
                        toast.error('Correct input password')
                    }
                    else if(res.data.message === 'Jwt Login Success.'){
                        toast.success('Signup successful!');
                        setTimeout(() => {
                            history.push('/', res.data)
                        }, 2000);
                    }
                }

            } catch (error) {
              // Handle errors
            console.error('Error sending form data:', error);
            }
    }


    const handleNavigateToRegister = () => {
        history.push('/register')
    }

    return (
        <>
        <Toaster position="top-right" reverseOrder={false} />
            <div className= 'w-full h-[900px] bg-image-blur bg-cover'></div>
            <div className= 'absolute flex flex-col items-center top-[20%] left-[35%] w-[550px] h-[640px] bg-black/50 z-10 border-white border-2 rounded-lg'>
                <h1 className='text-[28px] text-white font-semibold pt-[40px]'>ログイン</h1>
                <form className='flex flex-col items-center flex-wrap w-[70%]' onSubmit={(e)=>handleLogin(e)} >
                    <div className='flex flex-col w-full'>
                        <label htmlFor="email" className='text-white font-normal mb-1 mt-5 text-[20px]'>メール</label>
                        <input
                            className='h-[35px] rounded-md pl-2' 
                            type="text"
                            id="email"
                            name="emailname"
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='relative flex flex-col w-full'>
                        <label htmlFor="password" className='text-white font-normal mb-1 mt-7 text-[20px]'>パスワード<br /><span className='text-[14px] leading-[2px]'>登録済みのパスワードをご入力ください。</span><br /></label>
                        <input
                            className='h-[35px] rounded-md pl-2'
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            name="password"
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className='absolute bottom-1 right-3 cursor-pointer' onClick={togglePasswordVisibility}>{eye}</i>
                    </div>
                    <p className='text-white mt-10'>アカウント作成と同時に、当サイトの および個人情報保護方針プライバシーポリシーに同意したとみなされます。</p> 
                    <button className='mt-10 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[22px]' onSubmit={handleLogin}>ログイン </button>
                    <button className='mt-6 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[19px]' onClick={handleNavigateToRegister}>サインアップページに移動 </button>
                </form>
            </div>
        </>
    )
}

export default SignInPage;