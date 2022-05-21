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
            const url = `https://boiling-inlet-70578.herokuapp.com/${id}`;
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
            <h2 className='text-center mt-2'>Manage this all Items: {products.length}</h2>
           
            <Link to="/addItem"> <button className='btn  btn-info my-3'>Add new item</button></Link>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    products.map(product => <div key={product._id}>
                        <div className='card shadow-lg p-3  bg-body rounded  border-0  h-100'>
                            <img height={200} className='rounded' src={product.img} alt="" />
                            <h4> {product.name}</h4>
                            <p>{product.description}</p>
                            <p>Price: {product.price}$</p>
                            <p>Quantity: {product.quantity}</p>
                            <small>Supplier: <b>{product.supplier}</b> </small>
                            <br />
                            <button onClick={() => handleDelete(product._id)} className="btn btn-primary mb-0">Delete</button>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageItems;