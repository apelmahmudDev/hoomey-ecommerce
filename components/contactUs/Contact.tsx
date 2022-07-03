import { Box, Container, Typography, TextField as MuiTextField, Paper, Button, Grid } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../uiElements";
import { useStyles } from "./styled";
import { styled } from "@mui/styles";
import { COLORS } from "../../theme/colors";

export const Label = styled(Typography)({
	marginBottom: "13px",
	color: COLORS.GRANITE_GREY,
	fontWeight: 400,
});

const TextField = styled(MuiTextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "0 !important",
		fontSize: "16px !important",
		color: "#656565 !important",
	},
});

const Contact = () => {
	const classes = useStyles();
	return (
		<Box mb={9.1}>
			<Container>
				{/* banner */}
				<Box sx={{ height: 343, position: "relative" }}>
					<Box className={classes.banner}>
						<Image src={IMAGES.ContactBanner} alt="banner-hero" layout="fill" objectFit="cover" />
					</Box>
					<Box className={classes.content}>
						<Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
							Contact Us
						</Typography>
						<Typography variant="h6" sx={{ fontWeight: "medium" }}>
							Please provide your feedback regarding how we can improve our business.
						</Typography>
					</Box>
				</Box>
				{/* form */}
				<Container maxWidth="md">
					<Paper sx={{ p: { xs: 2, md: 5 }, transform: "translateY(-60px)" }}>
						<Box component="form" autoComplete="off">
							<Box component="div" sx={{ my: 2.5 }}>
								<Label variant="h6">Full Name</Label>
								<TextField required fullWidth />
							</Box>
							<Box component="div" sx={{ my: 2.5 }}>
								<Label variant="h6">Email address</Label>
								<TextField type="email" required fullWidth />
							</Box>
							<Box component="div" sx={{ my: 2.5 }}>
								<Label variant="h6">Password</Label>
								<TextField type="password" required fullWidth />
							</Box>
							<Box component="div" sx={{ my: 2.5 }}>
								<Label variant="h6">Your Message</Label>
								<TextField multiline rows={5} required fullWidth />
							</Box>
							<Box component="div" sx={{ my: 2.5 }}>
								<Button color="secondary" type="submit" variant="contained" fullWidth>
									Send
								</Button>
							</Box>
						</Box>
					</Paper>

					<Box mt={-2.5}>
						<Grid container spacing={5}>
							<Grid item xs={12} md={6}>
								<Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
									Contact
								</Typography>
								<Typography color="primary" variant="h6" sx={{ fontWeight: 400 }}>
									Loremipsum@abc.com
								</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
									Based in
								</Typography>
								<Typography color="primary" variant="h6" sx={{ fontWeight: 400 }}>
									Los Angeles, California
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Container>
		</Box>
	);
};

export default Contact;
