import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,chosseAgain,chooseProduct,newItem}=props;
    
    console.log(cart);
    
    
    return (
        <div className='cart-container'>
            <p className='fw-bold fs-4 cart-title'>Selected Headphones</p>
            <div className='added-item h-50'>
               {
                   cart.map(item=>(
                    <div className='cart-details'>
                        <div><img className='cart-picture' src={item.picture} alt="" /></div>
                        <p>{item.name}</p>
                        
                    </div>
                   ))
               }
               <p className='select-item'>Your Referred item is:{newItem.name}</p>
            </div>
            <div className='btn-container'>
                <div className='p2'>
                    <button onClick={chooseProduct} className='btn-choose'>Chosse 1 for Me!</button>
                </div>
                <div className='p-2'>
                     <button onClick={chosseAgain} className='btn-choose'>Choose Again</button>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;