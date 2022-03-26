import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    const[newItem,setNewItem]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    const chooseProduct=()=>{

        const newItems=[...cart,newItem];
        const random=Math.floor(Math.random()*cart.length);
        setNewItem(newItems[random]);
        setCart([]);
        console.log(newItems[random]);  
    }
    const chosseAgain=()=>{
        setCart([]);
        setNewItem([]);
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
                        
                            <Cart key={cart.id} cart={cart} chosseAgain={chosseAgain} chooseProduct={chooseProduct} newItem={newItem}></Cart>
                        
                    </div>
        </div>
        </div>
    );
};

export default Products;