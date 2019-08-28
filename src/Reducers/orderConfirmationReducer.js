import * as actionsTypes from "../Constants/actions";

const initialstate = {};
const orderConfirmationReducer = (state = initialstate, action) => {

    switch(action) {

    	case actionsTypes.CONFIRM_ORDER:
    	console.log("Order Data");
    	console.log(action.data);
    	return state;
    	break;

    	default:
    	return state;

    }

}

export default orderConfirmationReducer;