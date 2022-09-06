import { IToastify } from "./../../components/common/Toastify/Toastify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IToastify = {
	desc: "",
	isToastify: false,
	severity: "success",
};

export const toastifySlice = createSlice({
	name: "toastify",
	initialState: initialState as IToastify,
	reducers: {
		toggleToastify: (
			state: IToastify,
			action: PayloadAction<{ desc: string; severity: "success" | "info" | "error" }>,
		) => {
			const { desc, severity } = action.payload;

			state.isToastify = true;
			state.desc = desc;
			state.severity = severity;

			setTimeout(() => {
				state.isToastify = false;
			}, 3000);
		},
	},
});

export const { toggleToastify } = toastifySlice.actions;

export default toastifySlice.reducer;
