import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-container'>
            <p className='fw-bold fs-4 cart-title'>Selected Headphones</p>
            <div className='added-item h-25'>

            </div>
            <div className='btn-container'>
                <div className='p2'>
                    <button className='btn-choose'>Chosse 1 for Me!</button>
                </div>
                <div className='p-2'>
                     <button className='btn-choose'>Choose Again</button>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;