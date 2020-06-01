import {
  GET_REVIEWS,
  GET_REVIEW,
  ADD_REVIEW,
  DELETE_REVIEW,
  REVIEWS_LOADING,
  ADDING_REVIEW,
  ADD_REVIEW_FAIL,
  RESET_REVIEW_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: false,
  addingReview: false,
  reviewSuccess: false,
  reviews: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REVIEWS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        loading: false,
      };
    case GET_REVIEW:
      return {
        ...state,
        review: state.reviews.find((rev) => rev.id === action.payload),
      };
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
        addingReview: false,
        reviewSuccess: true,
      };
    case ADDING_REVIEW:
      return {
        ...state,
        addingReview: true,
        reviewSuccess: false,
      };
    case ADD_REVIEW_FAIL:
    case RESET_REVIEW_SUCCESS:
      return {
        ...state,
        addingReview: false,
        reviewSuccess: false,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
