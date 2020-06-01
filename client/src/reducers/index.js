import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import errorReducer from "./error-reducer";
import productReducer from "./product-reducer";
import reviewReducer from "./review-reducer";
import userReducer from "./user-reducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  products: productReducer,
  reviews: reviewReducer,
  users: userReducer,
});
