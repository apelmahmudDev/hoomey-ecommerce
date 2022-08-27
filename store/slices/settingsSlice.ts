import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
	tab: string;
}

const initialState: SettingsState = {
	tab: "settings",
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState: initialState as SettingsState,
	reducers: {
		tabSwitch: (state: SettingsState, action: PayloadAction<string>) => {
			state.tab = action.payload;
		},
	},
});

export const { tabSwitch } = settingsSlice.actions;

export default settingsSlice.reducer;
