import React from "react";
import "./ProductList.css";
import { PRODUCTS } from "../../data";
import Product from "./Product";

const ProductList = () => {
  return (
    <div>
      <h1>Today's Exclusive Picks</h1>
      <div className="product-list">
      {PRODUCTS.map((product)=>(
        <Product key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
      )
      )}
      </div>
    </div>
  );
};

export default ProductList;
