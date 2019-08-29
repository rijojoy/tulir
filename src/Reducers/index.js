import { combineReducers } from "redux";
import userDetailsReducer from "./userDetailsReducer";
import cartReducer from "./cartReducer";
import itemsReducer from "./itemsReducer";
import orderConfirmationReducer from "./orderConfirmationReducer";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
    userDetails:userDetailsReducer,
	orders:cartReducer,
	items:itemsReducer,
	orderConfirmationReducer,
	listOrders:ordersReducer
});

export default rootReducer;