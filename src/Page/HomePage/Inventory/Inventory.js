import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';

const Inventory = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const {img, name ,price,description,quantity,supplier} =product;
    useEffect(() =>{
        const uri = `http://localhost:5000/product/${id}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
    },[])
    
   
    return (
        <div className=' row  row-cols-md-2 row-cols-lg-3 mt-5'>
                <div  className='col-8 card mx-auto shadow-lg p-3 mb-5 bg-body rounded  border-0  h-100'>
               <img className='rounded' src={img} alt="" />
             <div className="mt-3">
                 <h4> {name}</h4>
                 <p>{description}</p>
                 <p>Price: {price}$</p>
                 <p>Quantity: {quantity}</p>
                 <small>Supplier: <b>{supplier }</b> </small>
                 <br />
                
                 <button type="button" className="btn btn-primary mt-2">Delivered</button>

             </div>
           </div>
        </div>
    );
};

export default Inventory;