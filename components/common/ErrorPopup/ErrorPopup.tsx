import { FC } from "react";
import { Box, Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const ErrorPopup: FC = () => {
	return (
		<Box>
			<Stack sx={{ width: "100%" }} spacing={2}>
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					This is an error alert — <strong>check it out!</strong>
				</Alert>
				<Alert severity="info">
					<AlertTitle>Info</AlertTitle>
					This is an info alert — <strong>check it out!</strong>
				</Alert>
				<Alert severity="success">
					<AlertTitle>Success</AlertTitle>
					This is a success alert — <strong>check it out!</strong>
				</Alert>
			</Stack>
		</Box>
	);
};

export default ErrorPopup;
