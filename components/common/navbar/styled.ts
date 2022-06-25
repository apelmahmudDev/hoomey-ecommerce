import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
	currencySelect: {
		background: theme.palette.secondary.main,
		"& .MuiOutlinedInput-root": {
			borderRadius: 0,
			color: theme.palette.common.white,
			"& .MuiSvgIcon-root": {
				color: theme.palette.common.white,
			},
		},
	},
}));
