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
        <div className = "cart cart-header">You have {cartItems.length} in the cart {" "}</div>
        )}
      </div>
      <div className = "cart">
          <ul className="cart-items">
            {cartItems.map((item,index)=>(
                <li key ={index}>
                    <div>
                        <img src = {item.image} alt={item.name}></img>
                    </div>
            <div>
            <div>{item.name}</div>
            <button className="right" onClick= {()=>this.props.cartUpdate(item, -1)}>-</button>
            {formatCurreny(item.count)}
            <button className="right" onClick= {()=>this.props.cartUpdate(item, 1)}>+</button>
               
            </div> </li>
            ))}

          </ul>


      </div>
      </div> 
    );
  }
}
