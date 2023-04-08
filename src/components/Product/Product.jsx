import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price:${price}</p>
        <p>
          <small>Manufacturer:{seller}</small>
        </p>
        <p>
          <small>Ratings:{ratings} stars</small>
        </p>
      </div>
      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
