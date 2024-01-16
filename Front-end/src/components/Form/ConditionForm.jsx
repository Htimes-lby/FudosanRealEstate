import React from 'react'

export default function ConditionForm({content}) {
  return (
    <div>
        <div className=' w-[600px]  bg-[#D9D9D9]/40 pt-4 pb-3'>
            <div className='flex justify-center'>
                <div className=' pr-[56px] '>
                    <span className='bg-[#F69191] h-[28px] inline-block p-1 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                </div>
                <div>
                    <p>以下の同意事項をご確認ください。</p>
                </div>
            </div>
            <div className='pb-[12px]'>
                <p className='pl-[35px] pt-[19px] pb-[6px]'>同意事項</p>
                <p className='w-[560px] pl-[15px]' >
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                    テキスト テキスト テキスト テキスト テキスト テキスト テキスト
                </p>
            </div>
            <div className='flex justify-center'>
                <input type='checkbox' name="agree" id="agree" />
                <span className='text-[14px] pl-[5px]'>上記規約・個人情報の取扱いについて同意します。</span>
            </div>
        </div>
    </div>
  )
}
