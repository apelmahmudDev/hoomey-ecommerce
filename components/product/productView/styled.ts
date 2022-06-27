import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { COLORS } from "../../../theme/colors";

export const useStyles = makeStyles((theme: Theme) => ({
	discountChip: {
		position: "absolute",
		top: 20,
		right: 20,
		fontSize: 12,
		fontWeight: 500,
		color: "#000000",
		background: "#E8BD83",
		borderRadius: 30,
		padding: "2px 8px",
	},
	del: {
		color: "#757575",
	},
	viewTop: {
		display: "flex",
		alignItems: "flex-start",
		gap: 2,
	},
	chartBtn: {
		padding: 0,
		fontSize: 12,
		textDecoration: "underline",
	},
	accordion: {
		boxShadow: "none !important",
		"& .MuiAccordionSummary-root": {
			padding: 0,
			"& .MuiAccordionSummary-content": {
				margin: "0 !important",
				"& .MuiTypography-root": {
					fontSize: 14,
					fontWeight: 500,
					color: COLORS.GRANITE_GREY,
				},
			},
		},
		"& .MuiAccordionDetails-root": {
			marginTop: -15,
			"& .MuiTypography-root": {
				fontSize: 12,
				color: COLORS.GRANITE_GREY,
			},
		},
	},

	formControl: {
		"& .MuiInput-root": {
			// color: theme.palette.common.white,
			fontSize: 10,
			"& .MuiSvgIcon-root": {
				color: COLORS.GRANITE_GREY,
			},
		},
		"& .MuiOutlinedInput-root": { color: "#fff" },
		"& .MuiInput-root::before, & .MuiInput-root::after": {
			borderBottom: 0,
		},
		"& .css-bcbryb-MuiInputBase-root-MuiInput-root-MuiSelect-root:hover:not(.Mui-disabled):before": {
			borderBottom: 0,
		},
	},

	smallGreyText: {
		color: COLORS.GRANITE_GREY,
		fontSize: 10,
		fontWeight: 500,
	},
}));
