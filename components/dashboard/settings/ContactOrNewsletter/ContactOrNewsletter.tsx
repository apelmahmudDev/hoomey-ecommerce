import { Box, Grid } from "@mui/material";
import { SETTINGS_TABS } from "../../../../constants/tabs/settings";
import { useAppDispatch } from "../../../../store/hooks";
import { tabSwitch } from "../../../../store/slices/settingsSlice";
import { BackIconButton } from "../../../ui";

const ContactOrNewsletter = () => {
	const dispatch = useAppDispatch();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => dispatch(tabSwitch(SETTINGS_TABS.ROOT))}>
				Manage Contact Us / Newsletter
			</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<Grid container spacing={2.5}>
					{/* menu */}
					<Grid item xs={12} md={4} />

					{/* add item */}
					<Grid item xs={12} md={8} />
				</Grid>
			</Box>
		</Box>
	);
};

export default ContactOrNewsletter;
