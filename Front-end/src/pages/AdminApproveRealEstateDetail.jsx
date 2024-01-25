import React from 'react'
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Carousel from '../components/Carousel'
import GoogleMapComponent from '../components/GoogleMapComponent'
import BasicTableBuilding from '../components/BasicTableBuilding'
import BasicTableLand from '../components/BasicTableLand'

const myArray = [
    require("../assets/img/carousel/1.jpg"),
    require("../assets/img/carousel/2.jpg"),
    require("../assets/img/carousel/3.jpg"),
    require("../assets/img/carousel/4.jpg"),
    require("../assets/img/carousel/5.jpg"),
];
const realEstates = [
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
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
        realEstateCategory: 'building',
        approved: 'false',
    },
]
const approve = '掲示板に投稿する';
const unapprove = '掲示板に投稿する';
const AdminApproveRealEstateDetail = () => {

    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const index = searchParams.get('index');
    const realEstateDisplayData = realEstates[index];
    const {basicInfo, briefDescription, fullDescription, address, images, approved} = realEstateDisplayData;
    const approveToggleButtonContent = approved ? approve : unapprove;
    
    const handleApproveToggle = () => {
        const nextApproved = !approved;
        // axios : set the approved of realestate of current id as nextApproved 
        // axios : get the realestate of current id
    }
    const handleContactPosterButtonClicked = () => {
        const searchParams = new URLSearchParams();
        searchParams.set('id', index)
        history.push(`/contact-post?${searchParams.toString()}`);
    }
  return (
    <div className=' flex flex-col items-center pb-[120px] pt-[92px] w-full'>
        <p className='text-[32px] text-center'>{address.province}{address.city}</p>

        <div className='mt-[28px] w-full'>
            <Carousel images = {images}/>
        </div>

        <div className='w-[1300px] mx-auto'>
            <div className='flex items-center w-full justify-between pt-[90px] pb-[84px]'>
                <div>
                    <GoogleMapComponent />
                </div>
                {
                    realEstateDisplayData.realEstateCategory === 'building' && <BasicTableBuilding tableData = {basicInfo} fontSize = {"text-[24px]"} width = {"w-[500px]"}  />
                }
                {
                    realEstateDisplayData.realEstateCategory === 'land' && <BasicTableLand tableData = {basicInfo} fontSize = {"text-[24px]"} width = {"w-[500px]"}  />
                }             
            </div>
            <p className='text-[24px]'>{briefDescription}</p>
            <p className='text-[16px] pt-[56px]'>{fullDescription}</p>

            <div className='flex justify-center gap-[50px] w-full mt-20'>
                <div className='flex w-[380px] h-[80px] justify-center items-center bg-[#2A6484] text-white text-[24px] rounded-xl cursor-pointer' onClick={handleContactPosterButtonClicked}>投稿者への連絡</div>
                <div className='flex w-[380px] h-[80px] justify-center items-center text-[#2A6484] bg-white text-[24px] rounded-xl cursor-pointer border-[2px] border-[#2A6484]' onClick={handleApproveToggle}>{approveToggleButtonContent}</div>
            </div>
        </div>
    </div>
  )
}

export default AdminApproveRealEstateDetail;