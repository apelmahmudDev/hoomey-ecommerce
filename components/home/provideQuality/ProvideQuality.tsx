import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

const ProvideQuality: FC = () => {
	return (
		<Box my={8}>
			<Container maxWidth="lg">
				<Box sx={{ background: "#292929", p: 8, textAlign: "center" }}>
					<Typography sx={{ fontSize: 40, color: "#fff" }}>We Provide Quality With Perfection</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default ProvideQuality;
