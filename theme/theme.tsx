import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
	typography: {
		fontFamily: ["Roboto", "Poppins", "Euclid Circular A", "Sedan", "Oswald", "Lato", "sans-serif"].join(","),
	},
	palette: {
		mode: "light",
		primary: {
			main: "#E8BD83",
			light: "#E2BC82",
		},
		secondary: {
			main: "#292929",
			light: "#282828",
			dark: "#1F1F1F",
		},
		text: {
			primary: "#292929",
			secondary: "#939393",
		},
	},
});

export let appTheme: Theme = createTheme(theme, {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "capitalize",
					borderRadius: 0,
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					border: `1px solid ${theme.palette.primary.main}`,
					backgroundColor: "#fff",
					borderRadius: 0,
					"&:hover:not(.Mui-disabled):before": {
						borderBottom: 0,
					},
					"&::before": {
						borderBottom: 0,
					},
					"&::after": {
						borderBottom: 0,
					},
				},
			},
		},
		// MuiDialog: {
		// 	styleOverrides: {
		// 		root: {
		// 			"& .MuiPaper-root": {
		// 				margin: 16,
		// 				"& .MuiDialogTitle-root": {
		// 					padding: theme.spacing(2, 2, 1, 2),
		// 				},
		// 				"& .MuiDialogContent-root": {
		// 					padding: theme.spacing(2),
		// 				},
		// 			},
		// 		},
		// 	},
		// },
		// MuiDrawer: {
		// 	styleOverrides: {
		// 		root: {
		// 			"& .MuiDrawer-paper": {
		// 				minWidth: 345,
		// 				[theme.breakpoints.down(367)]: {
		// 					width: "100%",
		// 					minWidth: "100%",
		// 				},
		// 			},
		// 		},
		// 	},
		// },
	},
});
appTheme = responsiveFontSizes(appTheme);
