import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

import { CartReducer } from "./cartReducer";

export const CartContext = createContext();

const Storage = sessionStorage.getItem("cart")
  ? JSON.parse(sessionStorage.getItem("cart"))
  : [];

const initialState = { cartItems: Storage };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({ type: "ADD", payload });
    return state.cartItems;
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE", payload });
    return state.cartItems;
  };

  const increaseQuantity = (payload) => {
    dispatch({ type: "INCQTY", payload });
    return state.cartItems;
  };

  const decreaseQuantity = (payload) => {
    dispatch({ type: "DECQTY", payload });
    return state.cartItems;
  };

  const clearBasket = () => {
    dispatch({ type: "CLEAR", payload: undefined });
    return state.cartItems;
  };

  const getCartItems = () => {
    return state.cartItems;
  };

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getCartItems,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Require children to be a renderable node
};

export default CartContextProvider;
