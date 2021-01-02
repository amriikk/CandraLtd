import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I55CcE9xPrRDISPnzUbH5YgdRVHBEAB27wCGvjEDNA2v6tYNPrmB9U9VnKQJvsXuExfcH9SFDLxK771GUminBeI00cfQrS3FD';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Candra Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutBtn