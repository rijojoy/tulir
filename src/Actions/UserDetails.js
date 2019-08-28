import { SET_USER_DETAILS } from "../Constants/actions";

export const setUserDetails = (data) => {

	return {

		     type:SET_USER_DETAILS,
		     data:data
	}
};

