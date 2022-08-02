import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { countSlice } from "./slices/countSlice";

const rootReducer = combineReducers({
	[countSlice.name]: countSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
});

export default rootReducer;
