import { FC, ReactNode, useState } from "react";
import { Box, Button, Checkbox, Divider, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { AuthIconButton, CloseIconButton } from "../../../ui";
import Visibility from "@mui/icons-material/Visibility";
import { ApplesSvg, EyeCloseSvg, FacebookCircleSvg, GoogleCircleSvg, LockFillSvg, MailFillSvg } from "../../../icons";
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

interface State {
	currentPassword: string;
	newPassword: string;
	showPassword: boolean;
}

const FieldIcon = ({ icon }: { icon: ReactNode }) => {
	return (
		<InputAdornment position="start" sx={{ "& svg": { background: "#292929" } }}>
			{icon}
		</InputAdornment>
	);
};

const SignIn: FC = () => {
	const [isSignUpOpen, setIsSignUpOpen] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsSignUpOpen(boolean);
	};

	const [values, setValues] = useState<State>({
		currentPassword: "",
		newPassword: "",
		showPassword: false,
	});

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	// common components
	const InputAdornmentEl = () => {
		return (
			<InputAdornment position="end">
				<IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
					{values.showPassword ? <Visibility /> : <EyeCloseSvg />}
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
					<AuthTitle>Sign In</AuthTitle>
					<AuthDevider />
					<AuthSubtitle>Please fill in your login details below</AuthSubtitle>

					{/* sign up with email and password */}
					<Box component="form" autoComplete="off">
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
								fullWidth
								type={values.showPassword ? "text" : "password"}
								value={values.currentPassword}
								onChange={handleChange("currentPassword")}
								sx={{ "& .MuiOutlinedInput-root": { pl: 0 } }}
								InputProps={{
									startAdornment: <FieldIcon icon={<LockFillSvg />} />,
									endAdornment: (
										<InputAdornment position="start">
											<InputAdornmentEl />
										</InputAdornment>
									),
								}}
							/>
						</StyledBox>

						<FormControlLabel
							sx={{ mb: 2.5 }}
							control={<Checkbox defaultChecked />}
							label="Stay Signed In"
						/>

						<Button type="submit" size="large" variant="contained" color="secondary" fullWidth>
							Sign In
						</Button>
					</Box>

					<Divider sx={{ mt: 6 }}>OR</Divider>
					{/* sign up with social account */}
					<Box my={4}>
						<AuthIconButton btnText="Sign Up with Google" icon={<GoogleCircleSvg />} />
						<AuthIconButton btnText="Sign Up with Facebook" icon={<FacebookCircleSvg />} />
						<AuthIconButton btnText="Sign Up with Apple" icon={<ApplesSvg />} />
					</Box>

					<StyledFooterBox>
						<AuthFooterTitle>Don&apos;t have an account?</AuthFooterTitle>{" "}
						<Button sx={{ fontSize: 18 }}>Sign Up</Button>
					</StyledFooterBox>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default SignIn;
