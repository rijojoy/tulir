import * as actionsTypes from "../Constants/actions";

const initialState = {
	loading:true,
	orders:[]
}

const ordersReducer = (state=initialState, action) => {

	switch(action.type){

		case actionsTypes.FETCH_ORDERS_BEGIN:
		return state;
		break;

		case actionsTypes.FETCH_ORDERS_SUCCESS:
		     var cpyState = {...state}
		     console.log("Success fetch");
		     cpyState.items = action.data;
             return cpyState;
        break;

        case actionsTypes.FETCH_ORDERS_ERROR:
             return state;
        break;

        default:
        return state;
	}
}

export default ordersReducer;