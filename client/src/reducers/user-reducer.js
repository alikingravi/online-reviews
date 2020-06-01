import {
  GET_USERS,
  DELETE_USER,
  USER_DELETE_SUCCESS,
  USER_FAIL,
} from "../actions/types";

const initialState = {
  users: [],
  deleteSuccess: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        deleteSuccess: false,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    case USER_FAIL:
      return {
        ...state,
        deleteSuccess: false,
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        deleteSuccess: true,
      };
    default:
      return state;
  }
}
