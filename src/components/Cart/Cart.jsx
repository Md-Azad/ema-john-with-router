import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  let total = 0;
  let totalTax = 0;
  let shipping = 0;
  let grandTotal = 0;
  for (const product of cart) {
    total = total + product.price;
    const tax = product.price * 0.07;
    totalTax = totalTax + tax;
    shipping = shipping + product.shipping;
    grandTotal = total + totalTax + shipping;
  }
  return (
    <div className="cart">
      <h4>order summary</h4>
      <h3>total order: {cart.length}</h3>
      <p>total:${total}</p>
      <p>shipping Charge:{shipping.toFixed(1)}</p>
      <p>Tax: {totalTax.toFixed(1)}</p>
      <h6>Grand Total: {grandTotal.toFixed(1)}</h6>
    </div>
  );
};

export default Cart;
