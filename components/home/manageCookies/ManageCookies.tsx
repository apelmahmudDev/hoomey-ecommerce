import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";

const ManageCookies: FC = () => {
	return (
		<Box sx={{ background: "#1F1F1F", py: 1.8 }}>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						justifyContent: "flex-end",
						textAlign: "right",
					}}
				>
					<Typography sx={{ fontSize: 12, color: "#fff" }}>
						This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.
					</Typography>
					<Box>
						<Button variant="contained" sx={{ mr: 3 }}>
							Accept Cookies
						</Button>
						<Button variant="text">Accept Cookies</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default ManageCookies;
