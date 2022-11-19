import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { baseApiSlice } from "./api/base";
import { cartSlice } from "./slices/cartSlice";
import { colorSlice } from "./slices/colorSlice";
import { toastifySlice } from "./slices/toastifySlice";
import { warningSlice } from "./slices/warningSlice";

const store = configureStore({
	reducer: {
		[baseApiSlice.reducerPath]: baseApiSlice.reducer,

		[cartSlice.name]: cartSlice.reducer,
		[colorSlice.name]: colorSlice.reducer,
		[toastifySlice.name]: toastifySlice.reducer,
		[warningSlice.name]: warningSlice.reducer,
	},

	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;

export const wrapperStore = () => store;

export const wrapper = createWrapper(wrapperStore, {
	debug: process.env.NODE_ENV === "development", // Console debug output only in development
});
