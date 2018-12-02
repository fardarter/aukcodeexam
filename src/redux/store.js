import { createStore } from "redux";
import list from "./modules/list";
import { combineReducers } from "redux";
import initialState from "./initialState";
const reducers = combineReducers({ list });
export const store = createStore(reducers, initialState);
