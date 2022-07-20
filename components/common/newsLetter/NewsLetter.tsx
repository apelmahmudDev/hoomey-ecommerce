import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useStyles } from "./styled";

const NewsLetter: FC = () => {
	const classes = useStyles();

	return (
		<Box my={9.1}>
			<Box className={classes.root} sx={{ background: "#E8BD83", py: 7, px: 0, textAlign: "center" }}>
				<Container maxWidth="sm">
					<Typography variant="h5" sx={{ fontFamily: "Oswald", textTransform: "uppercase" }}>
						SUBSCRIBE
					</Typography>
					<Typography
						sx={{ fontFamily: "Lato", letterSpacing: "0.04em", fontSize: 12, mt: 2, mb: 2.5 }}
						variant="body2"
					>
						Sign up to get the latest on sales, new releases and more
					</Typography>
					<Box component="form">
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<TextField
								className="text-field"
								size="small"
								id="filled-basic"
								label="E-mail address"
								variant="filled"
								type="email"
								required
							/>
							<Button className="button" type="submit" variant="contained" color="secondary">
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
