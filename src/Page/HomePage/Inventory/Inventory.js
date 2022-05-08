import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';

const Inventory = () => {
    const {id} = useParams();
    // const [product] = useProduct(productId);
    console.log(id)
  
    return (
        <div className=''>
            <h1>Inventory page : {id} </h1>
        </div>
    );
};

export default Inventory;