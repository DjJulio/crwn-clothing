import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import IconStripe from '../../assets/icon-stripe.svg'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_myIDRisj2PBDfK7ACmdMfiLC00oJsnPOhh';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
          label="Pay Now"
          name="CRWN Clothing Ltd."
          billingAddress
          shippingAddress
          image={IconStripe}
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;