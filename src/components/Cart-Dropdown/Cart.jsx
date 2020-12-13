import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomBtn from '../Custom-Btn/Custom-Btn';
import CartItem from '../Cart-Item/Cart-Item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './Cart.scss';

const Cart = ( { cartItems, history, dispatch } ) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   cartItems.length ? (
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomBtn onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}> 
            GO TO CHECKOUT
        </CustomBtn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));