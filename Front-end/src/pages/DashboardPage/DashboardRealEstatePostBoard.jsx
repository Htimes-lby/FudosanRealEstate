import { React } from 'react';
import RealEstateSmallCard from '../../components/RealEstateSmallCard';
import { useHistory } from 'react-router-dom'

const myArray = [
    require("../../assets/img/carousel/1.jpg"),
    require("../../assets/img/carousel/2.jpg"),
    require("../../assets/img/carousel/3.jpg"),
    require("../../assets/img/carousel/4.jpg"),
    require("../../assets/img/carousel/5.jpg"),
];

// const realEstates = [
//     {
//         posterInfo: {
//             name: {
//                 firstNameGanji:'廣崎',
//                 lastNameGanji:'佑亮',
//                 firstNameGana:'ゆうすけ',
//                 lastNameGana:'ひろさき',
//             },
//             age:16,
//             mail:'skywolf777@gmail.com',
//             phoneNumber:'+81501587316',
//         },
//         address: {
//             postNumber:'238-0298',
//             province:'神奈川県',
//             city:'三浦市',
//             street:'1 Chome-9-11 Misaki',
//         },
//         images: myArray,
//         briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
//         fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
//         image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//         basicInfo: {
//             budget: '1',
//             layout: '4LDK',
//             landarea: '7777m²',
//             buildingarea: '4444m²',
//             deadline: '即日',
//             parking: '3台',
//         },
//         realEstateCategory: 'building'
//     },
//     {
//         posterInfo: {
//             name: {
//                 firstNameGanji:'廣崎',
//                 lastNameGanji:'佑亮',
//                 firstNameGana:'ゆうすけ',
//                 lastNameGana:'ひろさき',
//             },
//             age:16,
//             mail:'skywolf777@gmail.com',
//             phoneNumber:'+81501587316',
//         },
//         address: {
//             postNumber:'238-0298',
//             province:'神奈川県',
//             city:'三浦市',
//             street:'1 Chome-9-11 Misaki',
//         },
//         username: "千葉県南房総市   T.Tさん",
//         images: myArray,
//         briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
//         fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
//         image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//         basicInfo: {
//             budget: '1',
//             layout: '4LDK',
//             landarea: '7777m²',
//             buildingarea: '4444m²',
//             deadline: '即日',
//             parking: '3台',
//         },
//         realEstateCategory: 'building'
//     },
//     {
//         posterInfo: {
//             name: {
//                 firstNameGanji:'廣崎',
//                 lastNameGanji:'佑亮',
//                 firstNameGana:'ゆうすけ',
//                 lastNameGana:'ひろさき',
//             },
//             age:16,
//             mail:'skywolf777@gmail.com',
//             phoneNumber:'+81501587316',
//         },
//         address: {
//             postNumber:'238-0298',
//             province:'神奈川県',
//             city:'三浦市',
//             street:'1 Chome-9-11 Misaki',
//         },
//         username: "千葉県南房総市   T.Tさん",
//         images: myArray,
//         briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
//         fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
//         image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//         basicInfo: {
//             budget: '1',
//             layout: '4LDK',
//             landarea: '7777m²',
//             buildingarea: '4444m²',
//             deadline: '即日',
//             parking: '3台',
//         },
//         realEstateCategory: 'building'
//     },
//     {
//         posterInfo: {
//             name: {
//                 firstNameGanji:'廣崎',
//                 lastNameGanji:'佑亮',
//                 firstNameGana:'ゆうすけ',
//                 lastNameGana:'ひろさき',
//             },
//             age:16,
//             mail:'skywolf777@gmail.com',
//             phoneNumber:'+81501587316',
//         },
//         address: {
//             postNumber:'238-0298',
//             province:'神奈川県',
//             city:'三浦市',
//             street:'1 Chome-9-11 Misaki',
//         },
//         username: "千葉県南房総市   T.Tさん",
//         images: myArray,
//         briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
//         fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
//         image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//         basicInfo: {
//             budget: '1',
//             layout: '4LDK',
//             landarea: '7777m²',
//             buildingarea: '4444m²',
//             deadline: '即日',
//             parking: '3台',
//         },
//         realEstateCategory: 'building'
//     },
//     {
//         posterInfo: {
//             name: {
//                 firstNameGanji:'廣崎',
//                 lastNameGanji:'佑亮',
//                 firstNameGana:'ゆうすけ',
//                 lastNameGana:'ひろさき',
//             },
//             age:16,
//             mail:'skywolf777@gmail.com',
//             phoneNumber:'+81501587316',
//         },
//         address: {
//             postNumber:'238-0298',
//             province:'神奈川県',
//             city:'三浦市',
//             street:'1 Chome-9-11 Misaki',
//         },
//         username: "千葉県南房総市   T.Tさん",
//         images: myArray,
//         briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
//         fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
//         image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//         basicInfo: {
//             budget: '1',
//             layout: '4LDK',
//             landarea: '7777m²',
//             buildingarea: '4444m²',
//             deadline: '即日',
//             parking: '3台',
//         },
//         realEstateCategory: 'building'
//     },
//     {
//         posterInfo: {
//             name: {
//                 firstNameGanji:'廣崎',
//                 lastNameGanji:'佑亮',
//                 firstNameGana:'ゆうすけ',
//                 lastNameGana:'ひろさき',
//             },
//             age:16,
//             mail:'skywolf777@gmail.com',
//             phoneNumber:'+81501587316',
//         },
//         address: {
//             postNumber:'238-0298',
//             province:'神奈川県',
//             city:'三浦市',
//             street:'1 Chome-9-11 Misaki',
//         },
//         username: "千葉県南房総市   T.Tさん",
//         images: myArray,
//         briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
//         fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
//         image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//         basicInfo: {
//             budget: '1',
//             layout: '4LDK',
//             landarea: '7777m²',
//             buildingarea: '4444m²',
//             deadline: '即日',
//             parking: '3台',
//         },
//         realEstateCategory: 'building'
//     },
//     {
//         posterInfo: {
//             name: {
//                 firstNameGanji:'廣崎',
//                 lastNameGanji:'佑亮',
//                 firstNameGana:'ゆうすけ',
//                 lastNameGana:'ひろさき',
//             },
//             age:16,
//             mail:'skywolf777@gmail.com',
//             phoneNumber:'+81501587316',
//         },
//         address: {
//             postNumber:'238-0298',
//             province:'神奈川県',
//             city:'三浦市',
//             street:'1 Chome-9-11 Misaki',
//         },
//         username: "千葉県南房総市   T.Tさん",
//         images: myArray,
//         briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
//         fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
//         image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//         basicInfo: {
//             budget: '1',
//             layout: '4LDK',
//             landarea: '7777m²',
//             buildingarea: '4444m²',
//             deadline: '即日',
//             parking: '3台',
//         },
//         realEstateCategory: 'building'
//     },
//     {
//         posterInfo: {
//             name: {
//                 firstNameGanji:'廣崎',
//                 lastNameGanji:'佑亮',
//                 firstNameGana:'ゆうすけ',
//                 lastNameGana:'ひろさき',
//             },
//             age:16,
//             mail:'skywolf777@gmail.com',
//             phoneNumber:'+81501587316',
//         },
//         address: {
//             postNumber:'238-0298',
//             province:'神奈川県',
//             city:'三浦市',
//             street:'1 Chome-9-11 Misaki',
//         },
//         username: "千葉県南房総市   T.Tさん",
//         images: myArray,
//         briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//     テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
//         fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
//         テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
//         image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//         basicInfo: {
//             budget: '1',
//             layout: '4LDK',
//             landarea: '7777m²',
//             buildingarea: '4444m²',
//             deadline: '即日',
//             parking: '3台',
//         },
//         realEstateCategory: 'building'
//     },
// ]

const DashboardRealEstatePostBoard = ( props ) => {
 
    const history = useHistory();
    const realEstates = props.realEstates;
    const handleRealEstateCardClicked = (props) => {
        const index = props;
        const realEstateId = realEstates[index]._id;
        const searchParams = new URLSearchParams();
        searchParams.set('realEstateId', realEstateId);
        history.push(`/item-detail?${searchParams.toString()}`);
    };

    const handleShowMoreButtonClicked = () => {
        history.push('item-board')
    }

    console.log('realEstates in PostBoard',realEstates)
    return(
        <div className='flex flex-col items-center w-full'>
            <div className=' text-center text-[40px] mt-5'>売ります掲示板</div>
            <div className=' grid gap-x-8 gap-y-12 grid-cols-4 mt-5 mx-auto box-border max-w-[1100px]'>
                {
                    realEstates.map((realEstate, index) => {
                        return(
                            <div onClick={() => handleRealEstateCardClicked(index) } key = {index} className='cursor-pointer'>
                                <RealEstateSmallCard  realEstate = {realEstate}/>
                            </div>
                        );
                    })
                }
            </div>
            <div className=' w-[200px] bg-[#2A6484] font-semibold text-white text-center py-[12px] mt-20 rounded-xl cursor-pointer' onClick={handleShowMoreButtonClicked}>もっと見る</div>
        </div>
    );
}

export default DashboardRealEstatePostBoard;