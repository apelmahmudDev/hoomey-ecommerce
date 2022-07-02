import { Button } from "@mui/material";

interface IProps {
	onClick: () => void;
	endIcon: React.ReactNode;
	children: React.ReactNode;
}

const EndIconButton = ({ onClick, endIcon, children }: IProps) => {
	return (
		<Button
			onClick={onClick}
			fullWidth
			variant="contained"
			color="secondary"
			sx={{ display: "flex", alignItems: "center" }}
		>
			<span style={{ flex: 1 }}>{children}</span>
			{endIcon}
		</Button>
	);
};

export default EndIconButton;
