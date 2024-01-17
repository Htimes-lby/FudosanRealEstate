import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const ContactGeneralPage = ({senderName, receiveName}) => {
    const history = useHistory();
    const handleFaqClicked = () => {
        history.push('/faq');
    }
    const content = 
        "家を投稿したいです。 利用規約を確認しました。 販売手数料がありましたが、どのように支払われますか？"+
        "鑑賞文ページがとても印象的でしたが、もしここで売買が成立したら鑑賞文を残したいと思います。"+
        "どこで鑑賞文を入力できますか？";
    const content2 = 
    "お世話になっております。 お問合わせいただきありがとうございます。"+ 
    "販売手数料が、どのように支払われるか」とのご質問ですが、 家いちばをご利用いただく際の料金（家いちば手数料）についてでよろしいでしょうか。"+
    " 掲載するだけであれば無料です。"+
    "実際に家いちばを通じて売れた場合には家いちば手数料がかかります。"+
    " 詳しくは下記のページをご覧ください。"+
    " https://www.fudosan.com/feature "+
    "また、売主様の「売りました体験談」の入力につきましては ご売却後にご案内させていただきます。"+
    " なお、このたび投稿したい家は、以前家いちばにご投稿されたものとは別の物件でしょうか。"+
    " ご不明点等ございましたらお申し付けください。 "+
    "よろしくお願いいたします。"+
    "ふどさん事務局 齊藤"

    return (
        <div className='bg-[#F1F1F1]'>
            <div className='container'>
                <div>
                    <p className='text-[40px] flex justify-center pt-[63px] pb-[58px]'>総合窓口</p>
                </div>
                <div>
                    <ul className='text-[24px]'>
                        <li className='list-disc'>掲載中の物件に関するお問い合わせはこちら</li>
                        <li className='list-disc'>物件に関するお問合せはこちらではしないでください。<br />
                        購入を検討している物件のページから、売主さんに直接お問い合わせください。
                        </li >
                        <li className='list-disc'>※家いちばから物件に関する情報はお伝えしておりません</li>
                    </ul>
                </div>
                <div className='pt-[67px] pb-[118px] '>
                    <p className='text-[24px] border-b-2 px-[15px] border-black inline-block cursor-pointer' onClick={handleFaqClicked}>良くあるご質問はこちら</p>
                </div>
                <div className='pb-[98px]'>

                    <div className='pr-[300px] border-2 border-black bg-white pl-[83px] py-[31px]'> {/*using map  */}
                        <p className='text-[20px] font-bold pb-[10px]'>{`${senderName}さん->${receiveName}さん`}</p>
                        <p className=' leading-10 text-[20px]'>{content}</p>
                    </div>
                </div>
                <div className='pb-[98px]'>

                    <div className='pr-[300px] border-2 border-black bg-[#F2ECCD] pl-[83px] py-[31px]'> {/*using map  */}
                        <p className='text-[20px] font-bold pb-[10px]'>{`${senderName}さん->${receiveName}さん`}</p>
                        <p className=' leading-10 text-[20px]'>{content2}</p>
                    </div>
                </div>
                <div>
                    <p className='text-[24px] flex justify-center pb-[15px]'>メッセージ送信フォーム</p>
                    <textarea name="message" id="message" cols="175" rows="10"></textarea>
                </div>
                <div className='pt-[37px] pb-[105px] flex justify-center'>
                    <button className='bg-[#2A6484] text-[24px] text-white rounded-[15px] py-[19px] px-[50px]'>メッセージを送信する</button>
                </div>
                
            </div>
        </div>
    )
}

export default ContactGeneralPage;