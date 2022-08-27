import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { countSlice } from "./slices/countSlice";
import { colorSlice } from "./slices/colorSlice";
import { settingsSlice } from "./slices/settingsSlice";

const rootReducer = combineReducers({
	[countSlice.name]: countSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[colorSlice.name]: colorSlice.reducer,
	[settingsSlice.name]: settingsSlice.reducer,
});

export default rootReducer;
