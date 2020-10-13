import React, { Component } from "react";
import formatCurreny from "../util";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div>
          {cartItems.length === 0 ? (
            <div className="cart cart-header">Cart is empty</div>
          ) : (
            <div className="cart cart-header">
              You have {cartItems.length} items in the cart{" "}
            </div>
          )}
        </div>
        {this.props.cartItems.length > 0 && (
          <div className="cart">
            <div></div>
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div>
                    <img src={item.image} alt={item.name}></img>
                  </div>
                  <div className="cart-details">
                    <div>{item.name}</div>
                    <div className="cart-price">
                      <button
                        className="right"
                        onClick={() => this.props.cartUpdate(item, -1)}
                      >
                        -
                      </button>
                      <div className="item-count">{item.count}</div>
                      <button
                        className="right"
                        onClick={() => this.props.cartUpdate(item, 1)}
                      >
                        +
                      </button>
                      <div> X {formatCurreny(item.price.actual)}</div>
                      <div className="item-total">
                        {formatCurreny(item.price.actual * item.count)}
                      </div>
                    </div>
                  </div>{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
