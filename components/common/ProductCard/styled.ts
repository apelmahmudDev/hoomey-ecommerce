import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
	latestProductCard: {
		position: "relative",
		boxShadow: "none",
		borderRadius: 0,
		"& .MuiCardContent-root": {
			padding: 0,
			paddingTop: 10,
		},
		"& .MuiTypography-root": {
			fontFamily: "Poppins",
			fontWeight: 500,
		},
	},
	del: {
		color: "#757575",
	},
	discountChip: {
		position: "absolute",
		top: 20,
		right: 20,
		fontSize: 10,
		fontWeight: 500,
		color: "#000000",
		background: "#E8BD83",
		borderRadius: 30,
		padding: "2px 8px",
	},
}));
