import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit =(data) => {
        // event.preventDefault();
        console.log(data);
        const url = 'http://localhost:5000/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )

        
    };
    return (
        <div>

            <div className='w-50 mx-auto'>
            <h1>Add item</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price" )} />
                <input className='mb-2' placeholder='Photo URL' type="url" {...register("img" )} />
                <input type="submit"  value='Add Service'/>
            </form>
        </div>
        </div>
    );
};

export default AddItem;