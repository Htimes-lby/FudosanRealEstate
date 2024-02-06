import React from 'react';
import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const FavouriteSetLoginModal = (props) => {

    const modalRef = useRef(null);
    const history = useHistory();
    const setShowModal = props.setShowModal;

 
    const handleNavigateToLogIn = () => {
        history.push('/login')
    }
    const handleDocumentClick = (event) => {
        if(modalRef.current && !modalRef.current.contains(event.target)){
            setShowModal(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        }
    }, [])

    return(
        <>
        <div ref={modalRef} className='fixed bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/3 flex flex-col items-center w-[450px] pt-14 bg-white rounded-xl noto-regular z-50'>
            <div className='flex justify-center pt-3 px-4 gap-7'>
                <span className='text-lg noto-medium'>まずサインアップする必要があります。</span>
            
            </div>
            <div className='flex w-[250px]  h-[50px] justify-center items-center bg-[#2A6484] text-white text-lg noto-medium rounded-xl cursor-pointer mt-8 mb-[40px]' onClick={handleNavigateToLogIn} >ログインページに移動</div>
        </div>
        <div className='opacity-75 bg-black fixed inset-0 z-40'></div>
        </>
    )
}

export default FavouriteSetLoginModal;