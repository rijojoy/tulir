import { ADD_CART } from "../Constants/actions";

export const Cart = (data) => {

	return {
			 type:ADD_CART,
			 data:data
           };
};