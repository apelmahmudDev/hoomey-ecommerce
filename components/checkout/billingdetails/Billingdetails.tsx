import { Typography, Box, TextField as MuiTextField, Grid, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";

export const Label = styled(Typography)({
	marginBottom: "5px",
	fontSize: 10,
	color: "#727376",
});

const TextField = styled(MuiTextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "0 !important",
		fontSize: "10px !important",
		color: "#656565 !important",
	},
});

const Billingdetails = () => {
	return (
		<div>
			<Typography sx={{ mb: 3 }} variant="h6">
				Billing details
			</Typography>
			<Box component="form" autoComplete="off">
				<Grid container spacing={{ xs: 0, sm: 2, md: 5 }}>
					<Grid item xs={12} sm={6}>
						<Box component="div" sx={{ my: 1.9 }}>
							<Label>First name *</Label>
							<TextField required fullWidth />
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box component="div" sx={{ my: 1.9 }}>
							<Label>Last name *</Label>
							<TextField required fullWidth />
						</Box>
					</Grid>
				</Grid>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Email address *</Label>
					<TextField type="email" required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Password *</Label>
					<TextField type="password" required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Phone *</Label>
					<TextField type="tel" inputMode="numeric" required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Country / Region *</Label>
					<TextField required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Street address *</Label>
					<TextField required fullWidth placeholder="House number and street name" />
					<TextField sx={{ my: 1.9 }} fullWidth placeholder="Apartment, suit, unit, etc. (optional)" />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Town / City *</Label>
					<TextField required fullWidth placeholder="House number and street name" />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Town / City *</Label>
					<TextField required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>State *</Label>
					<TextField required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>ZIP *</Label>
					<TextField required fullWidth />
				</Box>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Company name (optional)</Label>
					<TextField fullWidth />
				</Box>
				<Typography sx={{ my: 3 }} variant="h6">
					Shipping Details
				</Typography>
				<FormControlLabel
					sx={{ "& .MuiTypography-root": { fontSize: 10 } }}
					control={<Checkbox size="small" />}
					label="Ship to a different address?"
				/>
				<Box component="div" sx={{ my: 1.9 }}>
					<Label>Order notes (optional)</Label>
					<TextField fullWidth multiline />
				</Box>
			</Box>
		</div>
	);
};

export default Billingdetails;
