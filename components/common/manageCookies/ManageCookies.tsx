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
						gap: { xs: 2.5, md: 7 },
						flexWrap: "wrap",
						justifyContent: { xs: "center", md: '"flex-end"' },
						textAlign: "right",
					}}
				>
					<Typography
						sx={{
							fontSize: 12,
							color: "#fff",
							textAlign: "center",
							letterSpacing: "0.04em",
							fontFamily: "Poppins",
						}}
					>
						This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.
					</Typography>
					<Box>
						<Button
							variant="contained"
							sx={{ fontSize: 10, mr: 1, fontFamily: "Poppins", letterSpacing: "0.04em" }}
						>
							Accept Cookies
						</Button>
						<Button
							variant="text"
							sx={{
								fontFamily: "Poppins",
								letterSpacing: "0.04em",
								textDecoration: "underline",
								color: "#fff",
								fontSize: 10,
							}}
						>
							Accept Cookies
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default ManageCookies;
