import { FC, ReactNode, useEffect, useState } from "react";
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	IconButton,
	InputAdornment,
	TextField,
	LinearProgress,
	Typography,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { AuthIconButton, CloseIconButton } from "../../../ui";
import Visibility from "@mui/icons-material/Visibility";
import {
	ApplesSvg,
	EyeCloseSvg,
	FacebookCircleSvg,
	GoogleCircleSvg,
	LockFillSvg,
	MailFillSvg,
	PersonFillSvg,
} from "../../../icons";
import { Label } from "../../../styledComponents";
import {
	AuthDevider,
	AuthFooterTitle,
	AuthSubtitle,
	AuthTitle,
	StyedTextField,
	StyledBox,
	StyledFooterBox,
} from "../styledComponents";
import { isStrongPassword } from "../../../../utils/validations";

interface State {
	newPassword: string;
	showPassword: boolean;
	confirmPassword: string;
	showConfirmPassword: boolean;
}

const FieldIcon = ({ icon }: { icon: ReactNode }) => {
	return (
		<InputAdornment position="start" sx={{ "& svg": { background: "#292929" } }}>
			{icon}
		</InputAdornment>
	);
};

const SignUp: FC = () => {
	const [isStrongPass, setIsStrongPass] = useState(false);
	const [isSignUpOpen, setIsSignUpOpen] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsSignUpOpen(boolean);
	};

	const [values, setValues] = useState<State>({
		newPassword: "",
		confirmPassword: "",
		showPassword: false,
		showConfirmPassword: false,
	});

	// password check
	useEffect(() => {
		if (isStrongPassword(values.newPassword)) {
			setIsStrongPass(true);
		} else {
			setIsStrongPass(false);
		}
	}, [values]);

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	// handle new password - show
	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	// handle confirm password - show
	const handleClickConfirmShowPassword = () => {
		setValues({
			...values,
			showConfirmPassword: !values.showConfirmPassword,
		});
	};

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	// common components
	// for new password
	const InputAdornmentElNewPass = () => {
		return (
			<InputAdornment position="end">
				<IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
					{values.showPassword ? <Visibility /> : <EyeCloseSvg />}
				</IconButton>
			</InputAdornment>
		);
	};
	// for confrim password
	const InputAdornmentElConfirmPass = () => {
		return (
			<InputAdornment position="end">
				<IconButton onClick={handleClickConfirmShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
					{values.showConfirmPassword ? <Visibility /> : <EyeCloseSvg />}
				</IconButton>
			</InputAdornment>
		);
	};

	return (
		<Dialog
			open={isSignUpOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { xs: "auto", sm: 620, md: 900 } } }}
		>
			<DialogContent sx={{ py: 3, px: 5 }}>
				<CloseIconButton onClick={() => handleTogglePopup(false)} />
				<Box>
					<AuthTitle>Sign Up</AuthTitle>
					<AuthDevider />
					<AuthSubtitle>
						Registering makes checkout fast and easy and saves your order information in your account.
					</AuthSubtitle>

					{/* sign up with social account */}
					<Box my={4}>
						<AuthIconButton btnText="Sign Up with Google" icon={<GoogleCircleSvg />} />
						<AuthIconButton btnText="Sign Up with Facebook" icon={<FacebookCircleSvg />} />
						<AuthIconButton btnText="Sign Up with Apple" icon={<ApplesSvg />} />
					</Box>

					<Divider>OR</Divider>

					{/* sign up with email and password */}
					<Box component="form" autoComplete="off">
						<StyledBox>
							<Label fontSize={18}>First Name</Label>
							<StyedTextField
								required
								InputProps={{ startAdornment: <FieldIcon icon={<PersonFillSvg />} /> }}
							/>
						</StyledBox>
						<StyledBox>
							<Label fontSize={18}>Last Name</Label>
							<StyedTextField
								required
								InputProps={{ startAdornment: <FieldIcon icon={<PersonFillSvg />} /> }}
							/>
						</StyledBox>
						<StyledBox>
							<Label fontSize={18}>Email Address *</Label>
							<StyedTextField
								required
								type="email"
								InputProps={{ startAdornment: <FieldIcon icon={<MailFillSvg />} /> }}
							/>
						</StyledBox>
						<StyledBox>
							<Label fontSize={18}>Password</Label>
							<TextField
								required
								fullWidth
								type={values.showPassword ? "text" : "password"}
								value={values.newPassword}
								onChange={handleChange("newPassword")}
								sx={{ "& .MuiOutlinedInput-root": { pl: 0 } }}
								InputProps={{
									startAdornment: <FieldIcon icon={<LockFillSvg />} />,
									endAdornment: (
										<InputAdornment position="start">
											<InputAdornmentElNewPass />
										</InputAdornment>
									),
								}}
							/>
							{/* password label message */}
							{values.newPassword.length ? (
								<Box sx={{ width: "100%", mt: 1.25 }}>
									<LinearProgress variant="determinate" value={isStrongPass ? 100 : 50} />
									<Typography textAlign="right" variant="body2" color="primary">
										{isStrongPass ? "Strong Password" : "Weak Password"}
									</Typography>
								</Box>
							) : null}
						</StyledBox>
						<StyledBox>
							<Label fontSize={18}>Confirm Password *</Label>
							<TextField
								required
								fullWidth
								type={values.showConfirmPassword ? "text" : "password"}
								value={values.confirmPassword}
								onChange={handleChange("confirmPassword")}
								sx={{ "& .MuiOutlinedInput-root": { pl: 0 } }}
								InputProps={{
									startAdornment: <FieldIcon icon={<LockFillSvg />} />,
									endAdornment: (
										<InputAdornment position="start">
											<InputAdornmentElConfirmPass />
										</InputAdornment>
									),
								}}
							/>
						</StyledBox>

						<FormControlLabel
							sx={{ mb: 2.5 }}
							control={<Checkbox defaultChecked />}
							label={
								<>
									I agree to the{" "}
									<Button sx={{ textDecoration: "underline" }}>Terms of Service</Button> &{" "}
									<Button sx={{ textDecoration: "underline" }}>Privacy Policy</Button>
								</>
							}
						/>

						<Button type="submit" size="large" variant="contained" color="secondary" fullWidth>
							Sign Up
						</Button>
					</Box>
					<StyledFooterBox>
						<AuthFooterTitle>Already have an account?</AuthFooterTitle>{" "}
						<Button sx={{ fontSize: 18 }}>Sign In</Button>
					</StyledFooterBox>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default SignUp;
