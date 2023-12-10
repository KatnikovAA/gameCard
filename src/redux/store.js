import { StoreCreator } from "redux";
import { legacy_createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { legacy_createStore as createStore} from 'redux';

const store = createStore(reducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;