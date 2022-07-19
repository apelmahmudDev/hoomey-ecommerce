import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
	margin: "20px 0",
}));

const StyedTextField = styled(TextField)(({ theme }) => ({
	width: "100%",
	// "& .MuiOutlinedInput-input": {
	// 	padding: 0,
	// 	paddingRight: 14,
	// 	fontSize: 20,
	// },
	"& .MuiOutlinedInput-root": { paddingLeft: 0 },
	// "& .MuiInputAdornment-root": {
	// 	width: 55,
	// 	height: 55,
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	// background: theme.palette.secondary.main,
	// },
	// "& .MuiInputAdornment-positionEnd": {
	// 	// background: "white",
	// 	// width: 0,
	// 	// height: 55,
	// },
}));

export { StyedTextField, StyledBox };
