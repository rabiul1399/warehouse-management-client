import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {

const [products, setProducts]= useState([]);

useEffect( ()=>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, [])
    return (
        <div  className='container'>
            <h2 className='mt-4'>All Items {products.length}  </h2>

           <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'> 
           {
                products.map(product =><Item key={product._id} product={product}></Item>)
            }
           </div>
        </div>
    );
};

export default Items;