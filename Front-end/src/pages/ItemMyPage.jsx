import React from 'react';
import RealEstateBigCard from '../components/RealEstateBigCard';

const myArray = [
    require("../assets/img/carousel/1.jpg"),
    require("../assets/img/carousel/2.jpg"),
    require("../assets/img/carousel/3.jpg"),
    require("../assets/img/carousel/4.jpg"),
    require("../assets/img/carousel/5.jpg"),
];
const realEstateInfo = [
    {
        posterInfo: {
            name: {
                firstNameGanji:'廣崎',
                lastNameGanji:'佑亮',
                firstNameGana:'ゆうすけ',
                lastNameGana:'ひろさき',
            },
            age:16,
            mail:'skywolf777@gmail.com',
            phoneNumber:'+81501587316',
        },
        address: {
            postNumber:'238-0298',
            province:'神奈川県',
            city:'三浦市',
            street:'1 Chome-9-11 Misaki',
        },
        images: myArray,
        briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
        fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        basicInfo: {
            budget: '1',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        posterInfo: {
            name: {
                firstNameGanji:'廣崎',
                lastNameGanji:'佑亮',
                firstNameGana:'ゆうすけ',
                lastNameGana:'ひろさき',
            },
            age:16,
            mail:'skywolf777@gmail.com',
            phoneNumber:'+81501587316',
        },
        address: {
            postNumber:'238-0298',
            province:'神奈川県',
            city:'三浦市',
            street:'1 Chome-9-11 Misaki',
        },
        username: "千葉県南房総市   T.Tさん",
        images: myArray,
        briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
        fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        basicInfo: {
            budget: '1',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        posterInfo: {
            name: {
                firstNameGanji:'廣崎',
                lastNameGanji:'佑亮',
                firstNameGana:'ゆうすけ',
                lastNameGana:'ひろさき',
            },
            age:16,
            mail:'skywolf777@gmail.com',
            phoneNumber:'+81501587316',
        },
        address: {
            postNumber:'238-0298',
            province:'神奈川県',
            city:'三浦市',
            street:'1 Chome-9-11 Misaki',
        },
        username: "千葉県南房総市   T.Tさん",
        images: myArray,
        briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
        fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        basicInfo: {
            budget: '1',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        posterInfo: {
            name: {
                firstNameGanji:'廣崎',
                lastNameGanji:'佑亮',
                firstNameGana:'ゆうすけ',
                lastNameGana:'ひろさき',
            },
            age:16,
            mail:'skywolf777@gmail.com',
            phoneNumber:'+81501587316',
        },
        address: {
            postNumber:'238-0298',
            province:'神奈川県',
            city:'三浦市',
            street:'1 Chome-9-11 Misaki',
        },
        username: "千葉県南房総市   T.Tさん",
        images: myArray,
        briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
        fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        basicInfo: {
            budget: '1',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        posterInfo: {
            name: {
                firstNameGanji:'廣崎',
                lastNameGanji:'佑亮',
                firstNameGana:'ゆうすけ',
                lastNameGana:'ひろさき',
            },
            age:16,
            mail:'skywolf777@gmail.com',
            phoneNumber:'+81501587316',
        },
        address: {
            postNumber:'238-0298',
            province:'神奈川県',
            city:'三浦市',
            street:'1 Chome-9-11 Misaki',
        },
        username: "千葉県南房総市   T.Tさん",
        images: myArray,
        briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
        fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        basicInfo: {
            budget: '1',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        posterInfo: {
            name: {
                firstNameGanji:'廣崎',
                lastNameGanji:'佑亮',
                firstNameGana:'ゆうすけ',
                lastNameGana:'ひろさき',
            },
            age:16,
            mail:'skywolf777@gmail.com',
            phoneNumber:'+81501587316',
        },
        address: {
            postNumber:'238-0298',
            province:'神奈川県',
            city:'三浦市',
            street:'1 Chome-9-11 Misaki',
        },
        username: "千葉県南房総市   T.Tさん",
        images: myArray,
        briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
        fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        basicInfo: {
            budget: '1',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        posterInfo: {
            name: {
                firstNameGanji:'廣崎',
                lastNameGanji:'佑亮',
                firstNameGana:'ゆうすけ',
                lastNameGana:'ひろさき',
            },
            age:16,
            mail:'skywolf777@gmail.com',
            phoneNumber:'+81501587316',
        },
        address: {
            postNumber:'238-0298',
            province:'神奈川県',
            city:'三浦市',
            street:'1 Chome-9-11 Misaki',
        },
        username: "千葉県南房総市   T.Tさん",
        images: myArray,
        briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
        fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        basicInfo: {
            budget: '1',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        posterInfo: {
            name: {
                firstNameGanji:'廣崎',
                lastNameGanji:'佑亮',
                firstNameGana:'ゆうすけ',
                lastNameGana:'ひろさき',
            },
            age:16,
            mail:'skywolf777@gmail.com',
            phoneNumber:'+81501587316',
        },
        address: {
            postNumber:'238-0298',
            province:'神奈川県',
            city:'三浦市',
            street:'1 Chome-9-11 Misaki',
        },
        username: "千葉県南房総市   T.Tさん",
        images: myArray,
        briefDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
    テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`,
        fullDescription: `テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        basicInfo: {
            budget: '1',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
]
const userInfo = {
    favourite: [],
    myPost: [],
}
const ItemMyPage = () => {
    return (
        <div>
            <div className='flex text-[40px] justify-center pb-[80px]'>
                <p className='pt-[63px]'>私の投稿</p>
            </div>
            <div className='flex flex-col items-center justify-center h-min-[600px]'>
                {

                }
                {
                    realEstateInfo.map((realEstate, index) => {
                        return(
                            <RealEstateBigCard key = {index} realEstate = {realEstate} parentComponent = 'ItemMyPage' />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ItemMyPage;
