import { FC, ReactNode, useState } from "react";
import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIconButton } from "../../../ui";
import Visibility from "@mui/icons-material/Visibility";
import { EyeCloseSvg, LockFillSvg } from "../../../icons";
import { Label } from "../../../styledComponents";
import { AuthDevider, AuthTitle, StyedTextField, StyledBox } from "../styledComponents";

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

const PasswordChange: FC = () => {
	const [isPasswordOpen, setIsPasswordOpen] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsPasswordOpen(boolean);
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
			open={isPasswordOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { xs: "auto", sm: 620, md: 900 } } }}
		>
			<DialogContent sx={{ py: 3, px: 5 }}>
				<CloseIconButton onClick={() => handleTogglePopup(false)} />
				<Box>
					<AuthTitle>Password Change</AuthTitle>
					<AuthDevider />

					{/* sign up with email and password */}
					<Box component="form" autoComplete="off">
						<StyledBox>
							<Label fontSize={18}>Current Password</Label>
							<StyedTextField
								type={values.showPassword ? "text" : "password"}
								value={values.currentPassword}
								onChange={handleChange("currentPassword")}
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
						<StyledBox>
							<Label fontSize={18}>New Password</Label>
							<StyedTextField
								type={values.showPassword ? "text" : "password"}
								value={values.currentPassword}
								onChange={handleChange("currentPassword")}
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
						<StyledBox>
							<Label fontSize={18}>Re-Enter New Password</Label>
							<StyedTextField
								type={values.showPassword ? "text" : "password"}
								value={values.currentPassword}
								onChange={handleChange("currentPassword")}
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

						<Button type="submit" size="large" variant="contained" color="secondary" fullWidth>
							Confirm
						</Button>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default PasswordChange;
