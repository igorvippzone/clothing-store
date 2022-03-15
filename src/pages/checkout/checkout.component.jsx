import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Продукт</span>
      </div>
      <div className="header-block">
        <span>Описание</span>
      </div>
      <div className="header-block">
        <span>Количество</span>
      </div>
      <div className="header-block">
        <span>Цена</span>
      </div>
      <div className="header-block">
        <span>Удалить</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>ИТОГ: ${total}</span>
    </div>
    <div className="test-warning" >
      4242 4242 4242 4242 дата: 01/25 CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
