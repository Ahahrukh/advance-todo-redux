
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import todoReducer from "./reducer";
import { thunk } from "redux-thunk";

export const store = createStore(todoReducer,applyMiddleware(thunk))