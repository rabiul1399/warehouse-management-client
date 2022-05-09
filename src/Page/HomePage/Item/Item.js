import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    const { _id,img, name ,price,description,quantity,supplier,} = product;

    const navigate = useNavigate();
    const navigateDetail = id =>{
      navigate(`/inventory/${id}`)
    }
    return (
       <div className=' '>
           <div className='card shadow-lg p-3 mb-2 bg-body rounded  border-0  h-100'>
               <img className='rounded' src={img} alt="" />
             <div className="mt-3">
                 <h4> {name}</h4>
                 <p>{description}</p>
                 <p>Price: {price}$</p>
                 <p>Quantity: {quantity}</p>
                 <small>Supplier: <b>{supplier }</b> </small>
                 <br />
                 <button onClick={() => navigateDetail(_id)} type="button" className="btn btn-primary mt-2">Update</button>
                 
               
             </div>
           </div>

       </div>


    );
};

export default Item; 
