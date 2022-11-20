import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
	accessToken: string | undefined;
}

const initialState: InitialState = {
	accessToken: undefined,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,

	reducers: {
		userLoggedIn: (state: InitialState, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
		},
		userLoggedOut: (state: InitialState, action: PayloadAction) => {
			state.accessToken = undefined;
		},
	},
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
