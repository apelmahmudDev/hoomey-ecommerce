import { Box, Button, Container, Grid, TextField, Typography, InputAdornment } from "@mui/material";
import { AppDivider, HeadingText } from "../../styledComponents";
import { LockForInputSvg, MailSvg } from "../../icons";
import { styled } from "@mui/system";
import { COLORS } from "../../../theme/colors";
import NewCustomerSignUp from "./NewCustomerSignUp";
import { useRouter } from "next/router";
import { ForgetPassword } from "../../common/AuthPopup";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "../../../utils/validations/regex";

interface Inputs {
	email: string;
	password: string;
}

export const Label = styled(Typography)({
	marginBottom: "10px",
	fontWeight: 500,
	fontSize: 12,
});

export const styles = { b: { border: "1px solid #D6D4D4" }, bg: { background: "#FAFAFA" } };

const ContinueCheckout = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [isForgetPassOpen, setIsForgetPassOpen] = useState(false);

	const handleTogglePopup = (boolean: boolean) => {
		setIsForgetPassOpen(boolean);
	};

	// handle form
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
							<Button
								onClick={() => router.push("/checkout")}
								variant="contained"
								color="secondary"
								fullWidth
								size="large"
							>
								Continue to checkout
							</Button>
						</Box>
						<AppDivider sx={{ my: 5, fontWeight: 500, color: "#727272" }}>OR</AppDivider>
						<Box sx={{ p: 2.5, ...styles.b, ...styles.bg }}>
							<Typography sx={{ fontWeight: 600 }}>Returning Customer</Typography>
							<Typography sx={{ fontSize: 12, my: 2.5 }}>
								Welcome back, Sign in for faster checkout
							</Typography>
							<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
								<Box component="div" sx={{ my: 2.5 }}>
									<Label>Email address</Label>
									<TextField
										fullWidth
										type="email"
										error={errors.email ? true : false}
										{...register("email", { required: true, pattern: regex.email })}
										helperText={errors.email && "The email address must be valid and include @"}
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
										fullWidth
										type="password"
										error={errors.password ? true : false}
										{...register("password", {
											required: "Password is required",
										})}
										helperText={errors?.password?.message}
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
									onClick={() => handleTogglePopup(true)}
									sx={{
										cursor: "pointer",
										fontSize: 12,
										color: COLORS.GRANITE_GREY,
										textAlign: "right",
										mb: 2.5,
									}}
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

			{/* popup - forgot password */}
			<ForgetPassword isOpen={isForgetPassOpen} handleTogglePopup={handleTogglePopup} />
		</Box>
	);
};

export default ContinueCheckout;
