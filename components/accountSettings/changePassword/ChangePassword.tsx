import { Box, Button, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { Label, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { ChangePassSvg } from "../../icons";
import { InputAdornmentElPass } from "../../ui";

interface State {
	currentPassword: string;
	newPassword: string;
	reEnterNewPassword: string;
	showCurrentPassword: boolean;
	showNewPassword: boolean;
	showReEnterPassword: boolean;
}

const ChangePassword = () => {
	const [values, setValues] = useState<State>({
		currentPassword: "",
		newPassword: "",
		reEnterNewPassword: "",
		showCurrentPassword: false,
		showNewPassword: false,
		showReEnterPassword: false,
	});

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = (props: { key: string; value: boolean }) => {
		setValues({ ...values, [props.key]: !props.value });
	};

	return (
		<Box>
			<TitleFlexStack>
				<ChangePassSvg />
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
						type={values.showCurrentPassword ? "text" : "password"}
						value={values.currentPassword}
						onChange={handleChange("currentPassword")}
						endAdornment={
							<InputAdornmentElPass
								isShowing={values.showCurrentPassword}
								onClick={() =>
									handleClickShowPassword({
										key: "showCurrentPassword",
										value: values.showCurrentPassword,
									})
								}
							/>
						}
					/>
				</Box>
				{/* new password */}
				<Box my={2.5}>
					<Label>New Password</Label>
					<OutlinedInput
						fullWidth
						type={values.showNewPassword ? "text" : "password"}
						value={values.newPassword}
						onChange={handleChange("newPassword")}
						endAdornment={
							<InputAdornmentElPass
								isShowing={values.showNewPassword}
								onClick={() =>
									handleClickShowPassword({
										key: "showNewPassword",
										value: values.showNewPassword,
									})
								}
							/>
						}
					/>
				</Box>
				{/* Re-Enter New Password */}
				<Box my={2.5}>
					<Label>Re-Enter New Password</Label>
					<OutlinedInput
						fullWidth
						type={values.showReEnterPassword ? "text" : "password"}
						value={values.reEnterNewPassword}
						onChange={handleChange("reEnterNewPassword")}
						endAdornment={
							<InputAdornmentElPass
								isShowing={values.showReEnterPassword}
								onClick={() =>
									handleClickShowPassword({
										key: "showReEnterPassword",
										value: values.showReEnterPassword,
									})
								}
							/>
						}
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
