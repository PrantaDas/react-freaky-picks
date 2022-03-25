import React from 'react';
import './Product.css'

const Product = (props) => {
    const{id,name,picture,price}=props.product;
    return (
        <div className='product'>
            <div className='image-container'>
                <img className='head-phone' src={picture} alt="" />
            </div>
            <div className='details-container'>
                <p className='text'>Name:{name}</p>
                <p className='price'>Price{price}</p>
            </div>
            <div>
                 <button className='btn'> Add to cart</button>
            </div>
            {/* <button className='btn-1 fw-bold'>Add to Cart<i class="fa-solid fa-cart-plus p-2"></i></button> */}
            
            
            
        </div>
    );
};

export default Product;