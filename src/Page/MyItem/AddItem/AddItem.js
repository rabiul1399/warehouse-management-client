import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    console.log(user)

    const onSubmit =(data) => {
        console.log(data);

         const url = ` https://salty-thicket-04444.herokuapp.com/product`;
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
                {
                    user.email ? 
                    <input className='mb-2' value={user.email} placeholder={user.email} {...register("email")} />
                    :
                    ''
                }
                
                <input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price" )} />

                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity" )} />

                <input className='mb-2' placeholder='Supplier' {...register("supplier" )} />

                <input className='mb-2' placeholder='Photo URL' type="url" {...register("img" )} />
                <input type="submit"  value='Add Item'/>
            </form>
        </div>
        </div>
    );
};

export default AddItem;