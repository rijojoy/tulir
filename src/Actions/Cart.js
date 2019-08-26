import { ADD_CART } from "../Constants/actions";

export const Cart = (data) => {

	console.log("Herrrr");
	return dispatch => {

		dispatch({
			type:ADD_CART,
			data:data
		});
	}
}