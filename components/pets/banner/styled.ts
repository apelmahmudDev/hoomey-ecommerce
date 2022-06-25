import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
	content: {
		textAlign: "center",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",

		"& .MuiButton-root, & .MuiTypography-root": {
			textTransform: "uppercase",
		},

		"& .MuiTypography-root": {
			fontSize: 30,
			color: "#FFFFFF",
			letterSpacing: "0.22em",
		},

		"& .MuiButton-root": {
			fontSize: 14,
			marginTop: 30,
			borderRadius: 2,
			padding: theme.spacing(1.3, 3),
			fontFamily: "Poppins",
			fontWeight: 400,
			letterSpacing: "0.3em",
		},
	},
}));
