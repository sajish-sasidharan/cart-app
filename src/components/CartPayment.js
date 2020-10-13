import React, { Component } from "react";
import formatCurreny from "../util";

export default class CartPayment extends Component {

    // Total price calculation
  calculateTotal = (cartItems) => {
    return formatCurreny(
      cartItems.reduce((a, c) => a + c.price.display * c.count, 0)
    );
  };
  // Total discount calculation
  calculateDiscount = (cartItems) => {
    return formatCurreny(
      cartItems.reduce(
        (a, c) => a + (c.price.display * c.count - c.price.actual * c.count),
        0
      )
    );
  };

  // Actual price calculation
  calculatePrice = (cartItems) => {
    return formatCurreny(
      cartItems.reduce((a, c) => a + c.price.actual * c.count, 0)
    );
  };
  render() {
    const { cartItems } = this.props;
    return (
      <div className="cart-payment">
        <div>
          <div className="cart cart-header">Price Details</div>
        </div>
        <div>
          <ul className="cart-paymant-items">
            <li>
              <div className="product-actrual">
                <div>
                  {cartItems.reduce((a, c) => a + c.count, 0)} Total items :
                </div>
                {this.calculateTotal(cartItems)}
              </div>

              <div className="product-actrual">
                <div>Discount : </div>
                {this.calculateDiscount(cartItems)}
              </div>
            </li>
          </ul>
          <div className="line"></div>
          <div className="product-total">
            <div>Order total :</div>
            {this.calculatePrice(cartItems)}
          </div>
          <div className="cart-discount-item">
            You will save {this.calculateDiscount(cartItems)}
            on this order{" "}
          </div>
        </div>
      </div>
    );
  }
}
