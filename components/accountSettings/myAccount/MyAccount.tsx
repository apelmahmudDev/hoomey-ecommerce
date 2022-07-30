import { Box, TextField, Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { isEmailAddress } from "../../../utils/validations";
import { AccountSettingsSvg } from "../../icons";
import { Label, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";

interface State {
	firstName: string;
	lastName: string;
	email: string;
	dateOfBirth: string;
}

const MyAccount = () => {
	const [isError, setIsError] = useState(false);

	const [values, setValues] = useState<State>({
		firstName: "",
		lastName: "",
		email: "",
		dateOfBirth: "",
	});

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	// email validation with regex
	useEffect(() => {
		if (isEmailAddress(values.email)) {
			setIsError(false);
		} else {
			setIsError(true);
		}
	}, [values]);

	return (
		<Box>
			<TitleFlexStack>
				<AccountSettingsSvg />
				<TitleText>Account Settings</TitleText>
			</TitleFlexStack>
			<SettingsDivider />
			<Box
				component="form"
				sx={{
					"& .MuiTextField-root": { bgcolor: "#fff" },
				}}
			>
				{/* first & last name */}
				<Box component="div" my={2.5}>
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={6}>
							<Box>
								<Label>First Name</Label>
								<TextField
									onChange={handleChange("firstName")}
									required
									defaultValue="Robert"
									fullWidth
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box>
								<Label>Last Name</Label>
								<TextField required defaultValue="Bruce" fullWidth />
							</Box>
						</Grid>
					</Grid>
				</Box>

				{/* email address */}
				<Box my={2.5}>
					<Label>Email Address</Label>
					<TextField
						required
						type="email"
						fullWidth
						error={isError}
						placeholder="example@gmail.com"
						onChange={handleChange("email")}
						helperText={isError && "The email address must be valid and include @"}
					/>
				</Box>

				{/* Date of Birth */}
				<Label>Date of Birth</Label>
				<Grid container spacing={2.5}>
					{/* day */}
					<Grid item xs={12} md={3}>
						<TextField required defaultValue="Day" fullWidth />
					</Grid>
					{/* month */}
					<Grid item xs={12} md={6}>
						<TextField required defaultValue="Month" fullWidth />
					</Grid>
					{/* year */}
					<Grid item xs={12} md={3}>
						<TextField required defaultValue="Year" fullWidth />
					</Grid>
				</Grid>

				{/* cancel & save change button */}
				<Box mt={6}>
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={6}>
							<Button size="large" color="secondary" variant="contained" fullWidth>
								Cancel
							</Button>
						</Grid>
						<Grid item xs={12} md={6}>
							<Button size="large" type="submit" color="secondary" variant="outlined" fullWidth>
								Save Changes
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default MyAccount;
