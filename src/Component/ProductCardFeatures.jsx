import React from 'react';
import { FcCheckmark } from 'react-icons/fc';

const ProductCardFeatures = ({features}) => {
    return (
       
        <p className='flex gap-3 items-center'><FcCheckmark />{features}</p>
    );
};

export default ProductCardFeatures;