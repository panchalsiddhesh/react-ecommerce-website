import { useDispatch } from "react-redux";
import { ADD, REMOVE, REMOVE_SINGLE } from "../../redux/actions/action";

const CartItem = (props) => {
  const dispatch = useDispatch();

  //add one
  const add = (e) => {
    dispatch(ADD(e));
  };

  //delete item
  const deleteItem = (id) => {
    dispatch(REMOVE(id));
  }  
  
  //remove one
  const remove = (item) => {
    dispatch(REMOVE_SINGLE(item));
  };

  return (
    <div className="cart__item">
      <img src={props.image} alt="" className="cart__image" />
      <div className="cart__info">
        <h2>{props.title}</h2>
        <p>{`${props.price}₹`}</p>
        <div className="cart__input">
          <div className="quantityText">Quantity:</div>
          <button onClick={props.quantity <= 1 ? () => deleteItem(props.id) : () => remove(props)}>-</button>
          <span className="cart__item__quantity">{props.quantity}</span>
          <button onClick={() => add(props)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
