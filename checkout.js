/*** Payment's Checkout.js***/
/* Integreted with paytrip@container */
import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const CURRENCY = 'USD';

const STRIPE_PUBLISHABLE = "FRONTENDSTRIPEKEY";
const PAYMENT_SERVER_URL = "BACKENDSERVICESERVERURL";

const fromUSDToCent = amount => amount * 100;

const successPayment = data => {
  alert(JSON.stringify(data));
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;