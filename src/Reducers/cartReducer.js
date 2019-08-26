import * as actionsTypes from "../Constants/actions";

const initialState = {

	orders:[]
};

const cartReducer  = (state = initialState, action ) => {
	switch(action.type){

		case actionsTypes.ADD_CART:
             state.orders.push(action.data);
		return state;
		break;

		default:
		return state;
	}

};

export default cartReducer;