import { Box, Button, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import ChangePass from "../../icons/ChangePass";
import { Label, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { EyeClose } from "../../icons";

interface State {
	currentPassword: string;
	newPassword: string;
	showPassword: boolean;
}

const ChangePassword = () => {
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
					{values.showPassword ? <Visibility /> : <EyeClose />}
				</IconButton>
			</InputAdornment>
		);
	};

	return (
		<Box>
			<TitleFlexStack>
				<ChangePass />
				<TitleText>Change Password</TitleText>
			</TitleFlexStack>
			<SettingsDivider />
			<Box
				component="form"
				sx={{
					"& .MuiTextField-root": { bgcolor: "#fff" },
				}}
			>
				{/* current password */}
				<Box my={2.5}>
					<Label>Current Password</Label>
					<OutlinedInput
						fullWidth
						type={values.showPassword ? "text" : "password"}
						value={values.currentPassword}
						onChange={handleChange("currentPassword")}
						endAdornment={<InputAdornmentEl />}
					/>
				</Box>
				{/* new password */}
				<Box my={2.5}>
					<Label>New Password</Label>
					<OutlinedInput
						fullWidth
						type={values.showPassword ? "text" : "password"}
						value={values.newPassword}
						onChange={handleChange("newPassword")}
						endAdornment={<InputAdornmentEl />}
					/>
				</Box>
				{/* Re-Enter New Password */}
				<Box my={2.5}>
					<Label>Re-Enter New Password</Label>
					<OutlinedInput
						fullWidth
						type={values.showPassword ? "text" : "password"}
						value={values.newPassword}
						onChange={handleChange("newPassword")}
						endAdornment={<InputAdornmentEl />}
					/>
				</Box>

				{/* cancel & save change button */}
				<Box mt={6}>
					<Button type="submit" size="large" color="secondary" variant="contained" fullWidth>
						Confirm
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default ChangePassword;
