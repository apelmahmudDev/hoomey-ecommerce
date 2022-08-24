import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	statusSelect: {
		background: "#FFFFFF",

		[theme.breakpoints.down("sm")]: {
			background: theme.palette.primary.main,
		},

		"& .MuiOutlinedInput-root": {
			height: 30,
			borderRadius: 5,
			borderWidth: 3,
			borderColor: theme.palette.common.black,
			backgroundColor: "#FFFFFF",
			color: theme.palette.common.black,
			"& .MuiSvgIcon-root": {
				color: theme.palette.common.black,
			},
		},
	},
}));
