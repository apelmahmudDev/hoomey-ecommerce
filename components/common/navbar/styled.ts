import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
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

	// similar procut view styles
	mySwiper: {
		paddingBottom: 30,
		"& .swiper-pagination": {
			"& .swiper-pagination-bullet": {
				background: "#fff",
				opacity: 1,
				height: 8,
				width: 8,
			},
			"& .swiper-pagination-bullet-active": {
				background: "#E2BC82",
			},
		},
	},

	rating: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		gap: 1,

		"& .MuiRating-icon": {
			fontSize: 10,
			color: theme.palette.primary.light,
		},

		"& .MuiTypography-root": {
			fontSize: 8,
		},
	},

	buttonArea: {
		"& .MuiButton-root": {
			marginLeft: 5,
			height: 20,
			fontSize: 10,
			background: theme.palette.common.white,
		},

		"& .MuiSvgIcon-root": {
			height: 16,
			width: 15,
		},
	},

	// hover menu
	dropdown: {
		position: "relative",
		dislplay: "inline-block",

		"&:hover": {
			"& .dropdownContent": {
				display: "block",
			},
		},

		"& .dropdownContent": {
			minWidth: 982,
			// minWidth: "100%",
			display: "none",
			position: "absolute",
			background: "#fff",

			boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
			zIndex: 1,
		},
	},
}));
