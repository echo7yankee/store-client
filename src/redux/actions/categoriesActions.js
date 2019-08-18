import axios from "axios";
import { SET_LOADING_CATEGORIES_UI, GET_CATEGORIES } from "../types";

export const getCategories = () => async dispatch => {
  dispatch({
    type: SET_LOADING_CATEGORIES_UI
  });

  const response = await axios.get("/categories");
  const { data } = response;

  dispatch({
    type: GET_CATEGORIES,
    payload: data
  });
};
