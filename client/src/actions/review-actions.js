import {
  REVIEWS_LOADING,
  DELETE_REVIEW,
  GET_REVIEWS,
  ADD_REVIEW,
  ADD_REVIEW_FAIL,
  ADDING_REVIEW,
  RESET_REVIEW_SUCCESS,
} from "./types";
import axios from "axios";
import { tokenConfig } from "./auth-actions";
import { returnErrors } from "./error-actions";

export const getMyReviews = () => (dispatch, getState) => {
  dispatch(setReviewsLoading());
  axios.get("/api/reviews/list", tokenConfig(getState)).then((res) =>
    dispatch({
      type: GET_REVIEWS,
      payload: res.data,
    })
  );
};

export const addReview = (review, productId) => (dispatch, getState) => {
  dispatch(setAddingReviews());
  axios
    .post(
      `/api/reviews/create-review/${productId}`,
      review,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_REVIEW,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "NEW_REVIEW_FAIL")
      );
      dispatch({
        type: ADD_REVIEW_FAIL,
      });
    });
};

export const deleteReview = (id) => {
  return {
    type: DELETE_REVIEW,
    payload: id,
  };
};

export const setReviewsLoading = () => {
  return {
    type: REVIEWS_LOADING,
  };
};

export const setAddingReviews = () => {
  return {
    type: ADDING_REVIEW,
  };
};

export const resetReviewSuccess = () => {
  return {
    type: RESET_REVIEW_SUCCESS,
  };
};
