import React, { Component } from "react";
import formatCurrency from "../util";

export default class Products extends Component {
  
  render() {
    const { products } = this.props;
    return (
      <div className="products">
        {products.map((product, index) => (
          <li key={index}>
            <div className="product">
              <a href={"#" + index}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </a>
              <div className="product-price">
                <div className="product-price-actual">
                  {formatCurrency(product.price.actual)}
                </div>
                <div className="product-price-display">
                  {formatCurrency(product.price.display)}
                </div>

                <div className="product-discount">{product.discount} % Off</div>
              </div>
              <button
                onClick={() => {
                  this.props.addToCart(product);
                }}
                className="button primary"
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </div>
    );
  }
}
