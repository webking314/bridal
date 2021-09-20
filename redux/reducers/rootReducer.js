import wishList from "./wishListReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    wishList: wishList,
});

export default rootReducer;