import { Box } from "@mui/material";
import { BackIconButton } from "../../../ui";
import { RoundButton } from "../../../styledComponents";
import { ITabChange } from "../../../../types/tab-change";
import { SHIPPING_TABS } from "../../../../constants/tabs/shipping";

const AddShipping = ({ handleTabChange }: ITabChange) => {
	return (
		<Box my={2.5}>
			<Box mb={3.5} display="flex" alignItems="center" justifyContent="space-between">
				<BackIconButton onClick={() => handleTabChange(SHIPPING_TABS.ROOT)}>Add new</BackIconButton>
				<RoundButton color="secondary" variant="contained" sx={{ px: 5 }}>
					Taxes
				</RoundButton>
			</Box>

			{/* others section */}
			<Box component="section" />
		</Box>
	);
};

export default AddShipping;
