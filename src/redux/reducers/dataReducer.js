import {
  GET_PRODUCTS,
  SET_LOADING_UI,
  GET_PRODUCT,
  ADD_PRODUCT_TO_CART
} from "../types";

const initialState = {
  data: [],
  cart: [],
  product: {},
  isLoading: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_UI:
      return {
        ...state,
        isLoading: true
      };

    case GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };

    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    default:
      return state;
  }
};

export default dataReducer;
