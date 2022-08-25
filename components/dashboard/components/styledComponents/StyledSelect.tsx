import { Select, SelectProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(Select)<SelectProps>(
	({ status, color, fs, fw }: { status?: string; fs?: number | string; fw?: string | number; color?: string }) => ({
		"& .MuiOutlinedInput-root, &.MuiInputBase-root": {
			boxShadow: "0px 0px 5px rgba(40, 86, 120, 0.1)",
			borderRadius: 5,
			fontSize: fs || 14,
			fontWeight: fw || 400,
			backgroundColor: status === "Active" ? "#E1FFE0" : status === "Inactive" ? "#FFEAEA" : "#fff",
			color: status === "Active" ? "#04AF00" : status === "Inactive" ? "#FF0303" : "#fff",
		},

		"& fieldset": {
			borderColor: "transparent",
		},
	}),
);

export default StyledSelect;
