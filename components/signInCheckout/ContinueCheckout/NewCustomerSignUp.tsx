import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import { LockForInputSvg, MailSvg, PersonSvg } from "../../icons";
import { Label, styles } from "./ContinueCheckout";

const NewCustomerSignUp = () => {
	return (
		<Box sx={{ p: 2.5, ...styles.b, ...styles.bg }}>
			<Typography sx={{ fontWeight: 600 }}>New Customer</Typography>
			<Typography sx={{ fontSize: 12, my: 2.5 }}>Become a member today - it’s fast & free!</Typography>
			<Box component="form" autoComplete="off">
				<Box component="div" sx={{ my: 2.5 }}>
					<Label>First Name</Label>
					<TextField
						required
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PersonSvg />
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Box component="div" sx={{ my: 2.5 }}>
					<Label>Last Name</Label>
					<TextField
						required
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PersonSvg />
								</InputAdornment>
							),
						}}
					/>
				</Box>
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
				<Box component="div" sx={{ my: 2.5 }}>
					<Label>Repeat Password</Label>
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
				<Button type="submit" variant="contained" color="secondary" fullWidth size="large">
					Sign Up
				</Button>
			</Box>
		</Box>
	);
};

export default NewCustomerSignUp;
