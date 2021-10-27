import wishList from "./wishListReducer";
import cartData from "./cartDataReducer";
import loginData from "./loginDataReducer";
import checkOut from "./checkOutReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  wishList: wishList,
  cartData: cartData,
  checkOut: checkOut,
  loginData: loginData,
});

export default rootReducer;
