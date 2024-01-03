import React from 'react';
const SignInPage = () => {

    const handleLogin = () =>{

    }

    return (
        <>
            <div className= ' w-full h-[900px] bg-image-blur bg-cover'></div>
            <div className= ' absolute flex flex-col items-center top-[18%] left-[35%] w-[550px] h-[680px] bg-black/50 z-10 border-white border-2 rounded-lg'>
                <h1 className='text-[28px] text-white font-semibold pt-[40px]'>ログイン</h1>
                <form className='flex flex-col items-center flex-wrap w-[70%]' onSubmit={handleLogin()} >
                    <div className=' flex flex-col w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-5 text-[20px]'>メール</label>
                        <input
                            className='h-[35px]' 
                            type="text"
                            id="email   "
                            name="emailname"
                        />
                    </div>
                    <div className=' flex flex-col w-full'>
                        <label htmlFor="" className='text-white font-normal mb-1 mt-7 text-[20px]'>パスワード<br /><span className='text-[14px] leading-[2px]'>登録済みのパスワードをご入力ください。</span><br /></label>
                        <input
                            className='h-[35px]'
                            type="text"
                            id="password"
                            name="password"
                        />
                    </div>
                    <p className='text-white mt-10'>アカウント作成と同時に、当サイトの <a href="" className='text-[14px] cursor-pointer underline underline-offset-4 decoration-red-500'>個人情報保護方針</a>および
                    <a href="" className='text-[14px] underline underline-offset-4 decoration-red-500'>プライバシーポリシー</a>に同意したとみなされます。</p> 
                    <button className='mt-10 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[22px]'>ログイン </button>
                    <button className='mt-10 w-full h-[50px] rounded-md bg-[#2A6484] text-white font-semibold border-white/50 border-2 text-[19px]'>サインアップページに移動 </button>
                </form>
            </div>
        </>
    )
}

export default SignInPage;