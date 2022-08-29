import { Box, Container, Grid } from "@mui/material";
import { BackIconButton } from "../../../ui";
import { RoundButton } from "../../../styledComponents";
import { ITabChange } from "../../../../types/tab-change";
import { SHIPPING_TABS } from "../../../../constants/tabs/shipping";
import Rates from "./Rates";
import RateStatusAndZone from "./RateStatusAndZone";

const AddShipping = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			<Box mb={3.5} display="flex" alignItems="center" justifyContent="space-between">
				<BackIconButton onClick={() => handleTabChange(SHIPPING_TABS.ROOT)}>Add new</BackIconButton>
				<RoundButton color="secondary" variant="contained" sx={{ px: 5 }}>
					Taxes
				</RoundButton>
			</Box>

			{/* others section -> will be form*/}
			<Box component="section">
				<Grid container spacing={2.5}>
					{/* rates */}
					<Grid item xs={12} md={6}>
						<Rates />
					</Grid>

					{/* rate status & zone */}
					<Grid item xs={12} md={6}>
						<RateStatusAndZone />
					</Grid>
				</Grid>

				{/* actions button */}
				<Container maxWidth="sm" sx={{ mt: 6 }}>
					<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
						<RoundButton fullWidth variant="outlined" color="secondary">
							Cancle
						</RoundButton>
						<RoundButton fullWidth variant="contained" color="secondary">
							Cancle
						</RoundButton>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default AddShipping;
