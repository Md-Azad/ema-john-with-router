import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <p>Price:${price}</p>
      <p>
        <small>Manufacturer:{seller}</small>
      </p>
      <p>
        <small>Ratings:{ratings} stars</small>
      </p>
    </div>
  );
};

export default Product;
