import React ,{useState     } from 'react';
import UploadImageForm from "../components/Form/UploadImageForm"
import ConditionForm from '../components/Form/ConditionForm';

const PostAgentPage = () => {

    const [value, setValue] = useState('');
    const [uploadDataArray, setUploadDataArray] = useState([]);
    const [conditionData, setConditionData] = useState("");
    const handleUploadDataArray = (data) => {
        setUploadDataArray(data);
    };

    const handleconditionDataArray = (data) => {
        setConditionData(data);
    };
    
    return (
        <div className='bg-[#F1F1F1]  pt-[124px]'>
            <div className='container bg-white'>
                <div>

                    <div>
                        <p className='text-[36px] flex justify-center py-[101px]'>掲載のご依頼</p>
                    </div>
                    <div className='ml-[323px]'>
                        <p className='text-[20px] pb-[49px]'>どうぞ、ご存じの範囲でありのままご記入ください。</p>
                        <p className='text-[20px] pb-[21px]'>※掲載内容は後からでも追記、修正できます。</p>
                        <p className='text-[20px] pb-[21px]'>※掲載の休止、終了はいつでも可能です。</p>
                        <p className='text-[20px] pb-[21px]'>※どう書いたらいいか分からないなどのご相談もお受けします。</p>
                    
                    </div>
                </div>
                <div className=' w-[900px] ml-[310px]  flex gap-[157px]'>
                    <div className='w-[190px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>担当者名</p>
                    </div>
                    <div className='flex'>                      
                        <input type="text"  className='w-[445px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'/>
                    </div>
                </div>
                <div className=' w-[900px] ml-[310px]  flex gap-[169px] mt-[40px]'>
                    <div className='w-[177px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>会社名</p>
                    </div>
                    <div className='flex'>                      
                        <input type="text"  className='w-[445px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'/>
                    </div>
                </div>
                <div className=' w-[900px] ml-[310px]  flex gap-[169px] mt-[40px]'>
                    <div className='w-[177px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>メール</p>
                    </div>
                    <div className='flex'>                      
                        <input type="text"  className='w-[445px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'/>
                    </div>
                </div>
                <div className=' w-[900px] ml-[310px]  flex gap-[169px] mt-[40px]'>
                    <div className='w-[177px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>住所</p>
                    </div>
                    <div className='flex'>                      
                        <input type="text"  className='w-[445px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'/>
                    </div>
                </div>

                <div className=' w-[900px] ml-[310px]  flex gap-[169px] pt-[40px] '> 

                    <div className='w-[177px] flex gap-[35px]  '>
                            <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                            <p className="text-[20px] ">役割</p>
                            
                    </div> 
                    <div className=" flex items-center  ">
                            
                        <select
                            className="border-[1px] focus:outline-none focus:border-blue-500 p-1 rounded-md border-black w-[445px] "
                            onChange={event => setValue(event.target.value)}
                            defaultValue={value}>                       
                            <option className="text-[16px]"  value="" >&nbsp;</option>
                            <option className="text-[16px]"  value="不動産業者" >&nbsp;不動産業者</option>
                            <option className="text-[16px]"  value="司法書士" >&nbsp;司法書士</option>
                            <option className="text-[16px]"  value="投資家" >&nbsp;投資家</option>
                            
                        </select>
                    </div>          
                    
                </div>


                <div className=' w-[900px] ml-[310px]  flex gap-[157px] pt-[40px]'>
                    <div className='w-[190px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>電話番号</p>
                    </div>
                    <div className='flex '>
                        <input type="text" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'/>
                        <span className='border-t-2 w-[30px] border-black mt-[15px] mx-[22px]'></span>            
                        <input type="text" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'/>
                        <span className='border-t-2 w-[30px] border-black mt-[15px] mx-[21px]'></span>
                        <input type="text" className='w-[99px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'/>
                    </div>
                </div>
                <div className=' w-[900px] ml-[310px]  flex gap-[157px] mt-[40px]'>
                    <div className='w-[190px] flex gap-[35px]  '>
                        <span className='bg-[#F69191] h-[28px] flex items-center p-2 rounded-md text-[15px] mx-[12px] text-white'>必須</span>
                        <p className='text-[20px]'>投稿内容</p>
                    </div>
                    <div className='flex'>                      
                        <textarea type="text"  className='w-[445px] h-[140px] border-[1px] focus:outline-none focus:border-blue-500 p-1 border-black rounded-md'/>
                    </div>
                </div>

                <div className=' w-[900px] ml-[310px]  flex gap-[169px] mt-[40px]'>
                <UploadImageForm title="物件写真" button="画像ファイルを選択する" width1={"w-[800px]"} width2={"w-[300px]"} gap={"gap-[35px]"} onDataArrayFromChild={handleUploadDataArray} />
                </div>
                <div className='flex justify-center'>
                    <ConditionForm onDataArrayFromChild={handleconditionDataArray} />
                </div>
                <div className='flex justify-center pt-[105px] pb-[170px]'>
                    <button className='bg-[#2A6484] text-white px-[115px] py-[14px] text-[24px] rounded-[20px]'>提出</button>
                </div>

            </div>
        </div>
    )
}

export default PostAgentPage;