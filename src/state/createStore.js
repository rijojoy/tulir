import React from "react";
import { 
	      createStore as reduxCreateStore,
	      applyMiddleware
	   } 
	   from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/index";

const initialState = {};

const createStore = () => reduxCreateStore(
	                                        rootReducer,
	                                        initialState,
                                            applyMiddleware(thunk)
	                                      );

export default createStore;