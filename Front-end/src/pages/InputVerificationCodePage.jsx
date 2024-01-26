import { React, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';



const InputVerificationCodePage = () => {
    const emailRef = useRef(null);
    const history = useHistory();

    const [emailVarificationCode,setEmailVarificationCode] =useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {emailVarificationCode}
            console.log(payload);
            const res = await axios.post(process.env.REACT_APP_API_BASE_URL + '/inputCode', payload)
            console.log(res.data.message)

                if(res.data.message === 'invalid verification code'){
                toast.error('Correct input code!')
                }
                else{
                    toast.success('Signup successful!');
                    setTimeout(() => {
                        history.push('/login')
                    }, 2000);
                }
            emailRef.current.value = '';
            
            } catch (error) {
              // Handle errors
            console.error('Error sending form data:', error);
            }
    }

    return (
        <>
        <Toaster position="top-right" reverseOrder={false} />
            <div className= ' w-full h-[900px] bg-image-blur bg-cover'></div>
            
            <div className= ' absolute flex flex-col items-center top-[30%] left-[35%] w-[550px] h-[400px] bg-black/50 z-10 border-white border-2 rounded-lg'>
                <h1 className='text-[28px] text-white font-semibold pt-[45px]'>サインアップ</h1>
                <form className='flex flex-col items-center flex-wrap w-[70%]' onSubmit={(e) => handleSubmit(e)}>
                    <div className=' flex flex-col w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-2 text-[20px]'>メール認証コード</label>
                        <input
                            className='h-[35px] rounded-md pl-2' 
                            type="text"
                            id="email"
                            ref={emailRef}
                            name="emailname"
                            required={true}
                            onChange={(e) => setEmailVarificationCode(e.target.value)}
                        />
                    </div>
                    <p className='text-white mt-10 text-[14px]'>氏名は正確に（住民票など記載のもの）ご入力ください。</p> 
                    <button className='mt-10 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[22px]' type='submit'>アカウント作成 </button>
                    
                </form>
               
            </div>
        </>
    )
}

export default InputVerificationCodePage;