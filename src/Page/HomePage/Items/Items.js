import useProducts from '../../../hooks/useProduct';
import Item from '../Item/Item';

const Items = () => {

const [products] =useProducts()

    return (
        <div  className='container'>
            <h2 className='mt-4'>This is Item for My Store  </h2>

           <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'> 
           {
                products.slice(0,6).map(product =><Item key={product._id} product={product}></Item>)
            }
           </div>
        </div>
    );
};

export default Items;