import React from "react";
import { createStore as reduxCreateStore } from "redux";
import rootReducer from "../Reducers/index";

const initialState = {};

const createStore = () => reduxCreateStore(rootReducer,initialState);

export default createStore;