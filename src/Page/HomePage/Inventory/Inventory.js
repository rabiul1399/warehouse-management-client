import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reFresh, setReFresh] = useState('');
    // const [updateQuantity, setUpdateQuantity] = useState(0);
    const inputRef = useRef();
    const { _id, img, name, price, description, quantity, supplier } = product;
    // const [updateQuantity, setUpdateQuantity] = useState(0);

    useEffect(() => {
        const uri = `https://boiling-inlet-70578.herokuapp.com/product/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [reFresh])

    const updateInApi = updateQuantity => {
        const url = `https://boiling-inlet-70578.herokuapp.com/product/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ updateQuantity }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('user successfully updated')
                setReFresh(new Date().getTime());

            })
    }

    const handleDeliver = () => {
        let decreaseQuantity = parseInt(quantity);
        decreaseQuantity = decreaseQuantity - 1;

        updateInApi(decreaseQuantity);
    }

    const handleRestock = event => {
        event.preventDefault();
        const quant = parseInt(quantity);

        const inputValue = inputRef.current.value
        const inputQuantity = parseInt(inputValue);

        const updateQuantity = quant + inputQuantity;

        updateInApi(updateQuantity);
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

                    <button onClick={() => handleDeliver()} type="button" className="btn btn-primary my-3">Delivered</button>

                    <br />

                    <div>
                        <form onSubmit={handleRestock}>
                            <input ref={inputRef} className='w-25 me-4' />
                            <button className='btn btn-primary btn-sm mb-1' type="submit">Add Quantity</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;