import { CardContent, Typography, InputAdornment, Grid, Button, Box, FormControlLabel, Checkbox } from "@mui/material";
import { SETTINGS_TABS } from "../../../../../constants/tabs/settings";
import { useAppDispatch } from "../../../../../store/hooks";
import { tabSwitch } from "../../../../../store/slices/settingsSlice";
import { StyledCard, StyledLabel, StyledTextBox, StyledTextField } from "../../../components/styledComponents";

const Coupons = () => {
	const dispatch = useAppDispatch();

	return (
		<StyledCard>
			<CardContent>
				<Box sx={{ display: "flex", alignItems: "center", gap: 2.5, justifyContent: "space-between" }}>
					<Typography gutterBottom fontWeight="medium">
						Coupons
					</Typography>
					<Button onClick={() => dispatch(tabSwitch(SETTINGS_TABS.MANAGE_COUPON))}>Manage Coupon</Button>
				</Box>

				{/* form input */}

				<StyledTextBox>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel>Coupon</StyledLabel>
							<StyledTextField size="small" fullWidth placeholder="HOOM123" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel>Amount</StyledLabel>
							<StyledTextField
								size="small"
								fullWidth
								placeholder="50"
								InputProps={{
									startAdornment: <InputAdornment position="start">$</InputAdornment>,
								}}
							/>
						</Grid>
					</Grid>
				</StyledTextBox>

				<StyledTextBox>
					<StyledLabel>Coupon Expirey</StyledLabel>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledTextField size="small" fullWidth placeholder="mm/dd/yyyy" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant="contained" color="secondary" fullWidth>
								Create Coupon
							</Button>
						</Grid>
					</Grid>
				</StyledTextBox>

				<StyledTextBox>
					<FormControlLabel control={<Checkbox defaultChecked />} label="Get one 50% off" />
				</StyledTextBox>
			</CardContent>
		</StyledCard>
	);
};

export default Coupons;
