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

/*** Fetch Orders ***/
export const fetchOrdersBegin = () => {
     
     console.log("Orders Fetch Begin");
	 return ({

	 	     type:ActionTypes.FETCH_ORDERS_BEGIN
	 });
}

export const fetchOrders = () => {
       
        console.log("Orders Fetch Action");
        
	        return (dispatch) => 
	        {
                    
                    dispatch(fetchOrdersBegin());
                    fetch(ordersUrl)
                        .then(handleErrors)
                        .then(res => res.json())
                        .then(json => {
                        	dispatch(fetchOrdersSuccess(json));
                        	return json;
                        })
	        };
	        
}

function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchOrdersSuccess = (data) => {
	return({

		  type:ActionTypes.FETCH_ORDERS_SUCCESS,
		  data:data
	})
}