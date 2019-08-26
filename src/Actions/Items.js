import { 
	      LOAD_ITEMS,
	      FETCH_ITEMS_BEGIN,
	      FETCH_ITEMS_SUCCESS,
	      FETCH_ITEMS_ERROR 

	  } from "../Constants/actions";

import {
	      API_BASE_URL
       } from "../Constants/api";

var itemsUrl = API_BASE_URL+"/items.json";
export const fetchItemsBegin = () => {
     
     console.log("Items Fetch Begin");
	 return ({

	 	     type:FETCH_ITEMS_BEGIN
	 });
}

export const fetchItems = () => {
       
        console.log("Items Fetch Action");
        
	        return (dispatch) => 
	        {
                    
                    dispatch(fetchItemsBegin());
                    fetch(itemsUrl)
                        .then(handleErrors)
                        .then(res => res.json())
                        .then(json => {
                        	dispatch(fetchItemsSuccess(json));
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

export const fetchItemsSuccess = (data) => {
	return({

		  type:FETCH_ITEMS_SUCCESS,
		  data:data
	})
}