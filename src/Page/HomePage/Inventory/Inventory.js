import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';

const Inventory = () => {
    const {productId} = useParams();
    const [product] = useProduct(productId);
    console.log(product)
  
    return (
        <div className=''>
            <h1>This is inventory page </h1>
        </div>
    );
};

export default Inventory;