const INIT_STATE = {
  carts: [],
  totalAmount: 0
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case "REMOVE_CART":
      const data = state.carts.filter((ele) => ele.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "REMOVE_CART_SINGLE":
      const itemIndexRemove = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndexRemove].quantity > 1) {
        state.carts[itemIndexRemove].quantity -= 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndexRemove].quantity === 1) {
        const data = state.carts.filter((ele) => ele.id !== action.payload);
        return {
          ...state,
          carts: data
        };
      }
      break;
    default:
      return state;
  }
};
