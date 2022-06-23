import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
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
