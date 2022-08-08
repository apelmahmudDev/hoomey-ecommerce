import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { countSlice } from "./slices/countSlice";
import { colorSlice } from "./slices/colorSlice";

const rootReducer = combineReducers({
	[countSlice.name]: countSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[colorSlice.name]: colorSlice.reducer,
});

export default rootReducer;
