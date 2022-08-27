import { Typography, Box, Grid } from "@mui/material";
import Coupons from "./Coupons";
import Manage from "./Manage";
import MegaMenu from "./MegaMenu";
import PaymentMethod from "./PaymentMethod";
import PromoBar from "./PromoBar";
import UserProfile from "./UserProfile";

const Settings = () => {
	return (
		<div>
			<Typography sx={{ mb: 4, mt: 2 }} variant="h6" fontWeight={600}>
				Settings
			</Typography>

			{/* settings sections */}
			<Box component="section">
				<UserProfile />

				{/* payment method & promo bar */}
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={6}>
						<PaymentMethod />
					</Grid>
					<Grid item xs={12} md={6}>
						<PromoBar />
					</Grid>
				</Grid>

				{/* mega menu & manage*/}
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={6}>
						<MegaMenu />
					</Grid>
					<Grid item xs={12} md={6}>
						<Manage />
					</Grid>
				</Grid>

				<Coupons />
			</Box>
		</div>
	);
};

export default Settings;
