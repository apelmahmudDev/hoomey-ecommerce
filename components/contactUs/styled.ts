import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
	banner: {
		position: "relative",
		width: "100%",
		height: "100%",
		"&::after": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			height: "100%",
			width: "100%",
			opacity: 0.7,
			background: "#000000",
		},
	},
	content: {
		width: "100%",
		paddingLeft: 8,
		paddingRight: 8,
		textAlign: "center",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",

		"& .MuiTypography-root": {
			color: "#FFFFFF",
		},
	},
}));
