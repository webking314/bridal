import wishList from "./wishListReducer";
import cartData from "./cartDataReducer";
import checkOut from "./checkOutReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    wishList: wishList,
    cartData: cartData,
    checkOut: checkOut
});

export default rootReducer;