import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PayLogo from "../../assets/favicon.ico";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KdYnEIFy08JQyDemvUQwvTnaT5aRewUwsHZgy9QLvSFBxTwxv9Tp25iGyfMPN85vjuYS9o94QUZDqLRBngpXXTP00rnnmQUov'

  const onToken = token => {
    console.log(token);
    alert('Платеж совершён')
  }

  return(
    <StripeCheckout
      label='Оплатить сейчас'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image={PayLogo}
      description={`Ваша корзина равна: ${price}`}
      amount={priceForStripe}
      panelLabel='Оплатить сейчас'
      token={onToken}
      stripeKey={publishableKey}
    />
  )

}

export default StripeCheckoutButton