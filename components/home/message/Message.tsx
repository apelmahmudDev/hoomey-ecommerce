import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

const Message: FC = () => {
	return (
		<Box my={8}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: "center" }}>
					<Typography sx={{ fontSize: 12 }}>
						Your number one source for all exquisite products. We're dedicated to providing you the best of
						high quality products, with a focus on dependability, customer service and affordable prices.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Message;
