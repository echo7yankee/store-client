import { SET_LOADING_CATEGORIES_UI, GET_CATEGORIES } from "../types";

const initialState = {
  categories: [],
  isLoading: false
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_CATEGORIES_UI:
      return {
        ...state,
        isLoading: true
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
}

export default productsReducer;
