import * as actionsTypes from "../Constants/actions";

const initialState = {
	loading:true,
	items:[]
}

const itemsReducer = (state=initialState, action) => {

	switch(action.type){

		case actionsTypes.FETCH_ITEMS_BEGIN:
		return state;
		break;

		case actionsTypes.FETCH_ITEMS_SUCCESS:
		     var cpyState = {...state}
		     cpyState.items = action.data;
             return cpyState;
        break;

        case actionsTypes.FETCH_ITEMS_ERROR:
             return state;
        break;

        default:
        return state;
	}
}

export default itemsReducer;