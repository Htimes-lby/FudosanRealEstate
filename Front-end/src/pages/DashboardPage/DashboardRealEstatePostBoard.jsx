import { React } from 'react';
import RealEstateSmallCard from '../../components/RealEstateSmallCard';
// import image from "../assets/img/photo.png"

const realEstateInfo = [
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            layout: '4LDK',
            landarea: '7777m²',
            buildingarea: '4444m²',
            deadline: '即日',
            parking: '3台',
        },
        realEstateCategory: 'building'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            landarea: '7777m²',
            buildingToLandRatio: '70%',
            floorAreaRatio: '70%',
            structure: '木造平屋',
        },
        realEstateCategory: 'land'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            landarea: '7777m²',
            buildingToLandRatio: '70%',
            floorAreaRatio: '70%',
            structure: '木造平屋',
        },
        realEstateCategory: 'land'
    },
    {
        briefDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        tableData: {
            budget: '123',
            landarea: '7777m²',
            buildingToLandRatio: '70%',
            floorAreaRatio: '70%',
            structure: '木造平屋',
        },
        realEstateCategory: 'land'
    },
]
const DashboardRealEstatePostBoard = () => {

    return(
        <div className='flex justify-center w-full'>
            <div className=' grid gap-8 grid-cols-4 mt-5  box-border max-w-[1840px]'>
                {
                    realEstateInfo.map((realEstate, index) => {
                        return(
                            <RealEstateSmallCard key = {index} realEstate = {realEstate} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default DashboardRealEstatePostBoard;