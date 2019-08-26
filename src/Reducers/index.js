import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import orderConfirmationReducer from "./orderConfirmationReducer";

const rootReducer = combineReducers({

	orders:cartReducer,
	orderConfirmationReducer
});

export default rootReducer;