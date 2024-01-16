import { combineReducers } from "redux";
import productsReducer from "./Products/productsReducer";
import cartReducer from "./Cart/cartReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    cartState:cartReducer
})

export default rootReducer