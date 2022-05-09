import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    let updateQuantity = 0;

    const {_id, img, name, price, description, quantity, supplier } = product;
    const updatequantity = quantity -1;
    useEffect(() => {
        const uri = `http://localhost:5000/product/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])


    

    const handleQuantity = selectedProduct => {

        updateQuantity = updateQuantity + product.quantity;

        // const exists = cart.find(product => product._id === selectedProduct._id);
       

        // const url = `http://localhost:5000/product/${id}`;
        // fetch(url, {
        //     method: "PUT",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(quantity),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         alert('user successfully updated')

        //     })
    }
    return (
        <div className=' row  row-cols-md-2 row-cols-lg-3 mt-5'>
            <div className='col-8 card mx-auto shadow-lg p-3 mb-5 bg-body rounded  border-0  h-100'>
                <img className='rounded' src={img} alt="" />
                <div className="mt-3">
                    <h4> {name}</h4>
                    <p>{description}</p>
                    <p>Price: {price}$</p>
                    <p>Quantity: {quantity}</p>
                    <small>Supplier: <b>{supplier}</b> </small>
                    <br />

                    <button onClick={() =>handleQuantity(_id)} type="button" className="btn btn-primary my-3">Delivered</button>

                    <br />
                    <div>
                        <input placeholder='Add Quantity' className='w-25 me-4' type="number" />
                        <button className='btn btn-primary btn-sm mb-1'>Add Quantity</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Inventory;