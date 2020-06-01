import { GET_USERS, DELETE_USER, USER_DELETE_SUCCESS } from "./types";
import { returnErrors } from "./error-actions";
import axios from "axios";
import { tokenConfig } from "./auth-actions";

// Get all users
export const getUsers = () => (dispatch, getState) => {
  axios
    .get("/api/users/list", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "USERS_FAIL")
      );
    });
};

// Delete a user
export const deleteUser = (userId) => (dispatch, getState) => {
  axios
    .post(`/api/users/delete`, { id: userId }, tokenConfig(getState))
    .then(
      (res) =>
        dispatch({
          type: DELETE_USER,
          payload: res.data,
        }),
      dispatch({ type: USER_DELETE_SUCCESS })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "USERS_FAIL")
      );
    });
};
