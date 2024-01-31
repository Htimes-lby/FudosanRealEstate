import React, {useState} from 'react';
import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const CategorySetModal = (props) => {

    const modalRef = useRef(null);
    const history = useHistory();
    const [category, setCategory] = useState('');

    const handleToggleShowModal = props.handleToggleShowModal;
    const approved = props.approved;
    const handleApproveToggle = props.handleApproveToggle;
    const approveToggleButtonContent = approved ? '掲示板に投稿する' : '掲示板に投稿する';

    // const handleContactPosterButtonClicked = (props) => {
    //     const agentId = props;
    //     const searchParams = new URLSearchParams();
    //     searchParams.set('agentId', agentId);
    //     history.push(`/admin-contact-agent?${searchParams.toString()}`)
    // }

    const handleDocumentClick = (event) => {
        if(modalRef.current && !modalRef.current.contains(event.target)){handleToggleShowModal(false)}
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        }
    }, [])

    return(
        <>
        <div ref={modalRef} className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/3 flex flex-col items-center w-[450px] pt-16 bg-white rounded-xl noto-regular z-50'>
            <span className='text-2xl'>カテゴリーを選択してください。</span>
            <div className='flex justify-center pt-8 gap-7'>
                <div className=" flex items-center justify-center">
                        
                        <select
                            className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[272px]"
                            onChange={event => setCategory(event.target.value)}
                            defaultValue={category}>                       
                            <option className="text-[16px]"  value="" >&nbsp;</option>
                            <option className="text-[16px]"  value="古民家" >&nbsp;古民家</option>
                            <option className="text-[16px]"  value="マンション・ビル" >&nbsp;マンション・ビル</option>
                            <option className="text-[16px]"  value="一戸建て" >&nbsp;一戸建て</option>
                            <option className="text-[16px]"  value="店舗・倉庫・投資用物件" >&nbsp;店舗・倉庫・投資用物件</option>                
                            <option className="text-[16px]"  value="原野" >&nbsp;原野</option>
                            <option className="text-[16px]"  value="林野" >&nbsp;林野</option>
                            <option className="text-[16px]"  value="農地" >&nbsp;農地</option>
                            <option className="text-[16px]"  value="住宅地" >&nbsp;住宅地</option>
                            

                        </select>
                </div>
            </div>
            
            
            <div className='flex w-[250px]  h-[40px] justify-center items-center bg-[#2A6484] text-white text-lg noto-medium rounded-xl cursor-pointer mt-4 mb-[40px]' onClick={handleApproveToggle} >掲示板に投稿する</div>
        
        </div>
        <div className='opacity-75 bg-black fixed inset-0 z-40'></div>
        </>
    )
}

export default CategorySetModal;