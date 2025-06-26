import React from 'react';
import { useLoaderData } from 'react-router';
import TipCards from '../TipCards/TipCards';

const BrowseTips = () => {
    const tipsData=useLoaderData();
    console.log('tips data from browse tips',tipsData)
    console.log(tipsData)
    return (
        <div className='mt-5 w-full my-12 px-4 md:px-8 lg:px-16'>
        {
            tipsData.map(data=><TipCards key={data.id} data={data}></TipCards>)
        }
        </div>
    );
};

export default BrowseTips;