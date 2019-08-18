import {
  SET_LOADING_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT_TO_CART
} from "../types";
import axios from "axios";

export const getProducts = () => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING_PRODUCTS
    });
    const response = await axios.get("/products");
    const { data } = response;

    dispatch({
      type: GET_PRODUCTS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = id => async dispatch => {
  try {
    const response = await axios.get(`/products/${id}`);
    const { data } = response;

    dispatch({
      type: GET_PRODUCT,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};

export const addProductToCart = (id, product) => async dispatch => {
  try {
    const response = await axios.post(`/products/${id}`, product);
    const { data } = response;
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};
