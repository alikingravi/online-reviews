import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_AVG_PROD_RATINGS,
  GET_PROD_REVIEWS,
  PRODUCTS_LOADING,
  RESET_ADD_PRODUCTS,
} from "../actions/types";

const initialState = {
  loading: false,
  addProductSuccess: false,
  products: [],
  avgProdRatings: [],
  productReviews: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
        addProductSuccess: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        addProductSuccess: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: state.products.find((prod) => prod.id == action.payload),
      };
    case GET_AVG_PROD_RATINGS:
      return {
        ...state,
        avgProdRatings: action.payload,
      };
    case GET_PROD_REVIEWS:
      return {
        ...state,
        productReviews: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
        addProductSuccess: true,
        loading: false,
      };
    case RESET_ADD_PRODUCTS:
      return {
        ...state,
        loading: false,
        addProductSuccess: false,
      };
    case DELETE_PRODUCT:
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
