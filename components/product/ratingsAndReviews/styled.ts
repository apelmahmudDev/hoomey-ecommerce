import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { COLORS } from "../../../theme/colors";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		margin: "30px 0",
		display: "flex",
		alignItems: "flex-start",
		gap: theme.spacing(5),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},
	comment: {
		position: "relative",
		"&::before": {
			content: "''",
			position: "absolute",
			top: 26,
			left: -14,
			width: 30,
			height: 30,
			borderLeft: `1px solid ${COLORS.BORDER}`,
			borderRight: `0px solid ${COLORS.BORDER}`,
			borderBottom: `1px solid ${COLORS.BORDER}`,
			borderTop: `0px solid ${COLORS.BORDER}`,
			background: theme.palette.common.white,
			transform: "rotate(45deg)",

			[theme.breakpoints.down("sm")]: {
				top: 0,
				left: "50%",
				bottom: "100%",
				borderBottom: `0px solid ${COLORS.BORDER}`,
				borderTop: `1px solid ${COLORS.BORDER}`,
				transform: "rotate(45deg)",
				marginTop: -15,
				marginLeft: -15,
			},
		},
	},

	mySwiper: {
		height: "100%",
		width: "100%",
		paddingBottom: 50,
		"& .swiper-button-next": {
			top: "100%",
			marginTop: "-44px",
			width: "88%",
			"&::after": {
				color: "#292929",
				fontSize: 18,
				fontWeight: 700,
			},
		},
		"& .swiper-button-prev": {
			top: "100%",
			marginTop: "-44px",
			width: "88%",
			"&::after": {
				color: "#292929",
				fontSize: 18,
				fontWeight: 700,
			},
		},
		"& .swiper-pagination": {
			postion: "relative",
			"& .swiper-pagination-bullet": {
				postion: "relative",
				background: "#fff",
				height: 20,
				width: 20,
				opacity: 0.5,
			},
			"& .swiper-pagination-bullet-active": {
				background: "#fff",
				border: "none",
				height: 20,
				width: 20,
				fontWeight: 500,
				opacity: 1,
			},
		},
	},
}));
