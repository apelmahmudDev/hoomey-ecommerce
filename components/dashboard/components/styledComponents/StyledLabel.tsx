import { InputLabel, InputLabelProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface StyledInputLabelProps extends InputLabelProps {
	fw?: string | number;
}

const StyledLabel = styled(InputLabel)<StyledInputLabelProps>(({ theme, fw }) => ({
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(1.25),
	fontWeight: fw || 400,
}));

export default StyledLabel;
