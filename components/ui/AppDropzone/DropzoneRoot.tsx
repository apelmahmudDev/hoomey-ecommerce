// @mui material components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	border: "0.5px solid #ABABAB !important",
	borderRadius: 5,

	"& .dz-default": {
		margin: "0 auto !important",
	},

	"& .dz-default .dz-button": {
		// color: `${text.main} !important`,
		// fontSize: `${size.sm} !important`,
	},

	"& .dz-preview .dz-details": {
		// color: `${dark.main} !important`,
		opacity: "1 !important",

		"& .dz-size span, & .dz-filename span": {
			// backgroundColor: `${rgba(white.main, 0.7)} !important`,
		},
	},

	"& .dz-error-message": {
		display: "none !important",
	},

	"& .dz-remove": {
		// color: `${dark.main} !important`,
		textDecoration: "none",

		"&:hover, &:focus": {
			textDecoration: "none !important",
		},
	},
}));
