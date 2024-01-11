import React from 'react'
import Carousel from '../components/Carousel'
import GoogleMapComponent from '../components/GoogleMapComponent'
import BasicTableBuilding from '../components/BasicTableBuilding'

export default function ItemDetailPage() {
    const username = "千葉県南房総市   T.Tさん"

    const tableInfo = {
        budget: '123',
        layout: '4LDK',
        landarea: '7777m²',
        buildingarea: '4444m²',
        deadline: '即日',
        parking: '3台'
    };

    const shortDescription = "家族、仲間たちとDIYを楽しんでいます";
    const longDescription = "購入時、台風で屋根が飛んで数年間は室内が雨ざらしとなってしまっていた状態から リフォーム業者等は一切入れずに自分たちでDIYで直しています。 現在までに屋根の葺き替えをして雨漏りは無くなり 室内の間取り変更をして、床と壁を貼り始めています。 元々トイレが簡易水栓の汲み取り式だったので これから合併浄化槽を入れて トイレ、浴室、キッチンなど設備に取り掛かる予定です。 天井材や床材が長年の雨により崩れ落ちて、 床にヘドロ状に堆積していたので、まずは室内の掃除からでしたが、 一歩歩くと床が抜ける室内で 車数台分程のヘドロの山の掻き出しと それらの処分がくさくて汚くて大変でした。 脚が床にめり込んで腐ってしまった状態のグランドピアノが室内にあり 倒れないように仮の脚を付けて、位置を変えながらの作業が重たくて苦労しました。 二階への階段が腐れ落ちてしまっているので、自作の螺旋階段を作ろうとしていて 今のところ、螺旋階段作りが最大の難関となっています。 温暖なエリアなのでリフォーム作業の合間で 庭にスイカやトマト、キュウリ、イチジクを植えて育ててます。 全て楽しんでます。 ひとまずは修繕を楽しんでいます。 グランドピアノも何らかの形で再利用したいと思います。 隣の荒地も取得してガレージを作って和田浦ベースにしたいなどと野望もありますが まずは家が完成したら、手伝ってくれた人達や興味を持ってくれた人で 空いてる時に別荘的な使い方をしていきます。 昔か和田町は好きな場所で、 サイトで見つけた翌日には現地へ見に行きました。 物件に着くまで降っていた雨が止んで、二重の虹が見えた事と 物件自体に嫌な感じがしなく、購入はその時には決めていました。 太平洋まで徒歩数分、海鳴りの音が聴こえる素敵な物件です。 購入出来て良かったです、ありがとうございます。 （2021年9月7日掲載）"

  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <div className='pt-[92px]'>
                <p className='text-[32px] text-center'>売主さんへの手紙</p>
            </div>
            <div className='w-[1440px] pt-[72px] flex items-center justify-between'>
                <p className='text-[32px]'>あれから、こんな風に使ってます</p>
                <p className='text-[20px]'>{username}</p>
            </div>
        </div>

        <div className='pt-[28px]'>
            <Carousel />
        </div>
        <div className='w-[1440px] bottom-part'>
            <div className=' flex items-center justify-between bottom-part pt-[90px] pb-[84px] '>
                <div>
                    <GoogleMapComponent />
                </div>
                <div>
                    <BasicTableBuilding tableData = {tableInfo} fontSize = {"text-[33px]"} width = {"w-[500px]"}  />
                </div>             
            </div>
            <div>
                <p className='text-[32px] flex justify-center'>{shortDescription}</p>
                <p className='text-[24px] pt-[56px]'>{longDescription}</p>
            </div>
            <div className='pt-[45px] pb-[120px] flex justify-center'>
                <button className='bg-[#2A6484] text-[24px] text-white px-[42px] py-[25px] rounded-xl'>売りたい物件を掲示板に載せる</button>
            </div>
        </div>

    </div>
  )
}
