import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	languageSelect: {
		background: theme.palette.primary.main,
		"& .MuiOutlinedInput-root": {
			borderRadius: 0,
			color: theme.palette.secondary.main,
			"& .MuiSvgIcon-root": {
				color: theme.palette.secondary.main,
			},
		},
	},
}));
