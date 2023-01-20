import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./MyCart.css";

const MyCart = () => {
  const [price, setPrice] = useState(0);
  const getData = useSelector((state) => state.cartReducer.carts);
  const total = useCallback(() => {
    let tempPrice = 0;
    getData.map((ele, k) => {
      tempPrice += Number(ele.price) * Number(ele.quantity);
    });
    setPrice(tempPrice);
  });

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      <h1>My Cart</h1>

      {getData.length >= 1 ? (
        <>
          <div className="cart">
            {getData.map((ele) => {
              return (
                <CartItem
                  key={ele.id}
                  id={ele.id}
                  image={ele.image}
                  title={ele.title}
                  price={ele.price}
                  quantity={ele.quantity}
                />
              );
            })}
          </div>
          <div className="cart__total">
            <h3>Total:</h3>
            <p className="cart__totalAmount">{`${price}₹`}</p>
          </div>
        </>
      ) : (
        <h2>Your Cart Is Empty!</h2>
      )}
    </div>
  );
};

export default MyCart;
