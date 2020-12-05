import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CustomBtn from '../Custom-Btn/Custom-Btn';
import CartItem from '../Cart-Item/Cart-Item';
import { selectCartItems } from '../../redux/cart/cart.selectors'

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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Cart);