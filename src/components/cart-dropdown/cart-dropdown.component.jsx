import React from "react";

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />

    <CustomButton>Перейти в корзину</CustomButton>
  </div>
)

export default CartDropdown;