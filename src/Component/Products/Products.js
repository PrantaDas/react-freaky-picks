import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='products'>
            <h1 className='banner-text my-4'>Choose Any of Four Products</h1>
                 <div className='products-container'>
                    <div className='single-product'>
                        {
                            products.map(product=><Product key={product.id} product={product}  handleAddToCart={handleAddToCart}></Product>)
                        }
                            </div>
                    <div>
                        
                            <Cart cart={cart}></Cart>
                        
                    </div>
        </div>
        </div>
    );
};

export default Products;