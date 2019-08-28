import * as actionsTypes from "../Constants/actions";

const initialState = {

	userDeatils: {
		name: ''
	}
};

const setUserDetails = (state=initialState,action) => {

	switch(action.type) {

		case actionsTypes.SET_USER_DETAILS:
		     var cpyState = {...state.userDeatils};
		         cpyState.name = action.data.name;
		     return cpyState;

		break;

		default:
		     return state; 
	}
}

export default setUserDetails;
