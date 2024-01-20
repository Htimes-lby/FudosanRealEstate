import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const contactMessages = [
    {
        sender: 'minato',
        receiver: 'fudosan',
        content: `家を投稿したいです。 利用規約を確認しました。 販売手数料がありましたが、どのように支払われますか？
        鑑賞文ページがとても印象的でしたが、もしここで売買が成立したら鑑賞文を残したいと思います。
        どこで鑑賞文を入力できますか？`,
    },
    {
        sender: 'fudosan',
        receiver: 'minato',
        content:  `お世話になっております。 お問合わせいただきありがとうございます。 
        「販売手数料が、どのように支払われるか」とのご質問ですが、 家いちばをご利用いただく際の料金（家いちば手数料）についてでよろしいでしょうか。
         掲載するだけであれば無料です。
        実際に家いちばを通じて売れた場合には家いちば手数料がかかります。
         詳しくは下記のページをご覧ください。
         https://www.fudosan.com/feature 
        また、売主様の「売りました体験談」の入力につきましては ご売却後にご案内させていただきます。
         なお、このたび投稿したい家は、以前家いちばにご投稿されたものとは別の物件でしょうか。
         ご不明点等ございましたらお申し付けください。 
        よろしくお願いいたします。
        ふどさん事務局 齊藤`
    },
]
const ContactGeneralPage = ({senderName, receiveName}) => {
    const history = useHistory();
    const handleNavigateToFaqClicked = () => {
        history.push('/faq');
    }

    return (
        <div className='bg-[#F1F1F1] w-full'>
            <div className='flex flex-col items-center w-[1200px] mx-auto'>
                <p className='text-[40px] flex justify-center pt-[63px] pb-[58px]'>総合窓口</p>
                <ul className='text-[18px]'>
                    <li className='list-disc'>掲載中の物件に関するお問い合わせはこちら</li>
                    <li className='list-disc'>物件に関するお問合せはこちらではしないでください。<br />
                    購入を検討している物件のページから、売主さんに直接お問い合わせください。
                    </li >
                    <li className='list-disc'>※家いちばから物件に関する情報はお伝えしておりません</li>
                </ul>
                <p className='inline-block py-10 px-[15px] underline underline-offset-8 text-[24px] font-normal cursor-pointer' onClick={handleNavigateToFaqClicked}>良くあるご質問はこちら <p className = 'pr-3 fa-solid fa-arrow-right underline underline-offset-8 '></p></p>
                {
                    contactMessages.map((contactMessage, index) =>
                        (<div key={index} className={`w-full h-auto p-10 mb-10 ${contactMessage.sender === 'minato' ? 'bg-white' : 'bg-[#F2ECCD]'}`}>
                            <p className='text-[20px] font-semibold mb-8'>{contactMessage.sender}さん → {contactMessage.receiver}さん</p>
                            <p className='text-[16px]'>{contactMessage.content}</p>
                        </div>)
                    )
                }
                <p className='mt-10 mb-3 text-[24px] pb-[15px]'>メッセージ送信フォーム</p>
                <textarea name="message" id="message" cols="10" rows="3" className='w-full py-4 px-12 text-[24px]'></textarea>
                <div className='pt-[37px] pb-[105px] flex justify-center'>
                    <button className='bg-[#2A6484] text-[24px] text-white rounded-[15px] py-[19px] px-[50px]'>メッセージを送信する</button>
                </div>
            </div>
        </div>
    )
}

export default ContactGeneralPage;