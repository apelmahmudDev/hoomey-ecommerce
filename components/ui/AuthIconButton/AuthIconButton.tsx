import { Button, Box } from "@mui/material";
import { COLORS } from "../../../theme/colors";

interface IProps {
	onClick?: () => void;
	icon: React.ReactElement;
	btnText: string;
}

const AuthIconButton = ({ onClick, icon, btnText }: IProps) => {
	return (
		<Button
			sx={{
				my: 2,
				gap: { xs: 2, sm: 3, md: 5 },
				fontSize: { xs: 14, sm: 22 },
				border: `1px solid ${COLORS.BORDER[1]}`,
			}}
			fullWidth
			color="secondary"
			onClick={onClick}
			variant="outlined"
		>
			<Box sx={{ mt: 1.2 }}>{icon}</Box>
			{btnText}
		</Button>
	);
};

export default AuthIconButton;
