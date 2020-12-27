import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = key;

    return (
        <StripeCheckoutBtn
            label='Pay Now'
            name='Candra Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token=
        />
    )
}