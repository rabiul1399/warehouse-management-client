import React from 'react';
import useProducts from '../../hooks/useProduct';
import Item from '../HomePage/Item/Item';

const ManageItems = () => {
   const [products] = useProducts();
    return (
        <div className='container'>
            <h2>Manage this all Items</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'> 
           {
                products.map(product =><Item key={product._id} product={product}></Item>)
            }
           </div>
        </div>
    );
};

export default ManageItems;