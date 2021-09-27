import wishList from "./wishListReducer";
import checkOut from "./checkOutReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    wishList: wishList,
    checkOut: checkOut
});

export default rootReducer;