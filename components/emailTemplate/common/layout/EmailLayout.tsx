import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const EmailLayout = ({ children }: { children: ReactNode }) => {
	return (
		<Container maxWidth="md">
			<Box sx={{ bgcolor: "background.paper" }}>
				<Header />
				<Box py={3.5} px={5}>
					{/* body-content */}
					{children}
				</Box>
				<Footer />
			</Box>
		</Container>
	);
};

export default EmailLayout;
