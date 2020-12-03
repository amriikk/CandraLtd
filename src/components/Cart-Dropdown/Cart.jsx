import React from 'react';
import { connect } from 'react-redux'

import CustomBtn from '../Custom-Btn/Custom-Btn';
import CartItem from '../Cart-Item/Cart-Item';

import './Cart.scss';

const Cart = ( { cartItems } ) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={CartItem} /> 
            ))}
        </div>
        <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(Cart);