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
            
            
        </div>
    );
};

export default Product;