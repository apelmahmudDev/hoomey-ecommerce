import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
	productSection: {
		display: "flex",
		gap: 24,
		overflowX: "auto",
		paddingBottom: 16,
	},

	boldText: {
		fontSize: 18,
		fontWeight: 600,

		[theme.breakpoints.down("sm")]: {
			fontSize: 14,
		},
	},
	lightText: {
		fontSize: 18,
		[theme.breakpoints.down("sm")]: {
			fontSize: 14,
		},
	},
}));
