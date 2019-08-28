import * as ActionTypes from "../Constants/actions";
import {
	      API_BASE_URL
       } from "../Constants/api";

var ordersUrl = API_BASE_URL+"/orders.json";
export const beginSaveOrder = () => {
	 console.log("Begin Save Order");
	 return {
            
            type:ActionTypes.BEGIN_SAVE_ORDER
   	 }
}

export const saveOrder = (data) => {
     
     return (dispatch) =>
     {
            dispatch(beginSaveOrder());
            console.log(data);
            fetch(  ordersUrl, 
                   {
					    method: 'post',
					    headers: 
					    {
					         Accept: "application/json",
					        "Content-Type": "application/json",
					        'Access-Control-Allow-Origin': '*'
					    },
                        body: JSON.stringify(data)
                   }
                )
                .then(
                	 function (response) 
                	 {
                                  return response.json(); //response.json() is resolving its promise. It waits for the body to load
                     }
                    )
                .then(
                	function (responseData) {
                       console.log("Response");
                       console.log(responseData);
                    }
                );
             
     }
}

export const completeSaveOrder = (data) => {

	 return {

	 	      type:ActionTypes.COMPLETE_SAVE_ORDER,
	 	      data:data
	 }
}

export const errorSaveOrder = () => {

	return {

		type:ActionTypes.ERROR_SAVE_ORDER
	}
}