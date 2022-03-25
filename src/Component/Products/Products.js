import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1 className='banner-text'>Choose Any of Four Products</h1>
                 <div className='products-container'>
                    <div className='single-product'>
                        {
                            products.map(product=><Product key={product.id} product={product}></Product>)
                        }
                            </div>
                    <div>
                        <p>This is cart</p>
                    </div>
        </div>
        </div>
    );
};

export default Products;