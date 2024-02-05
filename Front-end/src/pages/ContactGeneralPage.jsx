import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const tempContactMessages = [
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

const ContactGeneralPage = () => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const inputRef = useRef();

    const [cookies, setCookie] = useCookies();
    const [clientId, setClientId] = useState();
    const myId = cookies.user._id;
    // const myName = cookies.user.name.lastNameGanji + ' ' + cookies.user.name.firstNameGanji;
    // const isAdmin = cookies.user.isAdmin;

    const [content, setContent] = useState();
    const [contactMessages, setContactMessages] = useState([]);

    const handleNavigateToFaqClicked = () => {
        history.push('/faq');
    }

    const sendContactMessage = async () => {
        try {
            // const category = isAdmin ? 'reply' : 'query';
            const category = 'reply';
            const payload = {
                content: content,
                clientId: myId,
                category: category,
            }
            const res = await axios.post('/saveGeneralContactMessage', payload);
            fetchContactMessages();
            inputRef.current.value = '';
            setContent('');
            } catch (error) {
                console.log(error.message);
            }
    }

    const fetchContactMessages = async () => {
        try {
            let clientId;
            // if(isAdmin) {
            //     clientId = searchParams.get('clientId');
            // } else {
            //     clientId = myId;
            // }
            clientId = myId;
            const params = new URLSearchParams({'clientId': clientId}).toString();
            const res = await axios.get(`/fetchGeneralContactMessages?${params}`);
            setContactMessages(res.data.contactMessages);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchContactMessages();
    },[])

    if(contactMessages === null) {
        return(
            <div>loading....................</div>
        )
    }

    return (
        <div className='bg-[#F1F1F1] w-full'>
            <div className='flex flex-col items-center w-[1200px] mx-auto noto-regular'>
                <p className='text-[40px] flex justify-center pt-[63px] pb-[58px] noto-medium'>総合窓口</p>
                <ul className='noto-regular text-lg'>
                    <li className='list-disc'>掲載中の物件に関するお問い合わせはこちら</li>
                    <li className='list-disc'>物件に関するお問合せはこちらではしないでください。<br />
                    購入を検討している物件のページから、売主さんに直接お問い合わせください。
                    </li >
                    <li className='list-disc'>※家いちばから物件に関する情報はお伝えしておりません</li>
                </ul>
                <span className='inline-block py-10 px-[15px] underline underline-offset-8 text-[24px] font-normal cursor-pointer' onClick={handleNavigateToFaqClicked}>良くあるご質問はこちら <span className = 'pr-3 fa-solid fa-arrow-right underline underline-offset-8 '></span></span>
                {
                    contactMessages.map((message, index) =>
                        (<div key={index} className={`w-full h-auto border-2 border-[#2A6484]/40 p-10 mb-10 ${message.category === 'query' ? 'bg-white' : 'bg-[#F2ECCD]'}`}>
                            {
                                message.category === 'query' ?
                                <p className='text-[20px] font-semibold mb-8'>{message.clientId.name.firstNameGanji + message.clientId.name.lastNameGanji}さん → ふどさんさん</p> :
                                <p className='text-[20px] font-semibold mb-8'>ふどさんさん → {message.clientId.name.firstNameGanji + message.clientId.name.lastNameGanji}さん</p>
                            }
                            <p className='text-[16px] whitespace-pre-wrap break-words'>{message.content}</p>
                        </div>)
                    )
                }
                <p className='mt-10 mb-3 text-[24px] pb-[15px]'>メッセージ送信フォーム</p>
                <textarea name="message" ref={inputRef} id="message" cols="10" rows="3" className='w-full py-4 px-12 text-sm noto-regular' onChange={(e) => setContent(e.target.value)}></textarea>
                <div className='pt-10 pb-24 flex justify-center'>
                    <button className='py-3 px-8 rounded-[15px] bg-[#2A6484] noto-medium text-[24px] text-white' onClick={sendContactMessage}>メッセージを送信する</button>
                </div>
            </div>
        </div>
    )
}

export default ContactGeneralPage;
