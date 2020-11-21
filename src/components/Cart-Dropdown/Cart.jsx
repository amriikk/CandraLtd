import React from 'react';
import CustomBtn from '../Custom-Btn/Custom-Btn';

import './Cart.scss';

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
)

export default Cart;