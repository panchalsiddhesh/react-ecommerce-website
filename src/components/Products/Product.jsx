import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";

const Product = (props) => {
    const [showElement,setShowElement] = useState(false);
    const dispatch = useDispatch();

    const send = (ele) => {
      setShowElement(true);
        setTimeout(() => {
          setShowElement(false);
        },3000);
        // alert("Item added to cart!");
        dispatch(ADD(ele));
    }

  return (
    <>
    {
      showElement ? 
      <div className="product__alert">
        <h3>Item added to cart</h3>
        <button className="product__alert__close" onClick={()=>setShowElement(false)} >X</button>
      </div> : null
    }
    <div className="product">
      <img className="product__image" src={props.image} alt={props.title} />
      <div className="product__info">
        <h2 className="product__title">{props.title}</h2>
        <p>{`${props.price}₹`}</p>
      </div>
      <button onClick={()=>send(props)} className="product__addToCart">Add to Cart</button>
    </div>
    </>
  );
};

export default Product;
