import {React, useState, useEffect} from 'react';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import SearchBoard from "../components/SearchBoard"
import DashboardRealEstatePostBoard from './DashboardPage/DashboardRealEstatePostBoard';
import Pagination from '../components/Pagination';
import RealEstateSmallCard from '../components/RealEstateSmallCard';

// const myArray = [
//     require("../assets/img/carousel/1.jpg"),
//     require("../assets/img/carousel/2.jpg"),
//     require("../assets/img/carousel/3.jpg"),
//     require("../assets/img/carousel/4.jpg"),
//     require("../assets/img/carousel/5.jpg"),
// ];
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

const ItemListPage = () => {

    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const filterLabel = searchParams.get('filterLabel');
    const filterContent = searchParams.get('filterContent');

    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(1);
    const [realEstates, setRealEstates] = useState(null);
    const [totalNumber, setTotalNumber] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const firstNumber = (active - 1) * 16 + 1;
                const lastNumber = active * 16;
                const params = new URLSearchParams({
                    firstNumber: firstNumber,
                    lastNumber: lastNumber,
                    filterLabel: filterLabel,
                    filterContent: filterContent,
                }).toString();
                const res = await axios.get(`/getRealEstates?${params}`);
                setRealEstates(res.data.realEstates);
                setTotalNumber(res.data.totalDocumentNumber);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [active])

    const activeHandler = (clickedPage) => {
        setActive(parseInt(clickedPage));
    };
    const magnifierToggleHandler = () => {
        setIsOpen((isOpen) => !isOpen);
    }
    const handleRealEstateCardClicked = (props) => {
        const index = props;
        const realEstateId = realEstates[index]._id;
        const searchParams = new URLSearchParams();
        searchParams.set('realEstateId', realEstateId);
        history.push(`/item-detail?${searchParams.toString()}`);
    };

    if(realEstates === null) {
        return(
            <div>loading............</div>
        );
    }
    
    return (
        <div className='flex flex-col items-center pt-20'>
            <p className='noto-medium text-[36px]' >{filterContent}</p>
            <div className='flex justify-center items-center gap-10 mt-16'>            
                <Pagination
                    active={active}
                    size={Math.ceil(totalNumber/16)}
                    step={2}
                    onClickHandler={activeHandler}
                />
                <i className="fa-solid fa-magnifying-glass text-[40px] cursor-pointer" onClick={magnifierToggleHandler}></i>
            </div>
            
            <div className=' bg-white flex justify-end fixed z-[100] right-10 top-[20%]'>
                {isOpen && <SearchBoard />}              
            </div>

            <div className='flex flex-col items-center w-full'>
                <div className=' grid gap-x-8 gap-y-12 grid-cols-4 mt-3 mb-5 mx-auto box-border max-w-[1100px]'>
                    {
                        realEstates.map((realEstate, index) => {
                            return(
                                <div key = {index}  onClick={() => handleRealEstateCardClicked(index)} className='cursor-pointer'>
                                    <RealEstateSmallCard  realEstate = {realEstate}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className='flex justify-center items-center gap-10 pb-16'>
                <Pagination
                    active={active}
                    size={Math.ceil(totalNumber/16)}
                    step={2}
                    onClickHandler={activeHandler}
                />
                <i className="fa-solid fa-magnifying-glass text-[40px] cursor-pointer" onClick={magnifierToggleHandler}></i>
            </div>
        </div>
    )
}

export default ItemListPage;
