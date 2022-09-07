import { combineReducers } from "@reduxjs/toolkit";

// slices
import { cartSlice } from "./slices/cartSlice";
import { colorSlice } from "./slices/colorSlice";
import { toastifySlice } from "./slices/toastifySlice";
import { warningSlice } from "./slices/warningSlice";

// api
import { authApi } from "./api/authApi";

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,

	// slices
	[cartSlice.name]: cartSlice.reducer,
	[colorSlice.name]: colorSlice.reducer,
	[toastifySlice.name]: toastifySlice.reducer,
	[warningSlice.name]: warningSlice.reducer,
});

export default rootReducer;
