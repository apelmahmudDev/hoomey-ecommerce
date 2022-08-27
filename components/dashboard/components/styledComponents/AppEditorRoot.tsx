// @mui material components
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const AppEditorRoot = styled(Box)(({ theme }) => ({
	"& .ql-toolbar": {
		borderRadius: "5px 5px 0 0",
		// position: "absolute",
		// bottom: 0,
		// width: "100%",
		// transform: "translateY(100%)",
	},

	"& .ql-container": {
		borderRadius: "0 0 5px 5px",
	},

	"& .ql-editor": {
		"& p": {
			color: theme.palette.text.secondary,
		},
		"& ul li": {
			color: theme.palette.text.secondary,
		},
	},
}));

export default AppEditorRoot;
