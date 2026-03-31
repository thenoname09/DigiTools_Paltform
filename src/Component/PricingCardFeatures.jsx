import React from 'react';

import { IoMdCheckmark } from 'react-icons/io';

const PricingCardFeatures = ({features, pricingData}) => {
    return (
        <div className={ `${ pricingData.popular ? "text-white" : "text-[#627382FF]"}  mt-2 font-medium text-[16px] `} >
            <p className='flex gap-3 items-center '><IoMdCheckmark />{features}</p>
        </div>
    );
};

export default PricingCardFeatures;