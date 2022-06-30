import { Box, Button, Container, Grid, TextField, Typography, InputAdornment } from "@mui/material";
import { AppDivider, HeadingText } from "../../styledComponents";
import { LockForInputSvg, MailSvg } from "../../icons";
import { styled } from "@mui/styles";
import { COLORS } from "../../../theme/colors";
import NewCustomerSignUp from "./NewCustomerSignUp";

export const Label = styled(Typography)({
	marginBottom: "10px",
	fontSize: 12,
	fontWeight: 500,
});

export const styles = { b: { border: "1px solid #D6D4D4" }, bg: { background: "#FAFAFA" } };

const ContinueCheckout = () => {
	return (
		<Box mb={9.1}>
			<Container>
				<HeadingText>Continue to checkout</HeadingText>
				<Typography sx={{ my: 2.5, fontsize: 12, fontWeight: 500 }}>Total (1 Item) $50</Typography>
				<Grid container spacing={5}>
					<Grid item xs={12} md={6}>
						<Box sx={{ p: 2.5, ...styles.b, ...styles.bg }}>
							<Typography sx={{ fontWeight: 600 }}>Guest Checkout</Typography>
							<Typography sx={{ fontSize: 12, my: 2.5 }}>Not ready to become a member yet?</Typography>
							<Button variant="contained" color="secondary" fullWidth size="large">
								Continue to checkout
							</Button>
						</Box>
						<AppDivider sx={{ my: 5, fontWeight: 500, color: "#727272" }}>OR</AppDivider>
						<Box sx={{ p: 2.5, ...styles.b, ...styles.bg }}>
							<Typography sx={{ fontWeight: 600 }}>Returning Customer</Typography>
							<Typography sx={{ fontSize: 12, my: 2.5 }}>
								Welcome back, Sign in for faster checkout
							</Typography>
							<Box component="form" autoComplete="off">
								<Box component="div" sx={{ my: 2.5 }}>
									<Label>Email address</Label>
									<TextField
										type="email"
										required
										fullWidth
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<MailSvg />
												</InputAdornment>
											),
										}}
									/>
								</Box>
								<Box component="div" sx={{ my: 2.5 }}>
									<Label>Password</Label>
									<TextField
										type="password"
										required
										fullWidth
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<LockForInputSvg />
												</InputAdornment>
											),
										}}
									/>
								</Box>
								<Typography
									sx={{ fontSize: 12, color: COLORS.GRANITE_GREY, textAlign: "right", mb: 2.5 }}
								>
									Forgot password?
								</Typography>
								<Button type="submit" variant="contained" color="secondary" fullWidth size="large">
									Sign In
								</Button>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<NewCustomerSignUp />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ContinueCheckout;
