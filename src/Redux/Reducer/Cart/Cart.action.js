import axios from "axios";

import {
  GET_CART,
  ADD_CART,
  DELETE_CART,
  INCREMENT_OTY,
  DECREMENT_OTY,
} from "./Cart.type";

export const getCart = () => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.yummiliciousCart) {
      const { cart } = JSON.parse(localStorage.getItem("yummiliciousCart"));
      cartData.cart = cart;
    }

    return dispatch({ type: GET_CART, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const addCart = (newFood) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.yummiliciousCart) {
      const { cart } = JSON.parse(localStorage.getItem("yummiliciousCart"));
      cartData.cart = cart;
    }
    cartData.cart.push(newFood);

    localStorage.setItem(
      "yummiliciousCart",
      JSON.stringify({ cart: cartData.cart })
    );

    return dispatch({ type: ADD_CART, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const DeleteCart = (foodID) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.yummiliciousCart) {
      const { cart } = JSON.parse(localStorage.getItem("yummiliciousCart"));
      cartData.cart = cart;
    }

    if (!cartData.cart.length) {
      return dispatch({ type: "ERROR", payload: "Cart is Empty" });
    }

    cartData.cart = cartData.cart.filter(({ _id }) => _id !== foodID);

    localStorage.setItem(
      "yummiliciousCart",
      JSON.stringify({ cart: cartData.cart })
    );

    return dispatch({ type: DELETE_CART, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const IncQty = (foodID) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.yummiliciousCart) {
      const { cart } = JSON.parse(localStorage.getItem("yummiliciousCart"));
      cartData.cart = cart;
    }

    cartData.cart = cartData.cart.map((food) =>
      food._id === foodID
        ? {
            ...food,
            quantity: food.quantity + 1,
            totalPrice: food.price * (food.quantity + 1),
          }
        : food
    );
    localStorage.setItem(
      "yummiliciousCart",
      JSON.stringify({ cart: cartData.cart })
    );

    return dispatch({ type: INCREMENT_OTY, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const DecQty = (foodID) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.yummiliciousCart) {
      const { cart } = JSON.parse(localStorage.getItem("yummiliciousCart"));
      cartData.cart = cart;
    }

    cartData.cart = cartData.cart.map((food) =>
      food._id === foodID
        ? {
            ...food,
            quantity: food.quantity - 1,
            totalPrice: food.price * (food.quantity - 1),
          }
        : food
    );
    localStorage.setItem(
      "yummiliciousCart",
      JSON.stringify({ cart: cartData.cart })
    );

    return dispatch({ type: DECREMENT_OTY, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
