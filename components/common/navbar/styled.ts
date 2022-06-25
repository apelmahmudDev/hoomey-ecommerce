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

	// card details styles
	formControl: {
		"& .MuiInput-root": {
			color: theme.palette.common.white,
			fontSize: 10,
			"& .MuiSvgIcon-root": {
				color: theme.palette.common.white,
			},
		},

		"& .MuiInput-root::before, & .MuiInput-root::after": {
			borderBottom: 0,
		},
		"& .css-bcbryb-MuiInputBase-root-MuiInput-root-MuiSelect-root:hover:not(.Mui-disabled):before": {
			borderBottom: 0,
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
}));
