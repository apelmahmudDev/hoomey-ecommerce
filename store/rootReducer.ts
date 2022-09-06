import { combineReducers } from "@reduxjs/toolkit";

// slices
import { cartSlice } from "./slices/cartSlice";
import { countSlice } from "./slices/countSlice";
import { colorSlice } from "./slices/colorSlice";
import { toastifySlice } from "./slices/toastifySlice";

// api
import { authApi } from "./api/authApi";

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,

	// slices
	[countSlice.name]: countSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[colorSlice.name]: colorSlice.reducer,
	[toastifySlice.name]: toastifySlice.reducer,
});

export default rootReducer;
