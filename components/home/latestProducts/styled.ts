import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
	mySwiper: {
		paddingBottom: 50,
		"& .swiper-pagination": {
			"& .swiper-pagination-bullet": {
				background: "#C4C4C4",
				opacity: 1,
				height: 10,
				width: 10,
			},
			"& .swiper-pagination-bullet-active": {
				background: "#fff",
				border: "2px solid #E8BD83",
				height: 15,
				width: 15,
			},
		},
	},
	latestProductCard: {
		position: "relative",
		boxShadow: "none",
		borderRadius: 0,
		"& .MuiCardContent-root": {
			padding: 0,
			paddingTop: 10,
		},
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
