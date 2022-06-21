import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FC } from "react";

const NewsLetter: FC = () => {
	return (
		<Box my={8}>
			<Box sx={{ background: "#E8BD83", p: 8, textAlign: "center" }}>
				<Container maxWidth="sm">
					<Typography sx={{ fontSize: 24, color: "#292929" }}>SUBSCRIBE</Typography>
					<Typography sx={{ mt: 1, mb: 2 }} variant="body2">
						Sign up to get the latest on sales, new releases and more
					</Typography>
					<Box component="form">
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<TextField
								sx={{ flex: 1 }}
								size="small"
								id="filled-basic"
								label="E-mail address"
								variant="filled"
								type="email"
								required
							/>
							<Button
								sx={{ boxShadow: 0, borderRadius: 0, "&:hover": { boxShadow: 0 } }}
								type="submit"
								variant="contained"
							>
								REGISTER
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default NewsLetter;
