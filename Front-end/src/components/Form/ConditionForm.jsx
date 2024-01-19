import React, {useState, useEffect} from 'react'

export default function ConditionForm({content, onDataArrayFromChild}) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        // Update the state to toggle the checked state
        setIsChecked(!isChecked);
     
      };

      useEffect(()=>{
        
        onDataArrayFromChild(isChecked);
      },[isChecked])
  return (
    <div>
        <div className=' w-[600px]  bg-[#D9D9D9]/40 pt-4 pb-3'>
            <div className='flex pl-[70px]'>
                <div className=' pr-[45px] '>
                    <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[3px] text-white'>必須</span>
                </div>
                <div>
                    <p>以下の同意事項をご確認ください。</p>
                </div>
            </div>
            <div className='pb-[12px]'>
                <p className='pl-[60px] pt-[19px] pb-[6px]'>同意事項</p>
                <p className='w-[560px] pl-[15px]' >
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                </p>
            </div>
            <div className='flex justify-center items-center pb-3'>
                <input type='checkbox' className='w-[25px] h-[25px]' checked={isChecked} onChange={handleCheckboxChange} />
                <span className='text-[14px] pl-[15px]'>上記規約・個人情報の取扱いについて同意します。</span>
            </div>
        </div>
    </div>
  )
}
