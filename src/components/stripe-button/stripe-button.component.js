import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const CheckoutButton = ({price}) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51Hi2rjGu07k8D9YGl8Scs2URXFuvLdjhgDwxL9FPtK4kzm64QUOEWiyUPlqO8Rj4O0ymyUnD2iHPpEApmeg8Qef100DgBN8ibU'

  const onToken = token => {
    console.log(token)
    alert('Payment succesful')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name= 'Lavinia Clothing'
      billingAddress
      shippingAddress
      image= 'https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}    
    
    />
  )
}

export default CheckoutButton