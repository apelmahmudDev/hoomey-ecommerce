import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
	mySwiper: {
		height: 597,
		maxHeight: 597,
		"& .swiper-pagination": {
			"& .swiper-pagination-bullet": {
				background: "#fff",
				opacity: 1,
				height: 10,
				width: 10,
			},
			"& .swiper-pagination-bullet-active": {
				background: "#E2BC82",
			},
		},
	},
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
		},

		"& .MuiButton-root": {
			marginTop: theme.spacing(3),
			padding: theme.spacing(1, 3),
		},
	},
}));
