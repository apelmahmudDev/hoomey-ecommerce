import { combineReducers } from "@reduxjs/toolkit";

// slices
import { cartSlice } from "./slices/cartSlice";
import { colorSlice } from "./slices/colorSlice";
import { toastifySlice } from "./slices/toastifySlice";
import { warningSlice } from "./slices/warningSlice";

// api
import { authApi } from "./api/authApi";
import { categoryApi } from "./api/categoryApi";
import { productApi } from "./api/productApi";
import { tagApi } from "./api/tagApi";

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[categoryApi.reducerPath]: categoryApi.reducer,
	[productApi.reducerPath]: productApi.reducer,
	[tagApi.reducerPath]: tagApi.reducer,

	// slices
	[cartSlice.name]: cartSlice.reducer,
	[colorSlice.name]: colorSlice.reducer,
	[toastifySlice.name]: toastifySlice.reducer,
	[warningSlice.name]: warningSlice.reducer,

	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default rootReducer;
