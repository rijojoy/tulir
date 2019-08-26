import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemsReducer from "./itemsReducer";
import orderConfirmationReducer from "./orderConfirmationReducer";

const rootReducer = combineReducers({

	orders:cartReducer,
	items:itemsReducer,
	orderConfirmationReducer
});

export default rootReducer;