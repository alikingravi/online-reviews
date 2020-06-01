import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  GET_AVG_PROD_RATINGS,
  GET_PROD_REVIEWS,
  RESET_ADD_PRODUCTS,
  DELETE_PRODUCT,
  PRODUCTS_LOADING,
} from "./types";
import axios from "axios";
import { tokenConfig } from "./auth-actions";
import { returnErrors } from "./error-actions";

export const getProducts = () => (dispatch, getState) => {
  dispatch(setProductsLoading());
  axios.get("/api/products/list", tokenConfig(getState)).then((res) =>
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    })
  );
};

export const getProduct = (id) => {
  return {
    type: GET_PRODUCT,
    payload: id,
  };
};

export const getAverageProductRatings = () => (dispatch, getState) => {
  axios
    .get("/api/stats/avg-rating", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_AVG_PROD_RATINGS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          "GET_PROD_AVG_FAIL"
        )
      );
    });
};

export const getProductReviews = (productId) => (dispatch, getState) => {
  axios
    .get(`/api/stats/reviews/${productId}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PROD_REVIEWS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          "GET_PROD_REVIEWS_FAIL"
        )
      );
    });
};

export const addProduct = ({
  name,
  price,
  description,
  imageUrl,
  youtubeId,
}) => (dispatch, getState) => {
  const body = JSON.stringify({
    name,
    price,
    description,
    imageUrl,
    youtubeId,
  });
  axios
    .post("/api/products/create-product", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "ADD_PRODUCT_FAIL")
      );
    });
};

export const deleteProduct = (productId) => (dispatch, getState) => {
  axios
    .post("/api/products/delete", { id: productId }, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: productId,
      });
    });
};

export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING,
  };
};

export const resetAddProductSuccess = () => {
  return {
    type: RESET_ADD_PRODUCTS,
  };
};
