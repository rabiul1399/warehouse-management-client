import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProduct = productId => {
   
   
    const [products, setProducts] = useState({});
    useEffect(() => {
        fetch( `http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [productId])
    return [ products,setProducts]
};

export default useProduct;