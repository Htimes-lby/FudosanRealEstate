import React from 'react';
import RealEstateBigCard from '../components/RealEstateBigCard';

const FavouritePage = () => {

    const realEstateInfo = [{
        shortDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        longDescription: `text text text text text text text text text text text text text text text text
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
        shortDescription: `text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text text text`,
        longDescription: `text text text text text text text text text text text text text text text text
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

]


    return (
        <div>
            <div className='flex text-[40px] justify-center pb-[80px]'>
                <p className='pt-[63px]'>お気に入り</p>
            </div>
            <div className='flex flex-col items-center justify-center  '>
            {
                    realEstateInfo.map((realEstate, index) => {
                        return(
                            <RealEstateBigCard key = {index} realEstate = {realEstate} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default FavouritePage;