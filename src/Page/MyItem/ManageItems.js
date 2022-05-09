import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProduct';


const ManageItems = () => {
    const [products,setProduct] = useProducts();
    const [count, setCount] = useState(0)

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure Deleted item?')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
                const remaining =products.filter(product =>product._id !== id) 
                setProduct(remaining)
            })
        }
    }
    return (
        <div className='container'>
            <h2>Manage this all Items</h2>
           
            <Link to="/addItem"> <button className='btn btn-primary my-3'>Add new item</button></Link>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    products.map(product => <div key={product._id}>
                        <div className='card shadow-lg p-3 mb-2 bg-body rounded  border-0  h-100'>
                            <img className='rounded' src={product.img} alt="" />
                            <h4> {product.name}</h4>
                            <p>{product.description}</p>
                            <p>Price: {product.price}$</p>
                            <p>Quantity: {product.quantity}</p>
                            <small>Supplier: <b>{product.supplier}</b> </small>
                            <br />
                            <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageItems;